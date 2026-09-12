"use client";

import { useState } from "react";
import { doaConfig } from "@/config/doaConfig";
import { RepresentativeCard } from "./RepresentativeCard";
import type { LookupResponse } from "@/types/lookup";
import styles from "./AddressLookup.module.css";

type LookupState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: Extract<LookupResponse, { ok: true }> }
  | { status: "error"; message: string; showHouseLink?: boolean };

export function AddressLookup() {
  const [address, setAddress] = useState("");
  const [state, setState] = useState<LookupState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = address.trim();
    if (!trimmed) {
      setState({
        status: "error",
        message: "Please enter your full street address.",
      });
      return;
    }

    setState({ status: "loading" });

    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: trimmed }),
      });

      const data = (await response.json()) as LookupResponse;

      if (data.ok) {
        setState({ status: "success", data });
      } else {
        setState({
          status: "error",
          message: data.message,
          showHouseLink: data.code === "api_error" || data.code === "no_district",
        });
      }
    } catch {
      setState({
        status: "error",
        message:
          "Sorry — we couldn't look that up. Try your full street address.",
        showHouseLink: true,
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => void handleSubmit(e)}>
        <label htmlFor="address" className={styles.label}>
          Street address
        </label>
        <div className={styles.row}>
          <input
            id="address"
            name="address"
            type="text"
            required
            autoComplete="street-address"
            placeholder="Your street address, city, state"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submit} disabled={state.status === "loading"}>
            {state.status === "loading" ? "Looking up…" : "Find your reps"}
          </button>
        </div>
        <p className={styles.privacy}>
          Use your full street address for the most accurate match. Your address
          is sent only to perform this lookup and is not stored by Altagether.
        </p>
      </form>

      <div className={styles.results} aria-live="polite" aria-atomic="true">
        {state.status === "loading" && (
          <p className={styles.status}>Looking up your district…</p>
        )}

        {state.status === "error" && (
          <div className={styles.error} role="alert">
            <p>{state.message}</p>
            {state.showHouseLink && (
              <p>
                You can also use{" "}
                <a
                  href={doaConfig.houseDirectoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the official House representative directory
                </a>
                .
              </p>
            )}
          </div>
        )}

        {state.status === "success" && (
          <div>
            <h3 className={styles.resultsTitle}>Your members of Congress</h3>
            <div className={styles.cards}>
              {state.data.cards.map((card) => (
                <RepresentativeCard
                  key={`${card.kind}-${card.displayName}-${card.role}`}
                  card={card}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
