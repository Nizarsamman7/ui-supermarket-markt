import type { Metadata } from "next";
export const metadata: Metadata = { title: "Aisles" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Find"}</p>
      <h1>{"Where things live."}</h1>
      <p className="lede">{"The floor is small on purpose. If you cannot see it, ask. We would rather point than make you loop."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Produce"}</h2><p>{"Front left, under the windows."}</p></article>
<article className="panel"><h2>{"Bakery"}</h2><p>{"Behind the till, bread from 7:30."}</p></article>
<article className="panel"><h2>{"Dairy"}</h2><p>{"Back wall, cold cabinets."}</p></article>
<article className="panel"><h2>{"Butcher"}</h2><p>{"Counter at the rear, closed Mondays."}</p></article>
<article className="panel"><h2>{"Pantry"}</h2><p>{"Centre aisles."}</p></article>
<article className="panel"><h2>{"Household"}</h2><p>{"Far right, past frozen."}</p></article>
</div>
      
      
      
    </article>
  );
}
