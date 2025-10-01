
'use client';
import Link from "next/link";
import events from "./events/data.json";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const list = (events as any[]);
  const first = list[0];

  const tags = ["Afrobeats", "Amapiano", "Afro-fusion"];
  const [tagIndex, setTagIndex] = useState(0);
  useEffect(()=>{ const t = setInterval(()=> setTagIndex(i => (i+1)%tags.length), 1800); return ()=> clearInterval(t); },[]);

  function parseDate(s:string){
    const m = s.match(/([A-Za-z]{3}),\s([A-Za-z]{3})\s(\d{1,2})/);
    const nowYear = new Date().getFullYear();
    if(!m) return new Date(nowYear, 9, 19);
    const monthMap:any = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const month = monthMap[m[2]] ?? 9;
    const day = parseInt(m[3],10);
    return new Date(nowYear, month, day, 21, 0, 0);
  }
  const target = useMemo(()=> parseDate(first.date), [first.date]);
  const [now, setNow] = useState(new Date());
  useEffect(()=>{ const t = setInterval(()=> setNow(new Date()), 1000); return ()=> clearInterval(t); },[]);
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diffMs / (1000*60*60*24));
  const h = Math.floor((diffMs / (1000*60*60)) % 24);
  const m = Math.floor((diffMs / (1000*60)) % 60);
  const s = Math.floor((diffMs / 1000) % 60);

  return (
    <main>
      <section className="container grid md:grid-cols-2 gap-6 items-center py-10">
        <div>
          <span className="badge">{tags[tagIndex]} • {tags[(tagIndex+1)%tags.length]} • {tags[(tagIndex+2)%tags.length]}</span>
          <h1 className="text-5xl font-extrabold leading-tight mt-3">Where the diaspora dances</h1>
          <p className="text-muted mt-2 max-w-prose">Curated nights, global sounds. From Lagos to Joburg to Dallas — we bring the heat.</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <Link className="btn hover:animate-pulse" href="/events">See Upcoming Events</Link>
            <a className="btn-ghost hover:border-teal2" href="lekkiapp://home">Open in our app</a>
          </div>

          <div className="mt-6 card p-4 inline-flex items-center gap-3">
            <div className="text-sm text-muted">Next up:</div>
            <div className="font-semibold">{first.title}</div>
            <div className="ml-4 px-3 py-1 rounded-md border border-[#203333] bg-[#0c1212]">
              <span className="tabular-nums">{d}d {h}h {m}m {s}s</span>
            </div>
          </div>
        </div>
        <div className="h-[420px] rounded-2xl border border-[#203333] overflow-hidden bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center" />
      </section>

      <section className="container py-2">
        <div className="overflow-hidden border border-[#203333] rounded-xl bg-card">
          <div className="whitespace-nowrap animate-marquee py-3 text-sm">
            <span className="mx-6">Dallas</span>
            <span className="mx-6">Denver</span>
            <span className="mx-6">Cape Town</span>
            <span className="mx-6">Lusaka</span>
            <span className="mx-6">Dallas</span>
            <span className="mx-6">Denver</span>
            <span className="mx-6">Cape Town</span>
            <span className="mx-6">Lusaka</span>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="text-2xl font-bold mb-3">Featured Event</h2>
        <div className="grid md:grid-cols-2 gap-0 card">
          <div className="relative">
            <img src={(first as any).image} alt={first.title} />
            <div className="absolute top-2 left-2 badge">{first.tag}</div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{first.title}</h3>
            <p className="meta">{first.date} • {first.venue}</p>
            <p className="mt-2">{first.desc}</p>
            <div className="flex gap-2 mt-3">
              <a className="btn" href={`lekkiapp://event/${first.slug}`}>Get Tickets in App</a>
              <a className="btn-ghost" href={`/events/${first.slug}`}>Event Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-6">
        <h2 className="text-2xl font-bold mb-3">Upcoming</h2>
        <div className="grid3">
          {list.map((e) => (
            <a key={e.slug} href={`/events/${e.slug}`} className="group [perspective:1000px]">
              <div className="relative aspect-video">
                <div className="card absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 backface-hidden overflow-hidden rounded-xl">
                    <img src={(e as any).image} alt={e.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 badge">{e.tag}</div>
                  </div>
                  <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] p-4 flex flex-col justify-center items-start gap-1">
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="meta">{e.date} • {e.venue}</p>
                    <span className="badge">{e.city}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
