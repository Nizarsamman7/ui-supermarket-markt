import type { Metadata } from "next";
export const metadata: Metadata = { title: "Produce" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Crates"}</p>
      <h1>{"What came in this morning."}</h1>
      <p className="lede">{"We buy from two growers and the city market. If a crate is empty, it stays empty until tomorrow."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Leaves"}</h2><p>{"Lettuce, herbs, and whatever is not tired."}</p></article>
<article className="panel"><h2>{"Fruit"}</h2><p>{"Apples, citrus, and berries in season."}</p></article>
<article className="panel"><h2>{"Roots"}</h2><p>{"Potatoes, onions, carrots, priced by the kilo."}</p></article>
</div>
      
      
      
    </article>
  );
}
