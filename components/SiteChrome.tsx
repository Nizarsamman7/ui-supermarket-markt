import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="util"><span>Open 08:00–20:00</span><span>Marktplein 4</span></div>
      <header className="head">
        <Link className="logo" href="/">Groen<i>markt</i></Link>
        <nav><Link href="/week">This week</Link></nav>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Home</Link>
        <Link href="/aisles">Aisles</Link>
        <Link href="/week">This week</Link>
        <Link href="/produce">Produce</Link>
        <Link href="/bakery">Bakery</Link>
        <Link href="/dairy">Dairy</Link>
        <Link href="/pantry">Pantry</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/delivery">Delivery</Link>
        <Link href="/catering">Catering</Link>
        <Link href="/loyalty">Loyalty</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
