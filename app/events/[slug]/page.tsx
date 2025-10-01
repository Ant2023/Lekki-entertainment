
import events from "../data.json";

export default function EventDetail({ params }:{ params:{ slug:string }}){
  const e = (events as any[]).find(x => (x as any).slug === params.slug);
  if(!e) return <main className="container py-8">Event not found.</main>;
  return (
    <main className="container py-8">
      <a className="text-[#9de2df]" href="/events">← Back to events</a>
      <div className="grid md:grid-cols-2 gap-4 mt-3">
        <img className="rounded-xl border border-[#203333]" src={(e as any).image} alt={e.title} />
        <div>
          <span className="badge mb-2 inline-block">{(e as any).tag}</span>
          <h1 className="text-3xl font-extrabold">{e.title}</h1>
          <p className="meta mt-1">{(e as any).date} • {(e as any).venue}, {(e as any).city}</p>
          <p className="mt-3">{(e as any).desc}</p>
          <div className="flex gap-2 mt-4">
            <a className="btn" href={`lekkiapp://event/${(e as any).slug}`}>Get Tickets in App</a>
            <a className="btn-ghost" href="#">Add to Calendar</a>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="card p-3">
              <h3 className="font-semibold">Music</h3>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>Afrobeats • Amapiano • Afro-fusion</li>
                <li>Resident + guest DJs</li>
              </ul>
            </div>
            <div className="card p-3">
              <h3 className="font-semibold">Good to know</h3>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>21+ with valid ID</li>
                <li>Dress code: clean & bold</li>
                <li>No hats or athletic wear</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
