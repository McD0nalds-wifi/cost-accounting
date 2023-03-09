import { startOfDay } from 'date-fns'

import { ITransaction } from '../../../features/transactions'

export const getChartItems = (transactions: Array<ITransaction> | undefined, id: string, color: string) => {
    if (!transactions) {
        return null
    }

    const amountsByDate: Record<number, number> = {}

    transactions.forEach(({ amount, date }) => {
        const key = startOfDay(date).getTime()

        if (amountsByDate[key]) {
            amountsByDate[key] += amount
            return
        }

        amountsByDate[key] = amount
    })

    return {
        id,
        color,
        data: Object.entries(amountsByDate).map(([date, amount]) => ({
            x: new Date(Number(date)).toISOString().split('T')[0],
            y: amount,
        })),
    }
}
