import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Aisles" };

const rows = ["Produce", "Bakery", "Dairy", "Butcher", "Pantry", "Frozen", "Household", "Flowers"];

export default function AislesPage() {
  return (
    <>
      <header className="head">
        <Link className="logo" href="/">Groen<i>markt</i></Link>
        <nav><Link href="/">Home</Link></nav>
      </header>
      <div className="page-pad">
        <h1>Find an aisle</h1>
        <div className="card-row">
          {rows.map((row) => <article className="card" key={row}><strong>{row}</strong></article>)}
        </div>
        <h2>Ask the shop</h2>
        <InquiryForm
          submitLabel="Send"
          fields={[
            { name: "name", label: "Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "note", label: "What are you looking for?", type: "textarea" },
          ]}
        />
      </div>
    </>
  );
}
