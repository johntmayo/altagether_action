"use client";

import type { PoliticianId } from "@/data/doaCampaign";
import { trackCampaignAction, type TrackableAction } from "@/lib/tracking";
import { CopyIconButton } from "./CopyIconButton";
import styles from "./ContactField.module.css";

type ContactFieldProps = {
  label: string;
  value: string;
  copyValue: string;
  href?: string;
  trackPoliticianId?: PoliticianId;
  trackAction?: TrackableAction;
};

export function ContactField({
  label,
  value,
  copyValue,
  href,
  trackPoliticianId,
  trackAction,
}: ContactFieldProps) {
  function handleLinkClick() {
    if (trackPoliticianId && trackAction) {
      trackCampaignAction(trackPoliticianId, trackAction);
    }
  }
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <div className={styles.valueGroup}>
        {href ? (
          <a
            href={href}
            className={styles.valueLink}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onClick={handleLinkClick}
          >
            {value}
          </a>
        ) : (
          <span className={styles.value}>{value}</span>
        )}
        <CopyIconButton text={copyValue} label={`Copy ${label.toLowerCase()}`} />
      </div>
    </div>
  );
}
