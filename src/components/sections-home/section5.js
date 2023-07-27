import Image from "next/image"

export default function SectionClientes() {
    return(
        <div className="py-[100px] px-[40px]">
            <h1 className="text-center text-5xl">Empresas que foram tranformadas pela Só-Atos.</h1>
            <div className="flex items-center w-full justify-evenly my-16">
            <div className="">
                <Image width={200}
                height={200} alt="adidas logo" className="" src="/pngwing.com (1).png"></Image>
            </div>
            <div className="">
                <Image width={200}
                height={200} alt="nike logo" className="" src="/nike-logo2.png"></Image>
            </div>
            <div className="">
                <Image width={200}
                height={200} alt="puma logo" className="" src="/pngwing.com (2).png"></Image>
            </div>    
            </div>
        </div>
    )
}