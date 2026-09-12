import { ActionButton } from "./ActionButton";
import { ContactField } from "./ContactField";
import { CopyButton } from "./CopyButton";
import {
  genericLookupScript,
  politicianActions,
} from "@/data/doaCampaign";
import {
  displayContactUrl,
  formatPhoneFromRaw,
  formatPhoneFromTel,
} from "@/lib/formatPhone";
import type { LookupResultCard } from "@/types/lookup";
import styles from "./RepresentativeCard.module.css";

type RepresentativeCardProps = {
  card: LookupResultCard;
};

export function RepresentativeCard({ card }: RepresentativeCardProps) {
  if (card.kind === "featured") {
    const actions = politicianActions[card.politicianId];
    const phone = formatPhoneFromTel(actions.phone);

    return (
      <article className={styles.card}>
        <h3 className={styles.name}>{card.displayName}</h3>
        <p className={styles.role}>{card.role}</p>

        <div className={styles.contactFields}>
          {phone && (
            <ContactField
              label="Phone"
              value={phone}
              copyValue={phone}
              href={actions.phone}
              trackPoliticianId={card.politicianId}
              trackAction="call"
            />
          )}

          <ContactField
            label="Contact form"
            value={displayContactUrl(actions.email)}
            copyValue={actions.email}
            href={actions.email}
            trackPoliticianId={card.politicianId}
            trackAction="email"
          />
        </div>

        <div className={styles.actions}>
          <ActionButton
            href={actions.email}
            label="Open contact form"
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
        <p className={styles.note}>
          On a computer? Copy the phone number and call from your phone. Members
          of Congress use web contact forms rather than public email addresses.
        </p>
      </article>
    );
  }

  const phoneDigits = card.phone?.replace(/\D/g, "") ?? "";
  const telHref = phoneDigits ? `tel:+1${phoneDigits}` : undefined;
  const phone = card.phone ? formatPhoneFromRaw(card.phone) : null;

  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{card.displayName}</h3>
      <p className={styles.role}>{card.role}</p>

      <div className={styles.contactFields}>
        {phone && telHref && (
          <ContactField
            label="Phone"
            value={phone}
            copyValue={phone}
            href={telHref}
          />
        )}

        {card.contactUrl && (
          <ContactField
            label="Contact form"
            value={displayContactUrl(card.contactUrl)}
            copyValue={card.contactUrl}
            href={card.contactUrl}
          />
        )}
      </div>

      <div className={styles.actions}>
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
