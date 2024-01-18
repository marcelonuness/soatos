import Button from "../button/button"
import TextCard from "../textCard/textCardHome"


export default function Section2() {
    return(
        <div className="mt-14 p-10 flex flex-col">
            <div className="text-center">
                <h1 className="text-5xl">Nossos Serviços de Automação</h1>                
            </div>
            <div className="flex mt-[80px]">
            <TextCard title="Automação Industrial" subscription="A automação comercial pode ajudar a melhorar o moral dos funcionários, aumentar a produtividade, a velocidade e a precisão. Ajudamos muitas empresas a reduzir tarefas manuais e melhorar a conformidade dos processos de negócios."></TextCard>
                <TextCard title="A Eficiência Reconhecida dos CLPs Atos" subscription="Os Controladores Lógicos Programáveis (CLPs) da Atos são reconhecidos por sua qualidade e eficácia na automação industrial. Destacam-se pela precisão no controle de processos, durabilidade em ambientes desafiadores e interface intuitiva de programação."></TextCard>
                <TextCard title="Quem somos nós?" subscription="Nossa empresa prioriza a satisfação do cliente, oferecendo serviços personalizados, suporte técnico especializado e produtos inovadores da Atos. Mantemos uma comunicação transparente, promovemos a integridade nos negócios e buscamos construir parcerias duradouras baseadas na lealdade e respeito mútuo."></TextCard>
            </div>
            <div className="mt-20 self-center">
                <Button title="Nossas Ofertas" colorText="text-white" colorBg="bg-[#cbb26a]"></Button>
            </div>
        </div>
    )
}