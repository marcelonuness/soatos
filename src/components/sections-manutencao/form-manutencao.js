import Contato from "./form";

export default function SectionForm() {
    return(
        <div className="static">
            {/* cor sólida + texto */}
            <div className="py-[100px] px-[40px] bg-[#f8f6ee]">
                <div className="w-1/2 h-[300px] flex items-center px-[20px]">
                    <h1 className="text-4xl font-semibold">A Só-Atos é especialista na manutenção e reforma de IHMs e CLPs ATOS.</h1>
                </div>
            </div>
            {/* foto parallax */}
            <div className="h-[400px] bg-cover bg-center bg-fixed" style={{backgroundImage: `url('robo.jpg')`}}>

            </div>
            <div className="bg-white w-2/6 h-5/6 border-blue-700 absolute inset-y-0 top-1/4 start-1/2">
                <Contato></Contato>
            </div>
        </div>
    )
}