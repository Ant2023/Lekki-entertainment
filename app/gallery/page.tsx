
'use client';
import { useState } from "react";

export default function Gallery(){
  const imgs = [
    "https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544067121-25a1063ac443?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515165562835-c3b8c5dbf5c1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525362081669-2b476bb628c1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525286116112-b59af11adad1?q=80&w=1600&auto=format&fit=crop"
  ];
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const openAt=(i:number)=>{ setIdx(i); setOpen(true); }
  const next=()=> setIdx((i)=> (i+1)%imgs.length);
  const prev=()=> setIdx((i)=> (i-1+imgs.length)%imgs.length);

  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-3">Photo Gallery</h1>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
        {imgs.map((src, i)=>(
          <img key={i} src={src as any} className="mb-3 rounded-xl border border-[#203333] break-inside-avoid cursor-zoom-in"
               onClick={()=>openAt(i)} />
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button className="absolute top-5 right-5 btn-ghost" onClick={()=>setOpen(false)}>Close ✕</button>
          <button className="absolute left-5 btn-ghost" onClick={prev}>←</button>
          <img src={imgs[idx] as any} className="max-h-[80vh] max-w-[90vw] rounded-xl border border-[#203333]" />
          <button className="absolute right-5 btn-ghost" onClick={next}>→</button>
        </div>
      )}
    </main>
  )
}
