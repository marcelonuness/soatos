import Button from "../button/button";
import { Noto_Serif_JP } from 'next/font/google'

const notoSerifJpLight = Noto_Serif_JP({
    subsets: ["latin"],
    weight: "200",  
  })

export default function Section3Sobrenos() {
    return (
        <div className="pb-[100px] px-[40px] w-full flex justify-center">
            <div className="w-[1000px] h-[500px] flex justify-center items-center bg-cover bg-fixed" style={{backgroundImage: `url('/4.jpg')`}}>
                <div className="bg-white h-4/6 w-4/6 text-center flex justify-center items-center">
                    <div className="w-4/6 h-4/6 flex flex-col">
                        <h1 className="text-4xl font-semibold">O futuro é a automação.</h1>
                        <p className={`${notoSerifJpLight.className} text-xl my-6`}>Especializados em dispositivos Atos de automação.</p>
                        <Button title="Entre em Contato" colorText="text-white" colorBg="bg-[#cbb26a]"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}