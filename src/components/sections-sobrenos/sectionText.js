import { Noto_Serif_JP } from 'next/font/google'

const notoSerifJpLight = Noto_Serif_JP({
    subsets: ["latin"],
    weight: "200",  
  })

export default function SectionText() {
    return(
        <div className="w-full flex justify-center py-[120px] px-[40px]">
            <div className="text-center w-4/6 ">
                <h1 className="text-4xl font-semibold ">
                    Somos uma equipe de engenheiros na cidade de São Paulo. 
                </h1>
                <p className={`${notoSerifJpLight.className} text-xl mt-6 `}>
                    Localizados no Cidade Jardim Pirituba, com especialização nos produtos Atos.
                </p>
            </div>
        </div>
    )
}