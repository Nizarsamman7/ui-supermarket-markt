import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Open"}</p>
      <h1>{"The door times."}</h1>
      <p className="lede">{"The bakery starts earlier than the tills. You can smell bread before you can pay for it."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Monday–Friday"}</b><span>{"08:00–20:00"}</span></div>
<div className="row"><b>{"Saturday"}</b><span>{"08:00–18:00"}</span></div>
<div className="row"><b>{"Sunday"}</b><span>{"10:00–16:00"}</span></div>
<div className="row"><b>{"Butcher counter"}</b><span>{"Tue–Sat 09:00–17:00"}</span></div>
</div>
      
      
    </article>
  );
}
