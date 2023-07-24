export default function Button(props) {
    return(
        <div>
            <button className={`transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 w-[200px] h-[50px] ${props.colorText} ${props.colorBg}`}>{props.title}</button>              
        </div>
    )
}

