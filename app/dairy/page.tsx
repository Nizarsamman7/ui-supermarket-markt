import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dairy" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Cold"}</p>
      <h1>{"Milk, yoghurt, and a short cheese case."}</h1>
      <p className="lede">{"Local milk arrives three times a week. Cheese is cut to order after 9:00."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Milk"}</h2><p>{"Whole and semi, glass bottles with a deposit."}</p></article>
<article className="panel"><h2>{"Yoghurt"}</h2><p>{"Plain, and one fruit pot that changes."}</p></article>
<article className="panel"><h2>{"Cheese"}</h2><p>{"Gouda, a soft cheese, and whatever the maker sent."}</p></article>
</div>
      
      
      
    </article>
  );
}
