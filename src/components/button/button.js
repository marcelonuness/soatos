export default function Button(props) {
    return(
        <div>
            <a href="https://wa.me/5511999120408?text=Ol%C3%A1,%20vim%20do%20site%20Soatos%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20de%20voc%C3%AAs.
" target="_blank">
            <button className={`transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 w-[200px] h-[50px] ${props.colorText} ${props.colorBg}`}>{props.title}</button>
            </a>                          
        </div>
    )
}

