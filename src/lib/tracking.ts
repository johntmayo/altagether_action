import { doaConfig } from "@/config/doaConfig";
import type { PoliticianId } from "@/data/doaCampaign";

export type TrackableAction = "call" | "email" | "post";

export function trackCampaignAction(
  politicianId: PoliticianId,
  action: TrackableAction,
): void {
  const url = `${doaConfig.trackingEndpoint}?t=${encodeURIComponent(politicianId)}&a=${encodeURIComponent(action)}&s=${doaConfig.trackingSource}`;

  try {
    void fetch(url, { mode: "no-cors", keepalive: true });
  } catch {
    // Tracking must not block user actions.
  }
}
