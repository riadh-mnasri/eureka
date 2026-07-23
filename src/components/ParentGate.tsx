"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const GATE_SESSION_KEY = "eureka:parent-gate-passed";

function randomFactor(): number {
  return 12 + Math.floor(Math.random() * 78); // 12..89
}

export function ParentGate({ children }: { children: React.ReactNode }) {
  const t = useTranslations("parentGate");
  const [passed, setPassed] = useState(false);
  const [question, setQuestion] = useState<{ a: number; b: number } | null>(null);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const alreadyPassed = typeof window !== "undefined" && window.sessionStorage.getItem(GATE_SESSION_KEY) === "1";
    // The gate question is randomized on purpose, and checking sessionStorage is
    // client-only; doing this after mount avoids a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPassed(alreadyPassed);
    if (!alreadyPassed) {
      setQuestion({ a: randomFactor(), b: randomFactor() });
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question) return;
    if (parseInt(answer, 10) === question.a * question.b) {
      window.sessionStorage.setItem(GATE_SESSION_KEY, "1");
      setPassed(true);
      setError(false);
    } else {
      setError(true);
      setQuestion({ a: randomFactor(), b: randomFactor() });
      setAnswer("");
    }
  }

  if (passed) {
    return <>{children}</>;
  }

  if (!question) {
    return <div className="max-w-md mx-auto px-4 py-24 text-center">…</div>;
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="notecard bg-card p-8">
        <p className="text-4xl mb-4" aria-hidden>
          🔒
        </p>
        <h1 className="font-heading text-xl sm:text-2xl font-extrabold mb-2">{t("title")}</h1>
        <p className="text-sm text-foreground/60 mb-6">{t("instructions")}</p>
        <form onSubmit={handleSubmit}>
          <p className="font-heading text-2xl font-bold mb-4">
            {question.a} × {question.b} = ?
          </p>
          <input
            type="number"
            inputMode="numeric"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            autoFocus
            className="w-full text-center text-lg font-bold rounded-xl border-2 border-foreground/20 px-4 py-3 mb-4 focus:outline-none focus:border-teal"
          />
          {error && <p className="text-sm text-coral-dark font-semibold mb-4">{t("wrong")}</p>}
          <button
            type="submit"
            className="ink-button w-full rounded-xl bg-teal text-white font-heading text-lg font-bold py-3 cursor-pointer"
            style={{
              // @ts-expect-error custom property read by the ink-button shadow
              "--btn-shadow": "var(--color-teal-dark)",
            }}
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
