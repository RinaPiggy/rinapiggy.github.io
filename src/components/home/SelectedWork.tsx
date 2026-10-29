import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { CardItem } from '@/types/page';
export default function SelectedWork({items}:{items:CardItem[]}){
 return <section><div className="flex justify-between items-center mb-5"><h2 className="text-2xl font-serif font-bold text-primary">Selected work</h2><Link href="/projects/" className="text-sm text-accent">All projects →</Link></div>
 <div>{items.map((item)=><Link key={item.title} href={item.link || '/projects/'} className="group flex flex-col sm:flex-row gap-5 py-5 border-b border-neutral-200 first:pt-0">
 {item.image&&<div className="sm:w-36 w-full h-32 sm:h-28 shrink-0 rounded-lg overflow-hidden bg-white border border-neutral-200"><Image src={item.image} alt={item.title==='T-STAR'?'T-STAR demand decomposition diagram':item.title==='STAMP'?'Average hourly demand and fleet patterns':'Availability prediction in the RET app'} width={250} height={170} className="w-full h-full object-contain p-2"/></div>}
 <div className="min-w-0 flex-1"><p className="text-xs font-medium text-accent mb-1">{item.subtitle} · {item.date}</p><h3 className="font-semibold text-primary group-hover:text-accent leading-snug flex gap-2 items-start">{item.title}<ArrowUpRight size={17} className="shrink-0 mt-1"/></h3><p className="text-sm text-neutral-600 leading-relaxed mt-2">{item.content?.split(' [Read')[0]}</p></div>
 </Link>)}</div></section>;
}
