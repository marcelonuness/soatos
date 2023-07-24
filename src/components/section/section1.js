import { BsTruck, BsWallet } from "react-icons/bs"
import { MdHttps } from "react-icons/md"

export default function SectionWords() {
    return (
        <div className="flex mx-auto py-[80px] px-[40px]">
            <div className="w-full flex justify-center cursor-default">
                <div className="flex card mx-5 items-center">
                    <BsTruck className="flex-1" size={30}></BsTruck>
                    <div className="flex-1">
                        <p className="text-xs">Entregamos para todo o Brasil!</p>
                    </div>
                </div>
                <div className="card mx-5 flex items-center">
                    <MdHttps className="flex-1" size={30}></MdHttps>
                    <div className="flex-1">
                        <p className="text-xs">Seus dados estão protegidos!</p>
                    </div>
                </div>
                <div className="card mx-5 flex items-center">
                    <BsWallet className="flex-1" size={30}></BsWallet>
                    <div className="flex-1">
                        <p className="text-xs">Compras parceladas e sem juros!</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}