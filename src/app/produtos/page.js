"use client"
import Footer from "@/components/footer/footer";
import SideBar from "@/components/navbar/side-bar";
import CardList from "@/components/productCard/cardList";
import { useState } from "react";

const cardsData = [
    {
        title: "4004.01 - CONTROLADOR PROGRAMAVEL MPC4004 NVRAM 8 E/S (NPN) 24VCC",
        description: "",
        imageUrl: "/photo1.png",
        category: "Clps"       
    },
    {
        title: "Produto 2",
        description: "",
        imageUrl: "/IMG_4848.png",
        category: "Ihms"            
    },
    {
        title: "Produto 3",
        description: "",
        imageUrl: "/IMG_4849.png",
        category: "Fontes"       
    },
    {
        title: "Produto 4",
        description: "Ihm altamente eficiente para o desenvolvimento da sua indústria.",
        imageUrl: "/IMG_4850.png",
        category: "Ihms"            
    },
] 

export default function Produtos() {

    const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

    return(
        <div className="h-full flex flex-col mt-[87px] ">
                <h1 className="py-5 pl-2 italic font-bold text-xl">Produtos Só-Atos</h1>
                <div className="flex flex-1 h-full">
                    <div className="h-full">
                        <SideBar handleFilter={handleFilter}></SideBar>
                    </div>
                    <div className='w-full p-4 flex'>
                        <CardList cards={cardsData} selectedCategory={selectedCategory}></CardList>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            
    )
}