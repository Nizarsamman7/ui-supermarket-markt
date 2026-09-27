import Link from "next/link";

const aisles = [
  ["Produce", "Today's crates from the morning market"],
  ["Bakery", "Bread out at 7:30"],
  ["Dairy", "Local milk and cheese"],
  ["Pantry", "Pasta, rice, oil"],
  ["Household", "Soap and paper"],
];

const specials = [
  ["Tomatoes", "€1.49", "500g"],
  ["Sourdough", "€2.80", "loaf"],
  ["Eggs", "€3.10", "10"],
  ["Olive oil", "€7.95", "500ml"],
];

export default function HomePage() {
  return (
    <>
      <section className="deal">
        <div>
          <p>Week 12</p>
          <h1>Tomatoes by the crate. Bread still warm.</h1>
          <p><Link href="/week">All of this week's prices</Link></p>
        </div>
        <div className="price-pill"><span>Featured</span><strong>€1.49</strong><span>vine tomatoes, 500g</span></div>
      </section>
      <section className="aisles" id="aisles">
        {aisles.map(([title, text]) => (
          <article className="tile" key={title}><h2>{title}</h2><p>{text}</p></article>
        ))}
      </section>
      <section className="specials" id="week">
        <h2>On the shelf</h2>
        <div className="card-row">
          {specials.map(([name, price, unit]) => (
            <article className="card" key={name}><span>{unit}</span><b>{price}</b><strong>{name}</strong></article>
          ))}
        </div>
      </section>
    </>
  );
}
