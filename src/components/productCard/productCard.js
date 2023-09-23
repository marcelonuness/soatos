import Image from "next/image";
import ProductButton from "../button/productButton";

export default function ProductCard({ title, description, imageUrl }) {
    return(
        <div className="w-[340px] rounded overflow-hidden shadow-lg p-4 h-[360px] flex flex-col mx-1">
            <Image className="object-cover w-full h-40 rounded" src={imageUrl} alt={title} height={160} width={300}/>
            <div className="px-4 py-2 my-3">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="px-4 py-2">
                <ProductButton title="Solicite um Orçamento" colorText="text-white" colorBg="bg-[#cbb26a]" />
            </div>            
        </div>
    )
}