"use client";

import { useEffect, useRef } from "react";
import { softrEmbeds, type SoftrEmbedKey } from "@/data/doaCampaign";
import styles from "./SoftrEmbed.module.css";

type SoftrEmbedProps = {
  embedKey: SoftrEmbedKey;
};

declare global {
  interface Window {
    iFrameResize?: (
      options: {
        checkOrigin: boolean;
        log: boolean;
        heightCalculationMethod: string;
      },
      selector: string,
    ) => void;
  }
}

let resizerLoader: Promise<void> | null = null;

function loadIframeResizer(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.iFrameResize) {
    return Promise.resolve();
  }

  if (!resizerLoader) {
    resizerLoader = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-iframe-resizer="true"]',
      );

      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.11/iframeResizer.min.js";
      script.async = true;
      script.dataset.iframeResizer = "true";
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.body.appendChild(script);
    });
  }

  return resizerLoader;
}

export function SoftrEmbed({ embedKey }: SoftrEmbedProps) {
  const embed = softrEmbeds[embedKey];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let cancelled = false;
    const selector = `#${embed.id}`;

    function bumpHeight() {
      const frame = iframeRef.current as HTMLIFrameElement & {
        iFrameResizer?: { resize: () => void };
      };
      frame?.iFrameResizer?.resize();
    }

    async function init() {
      try {
        await loadIframeResizer();
        if (cancelled || !window.iFrameResize) return;

        window.iFrameResize(
          {
            checkOrigin: false,
            log: false,
            heightCalculationMethod: "bodyScroll",
          },
          selector,
        );

        [400, 800, 1200, 2500, 4000, 6000].forEach((ms) => {
          window.setTimeout(bumpHeight, ms);
        });
      } catch {
        // Embed still works without dynamic resizing.
      }
    }

    void init();

    window.addEventListener("load", bumpHeight);
    window.addEventListener("resize", bumpHeight);

    return () => {
      cancelled = true;
      window.removeEventListener("load", bumpHeight);
      window.removeEventListener("resize", bumpHeight);
    };
  }, [embed.id]);

  return (
    <div className={styles.wrapper}>
      <iframe
        ref={iframeRef}
        id={embed.id}
        src={embed.src}
        title={`Department of Angels ${embedKey} embed`}
        width="100%"
        height={embed.initialHeight}
        scrolling="no"
        className={styles.frame}
      />
    </div>
  );
}
