import Banner from "@/components/carousel/banners"
import Section2 from "@/components/sections-home/section2"
import Section3 from "@/components/sections-home/section3"

export default function Home() {
  return (
    <div className="mt-[75px]">
      <Banner></Banner>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  )
}
