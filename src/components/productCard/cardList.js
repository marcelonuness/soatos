import ProductCard from "./productCard";

export default function CardList( {cards} ) {
    return (
      <div className="w-full flex flex-wrap justify-between ">
        {cards.map((card, index) => (
            <ProductCard
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
            />
      ))}
    </div>
    )
}