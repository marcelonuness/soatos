import Banner from "@/components/carousel/banners"
import Footer from "@/components/footer/footer"
import Section2 from "@/components/sections-home/section2"
import Section3 from "@/components/sections-home/section3"
import AboutUs from "@/components/sections-home/section4"
import SectionClientes from "@/components/sections-home/section5"

export default function Home() {
  return (
    <div className="mt-[75px]">
      <Banner></Banner>
      <Section2></Section2>
      <AboutUs></AboutUs>
      <SectionClientes></SectionClientes>
      <Section3></Section3>
      <Footer></Footer>
    </div>
  )
}
