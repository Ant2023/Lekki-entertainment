
import events from "./data.json";

export default function EventsPage(){
  const list = (events as any[]);
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-3">Upcoming Events</h1>
      <p className="text-muted mb-4">Tickets processed in our mobile app.</p>
      <div className="grid3">
        {list.map((e)=>(
          <a href={`/events/${e.slug}`} key={e.slug} className="card">
            <div className="relative aspect-video overflow-hidden">
              <img src={(e as any).image} alt={e.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 badge">{e.tag}</div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="meta">{e.date} • {e.venue}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
