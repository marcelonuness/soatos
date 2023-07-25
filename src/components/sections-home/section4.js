import Button from "../button/button"

export default function AboutUs() {
    return(
        <div className="py-[150px] px-[40px] bg-[#cbb26a]">
            <div>
                <h1 className="text-center text-5xl mb-14">Temos orgulho de oferecer serviços de automação para empresas em todo o Brasil</h1>
                <div className="text-center">
                    <Button title="Sobre nós" colorText="text-black" colorBg="bg-white"></Button>
                </div>
            </div>
        </div>
    )
}