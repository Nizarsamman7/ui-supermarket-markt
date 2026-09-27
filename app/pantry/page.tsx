import type { Metadata } from "next";
export const metadata: Metadata = { title: "Pantry" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Dry"}</p>
      <h1>{"The things you run out of."}</h1>
      <p className="lede">{"Pasta, rice, oil, tins, and coffee. We do not try to stock every brand."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Spaghetti"}</b><span>{"€1.40"}</span></div>
<div className="row"><b>{"Rice 1kg"}</b><span>{"€2.20"}</span></div>
<div className="row"><b>{"Olive oil"}</b><span>{"€7.95"}</span></div>
<div className="row"><b>{"Chopped tomatoes"}</b><span>{"€0.95"}</span></div>
<div className="row"><b>{"Coffee 250g"}</b><span>{"€9.50"}</span></div>
</div>
      
      
    </article>
  );
}
