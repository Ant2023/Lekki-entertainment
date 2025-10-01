
import Link from "next/link";
export default function About(){
  return (
    <main className="container py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-3">About Lekki Entertainment</h1>
      <p>We curate Afrobeats & Amapiano experiences that feel like home — wherever you are. Our team spans Dallas, Denver, Cape Town, and Lusaka, building a global community around music, culture, and connection.</p>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        <div className="card p-3"><h3 className="font-semibold">What we do</h3><p>Night parties, brunches, tour stops, and pop-ups featuring diaspora DJs and artists.</p></div>
        <div className="card p-3"><h3 className="font-semibold">Partners</h3><p>We team up with venues & brands to bring premium events to new cities.</p></div>
        <div className="card p-3"><h3 className="font-semibold">Bookings</h3><p>For artists, hosts, and sponsors: <Link href="/contact" className="underline">get in touch</Link>.</p></div>
      </div>
    </main>
  )
}
