import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative bg-slate-700" style={{ fontFamily: 'Open Sans' }}>
      <nav className="left-0 top-0 fixed w-full h-14 bg-slate-500 flex flex-row text-slate-200 py-3 px-4 items-center shadow-xl">
        <div className="logo uppercase font-bold px-3 py-2 rounded-lg hover:bg-slate-600 transition-all">
          <a href="/">
            Roadmap
          </a>
        </div>
        <ul className="links flex flex-row gap-3 flex-grow justify-end">
          <li className="hover:bg-slate-600 rounded-md py-1 px-3 transition"><a href="/about">About</a></li>
          <li className="hover:bg-slate-600 rounded-md py-1 px-3 transition"><a href="/blog">Blog</a></li>
          <li className="hover:bg-slate-600 rounded-md py-1 px-3 transition"><a href="/resume">Resume</a></li>
        </ul>
      </nav>
      <section id="hero" className="min-h-screen w-full bg-amber-700 flex items-center justify-center">
        <h1 className="text-5xl text-white">Get your website up in just a minute</h1>
      </section>
      <section id="service-intro" className=" min-h-screen w-full bg-stone-500"></section>
      <section id="story-origin" className="min-h-screen w-full bg-slate-700"></section>
      <section id="social" className="min-h-screen w-full bg-slate-700"></section>
      <section id="contact" className="min-h-screen w-full bg-slate-700"></section>
    </main>
  );
}
