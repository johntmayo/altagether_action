"use client";

import { CopyButton } from "./CopyButton";
import styles from "./ScriptAccordion.module.css";

type ScriptAccordionProps = {
  title: string;
  script: string;
  copyLabel?: string;
  defaultOpen?: boolean;
};

export function ScriptAccordion({
  title,
  script,
  copyLabel = "Copy script",
  defaultOpen = false,
}: ScriptAccordionProps) {
  return (
    <details className={styles.accordion} open={defaultOpen}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.panel}>
        <div className={styles.script}>{script}</div>
        <CopyButton text={script} label={copyLabel} />
      </div>
    </details>
  );
}

type ScriptAccordionGroupProps = {
  scripts: Array<{
    title: string;
    script: string;
    copyLabel?: string;
  }>;
};

export function ScriptAccordionGroup({ scripts }: ScriptAccordionGroupProps) {
  return (
    <div className={styles.group}>
      {scripts.map((item) => (
        <ScriptAccordion
          key={item.title}
          title={item.title}
          script={item.script}
          copyLabel={item.copyLabel}
        />
      ))}
    </div>
  );
}
