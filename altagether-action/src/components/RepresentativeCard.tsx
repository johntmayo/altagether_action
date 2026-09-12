import { ActionButton } from "./ActionButton";
import { CopyButton } from "./CopyButton";
import {
  genericLookupScript,
  politicianActions,
} from "@/data/doaCampaign";
import type { LookupResultCard } from "@/types/lookup";
import styles from "./RepresentativeCard.module.css";

type RepresentativeCardProps = {
  card: LookupResultCard;
};

export function RepresentativeCard({ card }: RepresentativeCardProps) {
  if (card.kind === "featured") {
    const actions = politicianActions[card.politicianId];

    return (
      <article className={styles.card}>
        <h3 className={styles.name}>{card.displayName}</h3>
        <p className={styles.role}>{card.role}</p>
        <div className={styles.actions}>
          <ActionButton
            href={actions.phone}
            label="Call"
            variant="primary"
            politicianId={card.politicianId}
            action="call"
          />
          <ActionButton
            href={actions.email}
            label="Email"
            politicianId={card.politicianId}
            action="email"
          />
          <ActionButton
            href={actions.post}
            label="Post on X"
            politicianId={card.politicianId}
            action="post"
          />
        </div>
      </article>
    );
  }

  const phoneDigits = card.phone?.replace(/\D/g, "") ?? "";
  const telHref = phoneDigits ? `tel:+1${phoneDigits}` : undefined;

  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{card.displayName}</h3>
      <p className={styles.role}>{card.role}</p>
      <div className={styles.actions}>
        {telHref && card.phone && (
          <ActionButton
            href={telHref}
            label={`Call ${card.phone}`}
            variant="primary"
          />
        )}
        <CopyButton text={genericLookupScript} label="Copy script" />
        {card.contactUrl && (
          <ActionButton href={card.contactUrl} label="Open contact form" />
        )}
      </div>
      <p className={styles.note}>
        Copy the script, then paste it into their contact form — members of
        Congress outside our featured list accept messages by webform.
      </p>
    </article>
  );
}
