import SideBar from "@/components/navbar/side-bar";

export default function Produtos() {
    return(
        <div className="h-screen flex flex-col mt-[87px]">
                <div className="flex flex-1 border">
                    <div className='fixed'>
                        <SideBar></SideBar>
                    </div>
                    <div className='w-full flex flex-col items-center p-2 bg-scroll ml-64'>
                    </div>
                </div>
            </div>
    )
}