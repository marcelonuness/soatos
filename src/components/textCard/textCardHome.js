export default function TextCard(props) {
    return(
        <div className="pr-[17px] w-[400px] m-8">
            <h1 className="text-left font-semibold text-xl mb-5">{props.title}</h1>
            <p className="text-lg">
                {props.subscription}
            </p>
        </div>
    )
}