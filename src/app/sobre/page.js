import Footer from "@/components/footer/footer";
import Section3Sobrenos from "@/components/sections-sobrenos/sectionParallax";
import SectionText from "@/components/sections-sobrenos/sectionText";
import SectionSobreNos1 from "@/components/sections-sobrenos/sobrenos1";

export default function SobreNos() {
    return(
        <div className="mt-[75px]">
            <SectionSobreNos1></SectionSobreNos1>
            <SectionText></SectionText>
            <Section3Sobrenos></Section3Sobrenos>
            <Footer></Footer>
        </div>
    )
}