export const normalizePrice = (price: any) => {
    price = parseInt(price, 10) / 100
    price = price.toString().replace(".", ",")
    const decimals = price.split(',');   
    if (decimals.length === 1) {
        return `${price},00`
    } else {
        return decimals[1].length === 1 ? `${price}0` : `${price}`
    }
};
