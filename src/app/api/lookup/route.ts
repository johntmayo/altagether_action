import {
  californiaSenators,
  featuredDistricts,
} from "@/data/doaCampaign";
import type {
  LookupResponse,
  LookupResultCard,
  LookupLegislator,
} from "@/types/lookup";
import type { PoliticianId } from "@/data/doaCampaign";

type GeocodioLegislator = {
  type: "senator" | "representative";
  bio?: {
    first_name?: string;
    last_name?: string;
  };
  contact?: {
    phone?: string;
    contact_form?: string;
    url?: string;
  };
};

type GeocodioResult = {
  address_components?: {
    state?: string;
  };
  fields?: {
    congressional_districts?: Array<{
      district_number?: number;
      current_legislators?: GeocodioLegislator[];
    }>;
  };
};

function parseLegislator(leg: GeocodioLegislator): LookupLegislator {
  const bio = leg.bio ?? {};
  const contact = leg.contact ?? {};
  return {
    type: leg.type,
    firstName: bio.first_name ?? "",
    lastName: bio.last_name ?? "",
    phone: contact.phone,
    contactForm: contact.contact_form,
    url: contact.url,
  };
}

function buildCards(
  state: string,
  district: string,
  legislators: LookupLegislator[],
): LookupResultCard[] {
  const cards: LookupResultCard[] = [];

  if (state === "CA") {
    for (const senator of californiaSenators) {
      cards.push({
        kind: "featured",
        politicianId: senator.id,
        displayName: senator.displayName,
        role: "U.S. Senator, California",
      });
    }

    const featuredId = featuredDistricts[district] as PoliticianId | undefined;
    const representative = legislators.find((l) => l.type === "representative");

    if (featuredId) {
      const repName = representative
        ? `${representative.firstName} ${representative.lastName}`.trim()
        : "Your Representative";

      cards.push({
        kind: "featured",
        politicianId: featuredId,
        displayName: repName,
        role: `Representative, CA-${district}`,
      });
    } else if (representative) {
      cards.push(genericCardFromLegislator(representative, state, district));
    }
  } else {
    for (const leg of legislators) {
      cards.push(genericCardFromLegislator(leg, state, district));
    }
  }

  return cards;
}

function genericCardFromLegislator(
  leg: LookupLegislator,
  state: string,
  district: string,
): LookupResultCard {
  const role =
    leg.type === "senator"
      ? `U.S. Senator, ${state}`
      : `Representative, ${state}-${district}`;

  return {
    kind: "generic",
    displayName: `${leg.firstName} ${leg.lastName}`.trim(),
    role,
    phone: leg.phone,
    contactUrl: leg.contactForm || leg.url,
  };
}

export async function POST(request: Request): Promise<Response> {
  let address: string;

  try {
    const body = (await request.json()) as { address?: string };
    address = (body.address ?? "").trim();
  } catch {
    return Response.json(
      {
        ok: false,
        code: "invalid_address",
        message: "Please enter a valid street address.",
      } satisfies LookupResponse,
      { status: 400 },
    );
  }

  if (!address) {
    return Response.json(
      {
        ok: false,
        code: "invalid_address",
        message: "Please enter your full street address.",
      } satisfies LookupResponse,
      { status: 400 },
    );
  }

  const apiKey = process.env.GEOCODIO_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        ok: false,
        code: "api_error",
        message:
          "Address lookup is temporarily unavailable. Please try again later or use the House directory.",
      } satisfies LookupResponse,
      { status: 503 },
    );
  }

  const url = new URL("https://api.geocod.io/v1.9/geocode");
  url.searchParams.set("q", address);
  url.searchParams.set("fields", "cd");
  url.searchParams.set("limit", "1");
  url.searchParams.set("api_key", apiKey);

  try {
    const geocodeResponse = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!geocodeResponse.ok) {
      throw new Error("Geocodio request failed");
    }

    const payload = (await geocodeResponse.json()) as {
      results?: GeocodioResult[];
    };
    const result = payload.results?.[0];

    if (!result) {
      return Response.json({
        ok: false,
        code: "invalid_address",
        message:
          "We couldn't find that address — try adding your city and state.",
      } satisfies LookupResponse);
    }

    const state = result.address_components?.state;
    const districtData = result.fields?.congressional_districts?.[0];

    if (!state || !districtData?.district_number) {
      return Response.json({
        ok: false,
        code: "no_district",
        message:
          "We couldn't find your congressional district — try your full street address, city, and state.",
      } satisfies LookupResponse);
    }

    const district = String(districtData.district_number);
    const legislators = (districtData.current_legislators ?? []).map(
      parseLegislator,
    );

    if (state !== "CA" && legislators.length === 0) {
      return Response.json({
        ok: false,
        code: "no_legislators",
        message:
          "We couldn't find your district — try adding your city and state.",
      } satisfies LookupResponse);
    }

    const cards = buildCards(state, district, legislators);

    if (cards.length === 0) {
      return Response.json({
        ok: false,
        code: "no_legislators",
        message:
          "We couldn't find legislators for that address — try your full street address.",
      } satisfies LookupResponse);
    }

    return Response.json({
      ok: true,
      state,
      district,
      cards,
    } satisfies LookupResponse);
  } catch {
    return Response.json({
      ok: false,
      code: "api_error",
      message:
        "Sorry — we couldn't look that up. Try your full street address, or use the House directory.",
    } satisfies LookupResponse);
  }
}
