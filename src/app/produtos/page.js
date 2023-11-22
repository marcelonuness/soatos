"use client"
import Footer from "@/components/footer/footer";
import SideBar from "@/components/navbar/side-bar";
import CardList from "@/components/productCard/cardList";
import { useState } from "react";
import { cardsData } from "./cardsData";

export default function Produtos() {

    const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

    return(
        <div className="h-full flex flex-col mt-[87px]">
                <h1 className="py-5 pl-2 italic  font-bold text-xl">Produtos Só-Atos</h1>
                <div className="flex flex-1 h-full">
                    <div className="">
                        <SideBar handleFilter={handleFilter}></SideBar>
                    </div>
                    <div className='p-4 ml-[250px]'>
                        <CardList cards={cardsData} selectedCategory={selectedCategory}></CardList>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            
    )
}