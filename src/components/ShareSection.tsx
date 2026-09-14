import Image from "next/image";
import { shareChannels } from "@/data/doaCampaign";
import buttonStyles from "./Button.module.css";
import styles from "./ShareSection.module.css";

export function ShareSection() {
  return (
    <ul className={styles.grid}>
      {shareChannels.map((channel) => (
        <li key={channel.key} className={styles.card}>
          <h3 className={styles.heading}>{channel.heading}</h3>

          <a
            className={styles.frame}
            href={channel.graphic.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={channel.graphic.src}
              width={channel.graphic.width}
              height={channel.graphic.height}
              alt={channel.graphic.alt}
              className={styles.graphic}
            />
          </a>

          <div className={styles.cardFooter}>
            <p className={styles.saveLine}>
              Click and save/copy{" "}
              <a href={channel.graphic.src} target="_blank" rel="noopener noreferrer">
                {channel.graphic.linkLabel}
              </a>
            </p>

            <a
              className={`${buttonStyles.button} ${buttonStyles.primary} ${styles.shareButton}`}
              href={channel.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {channel.buttonLabel}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
