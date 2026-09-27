import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Marktplein"}</p>
      <h1>{"Marktplein 4. +31 20 123 4510."}</h1>
      <p className="lede">{"Write if you are a grower, a school, or a neighbour with a question."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
