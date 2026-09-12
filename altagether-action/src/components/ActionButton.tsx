"use client";

import { trackCampaignAction, type TrackableAction } from "@/lib/tracking";
import type { PoliticianId } from "@/data/doaCampaign";
import styles from "./Button.module.css";

type ActionButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  politicianId?: PoliticianId;
  action?: TrackableAction;
};

export function ActionButton({
  href,
  label,
  variant = "secondary",
  politicianId,
  action,
}: ActionButtonProps) {
  function handleClick() {
    if (politicianId && action) {
      trackCampaignAction(politicianId, action);
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${variant === "primary" ? styles.primary : styles.secondary}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
