'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin, GraduationCap, ArrowDownToLine } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
interface Props { author: SiteConfig['author']; social: SiteConfig['social']; features: SiteConfig['features']; researchInterests?: string[]; }
export default function Profile({author,social,researchInterests}:Props){
 const links=[{name:'Email',href:`mailto:${social.email}`,Icon:Mail},{name:'Google Scholar',href:social.google_scholar,Icon:GraduationCap},{name:'GitHub',href:social.github,Icon:Github},{name:'LinkedIn',href:social.linkedin,Icon:Linkedin}];
 return <aside className="lg:sticky lg:top-28 text-center">
  <Image src={author.avatar} alt="Rina Cheng" width={280} height={280} priority className="w-40 h-40 lg:w-64 lg:h-64 mx-auto rounded-2xl object-cover shadow-sm"/>
  <h1 className="mt-6 text-3xl font-serif font-bold text-primary">{author.name}</h1>
  <p className="text-sm text-neutral-500 mt-1">Jingyi Cheng in publications</p>
  <p className="text-accent font-medium mt-3 leading-relaxed">{author.title}</p>
  {author.focus && <p className="text-sm font-medium text-primary mt-1">{author.focus}</p>}
  {author.department && <p className="text-neutral-600 text-sm mt-3">{author.department}</p>}
  <p className="text-neutral-600 text-sm mt-1">{author.institution}</p>
  <p className="text-neutral-500 text-sm mt-1">The Netherlands</p>
  <div className="flex justify-center gap-3 mt-5">{links.filter(l=>l.href).map(({name,href,Icon})=><a key={name} href={href as string} aria-label={name} title={name} className="p-2 text-neutral-600 hover:text-accent rounded-md" target={name==='Email'?undefined:'_blank'} rel="noopener noreferrer"><Icon size={21}/></a>)}</div>
  <Link href="/cv/" className="inline-flex items-center gap-2 mt-4 px-5 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-primary hover:border-accent hover:text-accent"><ArrowDownToLine size={16}/> View CV</Link>
  <div className="hidden lg:block mt-7 pt-5 border-t border-neutral-200 text-left max-w-64 mx-auto"><h2 className="text-sm font-semibold text-primary mb-3">Research interests</h2><ul className="space-y-2 text-sm text-neutral-600">{researchInterests?.map(i=><li key={i}>{i}</li>)}</ul></div>
 </aside>;
}
