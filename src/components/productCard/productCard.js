import Image from "next/image";
import ProductButton from "../button/productButton";

export default function ProductCard({ title, description, imageUrl }) {
    return(
        <div className="w-[340px] h-[400px] relative group text-ellipsis rounded overflow-hidden shadow-lg p-4 flex flex-col mx-1">
                <div       
                    className="w-full h-full bg-center bg-cover duration-500" 
                    style={{backgroundImage: `url(${imageUrl})`}}>
                </div>
            <div className="px-4 py-2 my-5">
                <h2 className="font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="px-4 py-2">
                <ProductButton title="Solicite um Orçamento" colorText="text-white" colorBg="bg-[#cbb26a]" />
            </div>            
        </div>
    )
}