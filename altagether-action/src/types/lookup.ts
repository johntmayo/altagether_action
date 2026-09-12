import type { PoliticianId } from "@/data/doaCampaign";

export type LegislatorType = "senator" | "representative";

export type LookupLegislator = {
  type: LegislatorType;
  firstName: string;
  lastName: string;
  phone?: string;
  contactForm?: string;
  url?: string;
};

export type FeaturedCard = {
  kind: "featured";
  politicianId: PoliticianId;
  displayName: string;
  role: string;
};

export type GenericCard = {
  kind: "generic";
  displayName: string;
  role: string;
  phone?: string;
  contactUrl?: string;
};

export type LookupResultCard = FeaturedCard | GenericCard;

export type LookupSuccess = {
  ok: true;
  state: string;
  district: string;
  cards: LookupResultCard[];
};

export type LookupError = {
  ok: false;
  code: "invalid_address" | "no_district" | "no_legislators" | "api_error";
  message: string;
};

export type LookupResponse = LookupSuccess | LookupError;
