import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  step?: number;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, step, title, intro, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className={styles.header}>
        {step != null && (
          <span className={styles.step} aria-hidden="true">
            {step}
          </span>
        )}
        <div>
          <h2 id={id ? `${id}-heading` : undefined} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={`${styles.intro} reading-copy`}>{intro}</p>}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
