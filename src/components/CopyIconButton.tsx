"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import styles from "./CopyIconButton.module.css";

type CopyIconButtonProps = {
  text: string;
  label: string;
};

export function CopyIconButton({ text, label }: CopyIconButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    const success = await copyToClipboard(text);
    setStatus(success ? "copied" : "failed");

    window.setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }

  const statusLabel =
    status === "copied"
      ? "Copied"
      : status === "failed"
        ? "Copy failed"
        : label;

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={statusLabel}
      title={statusLabel}
      onClick={() => void handleCopy()}
    >
      {status === "copied" ? "✓" : "⎘"}
    </button>
  );
}
