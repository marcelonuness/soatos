"use client"
import { useState } from "react";

export default function SideBar( {handleFilter} ) {

    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        handleFilter(category);
      };

    return (
        <aside className="px-3 py-5 w-64 shadow-2xl fixed">
            <h2 className="mb-3 font-bold">Categorias</h2>
            <ul>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Todos" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Todos")}>Todos</li>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Clps" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Clps")}>Clp&apos;s</li>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Fontes" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Fontes")}>Fontes</li>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Ihms" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Ihms")}>IHM&apos;s</li>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Brios" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Brios")}>Brio&apos;s</li>
                <li className={`p-1 my-1 hover:bg-slate-200 ${selectedCategory === "Cabos" ? "bg-slate-200" : ""}`} onClick={() => handleCategoryClick("Cabos")}>Cabos</li>
            </ul>
        </aside>
    )
}