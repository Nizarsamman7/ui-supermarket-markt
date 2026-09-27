import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Shop"}</p>
      <h1>{"Questions at the till."}</h1>
      <p className="lede">{"Prices on this site are samples."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Do you take cards?"}</summary><p>{"Yes, and cash."}</p></details>
<details className="panel"><summary>{"Can I return milk?"}</summary><p>{"If it is unopened and still in date, yes."}</p></details>
<details className="panel"><summary>{"Is there parking?"}</summary><p>{"Two spaces behind the shop, then the street."}</p></details>
<details className="panel"><summary>{"Do you have a basket service?"}</summary><p>{"Yes. Leave a list before 11:00."}</p></details>
</div>
      
    </article>
  );
}
