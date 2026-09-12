"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import styles from "./Button.module.css";

type CopyButtonProps = {
  text: string;
  label: string;
  copiedLabel?: string;
  className?: string;
};

export function CopyButton({
  text,
  label,
  copiedLabel = "Copied ✓",
  className,
}: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    const success = await copyToClipboard(text);
    setStatus(success ? "copied" : "failed");

    window.setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }

  const displayLabel =
    status === "copied"
      ? copiedLabel
      : status === "failed"
        ? "Copy failed — try again"
        : label;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles.secondary} ${className ?? ""}`}
      onClick={() => void handleCopy()}
    >
      {displayLabel}
    </button>
  );
}
