export const cardAdapter = (card) => {
    return {
        id: card.id,
        image: card.images.small,
        setName: card.set.name
    }
}

export const cardByIdAdapter = (card) => {
    return {
        id: card.id,
        name: card.name,
        supertype: card.supertype,
        hp: card.hp,
        types: card.types,
        evolvesFrom: card.evolvesFrom,
        set: {
            id: card.set.id,
            name: card.set.name,
            symbol: card.set.images.symbol,
            logo: card.set.images.logo,
            series: card.set.series,
            total: card.set.total,
            releaseDate: card.set.releaseDate,
            printedTotal: card.set.printedTotal
        },
        number: card.number,
        artist: card.artist,
        rarity: card.rarity,
        image: card.images.large,
        tcgplayer: {
            updatedAt: card?.tcgplayer?.updatedAt,
            finishes: Object.keys(card?.tcgplayer?.prices || []),
            prices: card?.tcgplayer?.prices
        },
        cardmarket: {
            updatedAt: card?.cardmarket?.updatedAt,
            prices: {
                averageSellPrice: card?.cardmarket?.prices?.averageSellPrice,
                lowPrice: card?.cardmarket?.prices?.lowPrice,
                trendPrice: card?.cardmarket?.prices?.trendPrice,
                reverseHoloTrend: card?.cardmarket?.prices?.reverseHoloTrend,
                suggestedPrice: card?.cardmarket?.prices?.suggestedPrice
            }
        }
    }
}