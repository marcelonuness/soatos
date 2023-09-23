import ProductCard from "./productCard";

export default function CardList( { cards, selectedCategory } ) {

  const filteredCard =
  selectedCategory === "Todos"
    ? cards
    : cards.filter((card) => card.category === selectedCategory);

    return (
      <div className="w-full flex flex-wrap">
        {filteredCard.map((card, index) => (
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