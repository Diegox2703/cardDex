export const cardAdapter = (card) => {
    return {
        id: card._id,
        image: card.images.small,
        setName: card.set.name
    }
}

export const cardByIdAdapter = (card) => {
    return {
        id: card._id,
        name: card.name,
        supertype: card.supertype,
        hp: card.hp,
        types: card.types,
        evolvesFrom: card.evolvesFrom,
        set: {
            id: card.set._id,
            name: card.set.name,
            symbol: card.set.symbol,
            logo: card.set.logo,
            series: card.set.series,
            total: card.set.total,
            releaseDate: card.set.releaseDate,
            printedTotal: card.set.printedTotal
        },
        number: card.number,
        artist: card.artist,
        rarity: card.rarity,
        image: card.images.large
    }
}