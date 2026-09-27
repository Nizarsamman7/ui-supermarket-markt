import type { Metadata } from "next";
export const metadata: Metadata = { title: "Loyalty" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Card"}</p>
      <h1>{"A paper stamp card. No app."}</h1>
      <p className="lede">{"Buy ten loaves, the eleventh is on us. The card lives in your wallet, not on a server."}</p>
      <p>{"Ask at the till. If you lose the card, we cannot look it up. That is the point of paper."}</p>
      
      
      
      
    </article>
  );
}
