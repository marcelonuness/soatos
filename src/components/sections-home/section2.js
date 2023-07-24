import Button from "../button/button"
import TextCard from "../textCard/textCardHome"


export default function Section2() {
    return(
        <div className="mt-14 p-10 flex flex-col">
            <div className="text-center">
                <h1 className="text-5xl">Nossos Serviços de Automação</h1>                
            </div>
            <div className="flex mt-[80px]">
            <TextCard title="Automação Empresarial" subscription="A automação comercial pode ajudar a melhorar o moral dos funcionários, aumentar a produtividade, a velocidade e a precisão. Ajudamos muitas empresas a reduzir tarefas manuais e melhorar a conformidade dos processos de negócios."></TextCard>
                <TextCard title="Desenvolvimento de Componentes" subscription="A Só-Atos cria bots inteligentes que irão imitar o comportamento humano no ambiente digital. Esteja você procurando um bot que possa se comunicar com os clientes ou inserir informações, podemos ajudar."></TextCard>
                <TextCard title="Manutenção Moderna" subscription="A Só-Atos cria aplicativos personalizáveis ​​para permitir que funcionários e clientes executem tarefas digitais e processem informações."></TextCard>
            </div>
            <div className="mt-20 self-center">
                <Button title="Nossas Ofertas" colorText="text-white" colorBg="bg-[#cbb26a]"></Button>
            </div>
        </div>
    )
}