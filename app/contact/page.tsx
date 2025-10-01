
'use client';
export default function Contact(){
  function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    alert(`Thanks ${fd.get("name")}! We'll be in touch at ${fd.get("email")}.`);
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <main className="container py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-3">Contact / Bookings</h1>
      <p>For venue bookings, partnerships, or hosting, use the form below.</p>
      <form onSubmit={submit} className="grid gap-3 mt-3">
        <label className="grid gap-1"><span>Name</span><input required name="name" className="rounded-xl border border-[#203333] bg-[#0c1212] p-3" /></label>
        <label className="grid gap-1"><span>Email</span><input required type="email" name="email" className="rounded-xl border border-[#203333] bg-[#0c1212] p-3" /></label>
        <label className="grid gap-1"><span>Message</span><textarea required name="message" rows={5} className="rounded-xl border border-[#203333] bg-[#0c1212] p-3" /></label>
        <button className="btn">Send</button>
        <p className="text-muted text-sm">We’ll reply within 24–48 hours.</p>
      </form>
    </main>
  )
}
