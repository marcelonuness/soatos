export default function ProductButton(props) {
    return(
        <div>
            <button className={`transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-101 duration-200 w-[170px] h-[45px] text-sm ${props.colorText} ${props.colorBg}`}>{props.title}</button>              
        </div>
    )
}

