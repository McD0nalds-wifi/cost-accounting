export const getAmountInRubles = (amount: number, minimumFractionDigits = 2): string => {
    return `${Number(amount).toLocaleString('ru-RU', {
        minimumFractionDigits,
    })} ₽`
}
