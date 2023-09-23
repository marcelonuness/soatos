import SideBar from "@/components/navbar/side-bar";
import CardList from "@/components/productCard/cardList";

export default function Produtos() {

    const cardsData = [
        {
            title: "Produto 1",
            description: "Ihm altamente eficiente para o desenvolvimento da sua indústria.",
        },
        {
            title: "Produto 2",
            description: "Ihm altamente eficiente para o desenvolvimento da sua indústria.",
        },
        {
            title: "Produto 3",
            description: "Ihm altamente eficiente para o desenvolvimento da sua indústria.",
        },
        {
            title: "Produto 4",
            description: "Ihm altamente eficiente para o desenvolvimento da sua indústria.",
        },
    ] 

    return(
        <div className="h-screen flex flex-col mt-[87px] ">
                <h1 className="py-5 pl-2 italic font-bold text-xl">Produtos Só-Atos</h1>
                <div className="flex flex-1 ">
                    <div>
                        <SideBar></SideBar>
                    </div>
                    <div className='w-full p-4 flex'>
                        <CardList cards={cardsData}></CardList>
                    </div>
                </div>
            </div>
    )
}