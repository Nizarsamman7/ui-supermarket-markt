import type { Metadata } from "next";
export const metadata: Metadata = { title: "This week" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Prices"}</p>
      <h1>{"The board we write on Monday."}</h1>
      <p className="lede">{"These are sample shelf prices for the template. Replace them from the real till."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Vine tomatoes"}</b><span>{"€1.49 / 500g"}</span></div>
<div className="row"><b>{"Sourdough"}</b><span>{"€2.80"}</span></div>
<div className="row"><b>{"Eggs"}</b><span>{"€3.10 / 10"}</span></div>
<div className="row"><b>{"Olive oil"}</b><span>{"€7.95 / 500ml"}</span></div>
<div className="row"><b>{"Chicken"}</b><span>{"€8.90 / kg"}</span></div>
<div className="row"><b>{"Yoghurt"}</b><span>{"€1.20"}</span></div>
<div className="row"><b>{"Apples"}</b><span>{"€2.10 / kg"}</span></div>
<div className="row"><b>{"Coffee beans"}</b><span>{"€9.50 / 250g"}</span></div>
</div>
      
      
    </article>
  );
}
