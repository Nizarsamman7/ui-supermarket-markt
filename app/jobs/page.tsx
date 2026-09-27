import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Jobs" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Work"}</p>
      <h1>{"Floor, till, and the bakery."}</h1>
      <p className="lede">{"We hire people who will talk to customers. Experience in a shop helps. It is not required for the floor."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Till"}</h2><p>{"Mornings and Saturdays."}</p></article>
<article className="panel"><h2>{"Floor"}</h2><p>{"Restock and produce."}</p></article>
<article className="panel"><h2>{"Bakery"}</h2><p>{"Early start, from 5:30."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
