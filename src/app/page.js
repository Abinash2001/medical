import React from "react"
import HeroBanner from "./components/HeroBanner";
import Wrapper from "./components/Wrapper";
import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* product grid start */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 my-14 px-5 md:px-0">
          <Link href="/"><img src="/1.png" className="border rounded-xl border-blue-600"/></Link>
          <Link href="/"><img src="/2.png" className="border rounded-xl border-blue-600"/></Link>
          <Link href="/"><img src="/3.png" className="border rounded-xl border-blue-600"/></Link>
          <Link href="/"><img src="/4.png" className="border rounded-xl border-blue-600"/></Link>
          <Link href="/"><img src="/5.png" className="border rounded-xl border-blue-600"/></Link>
          <Link href="/"><img src="/6.png" className="border rounded-xl border-blue-600"/></Link>
        </div>
        {/* product grid end */}
        <Card/>
      </Wrapper>
    </main>
  )
}
