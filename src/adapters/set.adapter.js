export const setAdapter = (set) => {
    return {
        id: set._id,
        name: set.name,
        series: set.series,
        printedTotal: set.printedTotal,
        total: set.total,
        releaseDate: set.releaseDate,
        symbol: set.symbol,
        logo: set.logo
    }
}