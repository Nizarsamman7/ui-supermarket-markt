import type { Metadata } from "next";
export const metadata: Metadata = { title: "Bakery" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Oven"}</p>
      <h1>{"Bread is out at 7:30. Rolls follow."}</h1>
      <p className="lede">{"We bake in the shop. When the rack is empty, that is the end of the day, not a reason to sell yesterday's loaf."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Sourdough"}</b><span>{"€2.80"}</span></div>
<div className="row"><b>{"Sesame loaf"}</b><span>{"€3.10"}</span></div>
<div className="row"><b>{"Morning roll"}</b><span>{"€0.80"}</span></div>
<div className="row"><b>{"Rye"}</b><span>{"€3.40"}</span></div>
</div>
      
      
    </article>
  );
}
