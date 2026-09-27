import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Catering" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Trays"}</p>
      <h1>{"Platters for an office or a birthday."}</h1>
      <p className="lede">{"Order two days ahead. We do sandwiches, cheese, fruit, and bread. We do not do hot food."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Bread board"}</h2><p>{"Loaves, butter, and tomatoes. From €35."}</p></article>
<article className="panel"><h2>{"Cheese"}</h2><p>{"Three cheeses, enough for eight. From €48."}</p></article>
<article className="panel"><h2>{"Fruit"}</h2><p>{"Washed and cut. From €28."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
