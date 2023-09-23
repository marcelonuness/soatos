import Image from "next/image";
import ProductButton from "../button/productButton";

export default function ProductCard({ title, description, imageUrl }) {
    return(
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 h-[300px]">
            <Image className="w-full h-32 object-cover" href={imageUrl} alt={title} />
            <div className="px-4 py-2">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="px-4 py-2">
                <ProductButton title="Solicite um Orçamento" colorText="text-white" colorBg="bg-[#cbb26a]" />
            </div>            
        </div>
    )
}