import Footer from "../footer/footer";

export default function InformacoesContato() {
    
   
    
    
    return(
        <div>
            <div className="px-[40px] py-[100px] flex h-[600px]">
                <div className="w-1/2">                
                        <ul className="">
                                <li className="my-10">
                                    <h1 className="text-4xl font-semibold">Nossas Informações para Contato</h1>
                                </li>
                                <li className="mb-2">
                                    {"(11) 99912-0408"}
                                </li>
                                <li className="mb-2">
                                    {"Rua Tungue, 164 - apto 12 Jardim Cidade Pirituba"}
                                </li>
                                <li className="mb-2">
                                    {"marcos@soatos.com"}
                                </li>
                                <li className="mb-2">
                                    {"www.soatos.com.br"}
                                </li>
                            </ul>                    
                </div>

                <div className="w-1/2">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8820070742204!2d-46.72832457839805!3d-23.48271909162988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef96a8bf9e613%3A0x7eb4ff0d77e37ddc!2sRua%20Tungue%2C%20164%20-%2012%20-%20Jardim%20Cidade%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002945-110!5e0!3m2!1spt-BR!2sbr!4v1690578150802!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>                
            </div>
            <Footer></Footer>
        </div>
        
    )
}