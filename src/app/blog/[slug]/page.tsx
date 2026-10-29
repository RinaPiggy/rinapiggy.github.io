import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getTomlContent, getMarkdownContent } from '@/lib/content';

interface Post { slug:string; title:string; description:string; category?:string; video_url?:string; source:string; }
function youtubeEmbedUrl(value?:string):string|null {
 if(!value)return null;
 try {
  const url=new URL(value);const host=url.hostname.toLowerCase();
  let id:string|null=null;
  if(host==='youtu.be')id=url.pathname.slice(1).split('/')[0];
  else if(['youtube.com','www.youtube.com','m.youtube.com'].includes(host))id=url.searchParams.get('v') || (url.pathname.startsWith('/embed/') ? url.pathname.split('/')[2] : null);
  return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}?playsinline=1` : null;
 } catch {return null;}
}
function posts():Post[] { return getTomlContent<{posts:Post[]}>('blog/posts.toml')?.posts || []; }
export const dynamicParams = false;
export function generateStaticParams(){ return posts().map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const post=posts().find(p=>p.slug===slug);
 return post ? {title:post.title, description:post.description, openGraph:{type:'article',title:post.title,description:post.description}} : {};
}
export default async function BlogArticle({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const post=posts().find(p=>p.slug===slug); if(!post)notFound();
 const content=getMarkdownContent(post.source);
 const embedUrl=youtubeEmbedUrl(post.video_url);
 const minutes=Math.max(1,Math.ceil(content.split(/\s+/).length/200));
 return <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
  <Link href="/blog/" className="text-sm font-medium text-accent hover:underline">← All posts</Link>
  <header className="mt-7 mb-9">
   <p className="text-sm text-accent font-medium mb-3">{post.category || 'Notes'} · {minutes} min read{post.video_url ? ' · Video companion' : ''}</p>
   <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">{post.title}</h1>
   <p className="mt-4 text-neutral-500 text-sm">By Rina Cheng</p>
  </header>
  <div className="text-neutral-700 leading-relaxed blog-article">
   <ReactMarkdown components={{
    h2:({children})=><h2 className="font-serif text-2xl font-bold text-primary mt-10 mb-4">{children}</h2>,
    h3:({children})=><h3 className="text-xl font-semibold text-primary mt-7 mb-3">{children}</h3>,
    p:({children,node})=>{
     const isVideoParagraph=Boolean(embedUrl && node?.children.some(child=>child.type==='element' && child.tagName==='a' && child.properties?.href===post.video_url));
     return isVideoParagraph ? <div className="my-7">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black">
       <iframe src={embedUrl!} title={`Video presentation for ${post.title}`} className="w-full aspect-video min-h-[200px]" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <p className="mt-3 text-sm"><a href={post.video_url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Watch the full presentation on YouTube ↗</a></p>
     </div> : <p className="mb-5">{children}</p>;
    },
    ul:({children})=><ul className="list-disc pl-6 space-y-4 mb-6">{children}</ul>,
    li:({children})=><li className="pl-1">{children}</li>,
    a:({href,children})=><a href={href} target={href?.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent break-words">{children}</a>,
    strong:({children})=><strong className="font-semibold text-primary">{children}</strong>,
   }}>{content}</ReactMarkdown>
  </div>
  <footer className="border-t border-neutral-200 mt-10 pt-6"><Link href="/blog/" className="text-accent font-medium">← Back to the blog</Link></footer>
 </article>;
}
