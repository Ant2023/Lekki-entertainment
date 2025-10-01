
import "./globals.css";
import Link from "next/link";

export const metadata = { title: "Lekki Entertainment", description: "Afrobeats & Amapiano events — Lekki Entertainment" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 bg-black/60 backdrop-blur border-b border-[#0f1414]">
          <div className="container flex items-center justify-between py-3">
            <Link href="/" className="font-extrabold tracking-wide text-lg">LEKKI<span className="text-teal2">•</span>Entertainment</Link>
            <nav className="text-muted flex items-center gap-4">
              <Link href="/events">Events</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn text-black">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-[#101515] bg-[#0f1414]">
          <div className="container grid gap-6 md:grid-cols-3 py-10">
            <div>
              <div className="font-extrabold">LEKKI<span className="text-teal2">•</span>Entertainment</div>
              <p className="text-muted">Afrobeats & Amapiano nights. Dallas • Denver • Cape Town • Lusaka</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Links</h4>
              <ul className="space-y-1">
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Bookings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow</h4>
              <p className="text-muted">Instagram · TikTok · YouTube</p>
              <p className="text-muted">© 2025 Lekki Entertainment</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
