import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Delivery" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"To the door"}</p>
      <h1>{"We deliver inside the neighbourhood."}</h1>
      <p className="lede">{"Orders placed before 11:00 go out the same afternoon. There is a €35 minimum."}</p>
      <p>{"We do not deliver frozen goods in July heat if the round is long. We will tell you before we leave the shop."}</p>
      
      
      
      <InquiryForm submitLabel={"Ask for a round"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"address","label":"Address"},{"name":"note","label":"What you need","type":"textarea"}]} />
    </article>
  );
}
