export const setAdapter = (set) => {
    return {
        id: set.id,
        name: set.name,
        series: set.series,
        printedTotal: set.printedTotal,
        total: set.total,
        releaseDate: set.releaseDate,
        symbol: set.images.symbol,
        logo: set.images.logo
    }
}