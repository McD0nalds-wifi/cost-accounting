import { ITransactionsData, ITransactionsResponse } from '../api'

export const convertTransactionsResponse = (response: ITransactionsResponse): ITransactionsData => {
    return response.reduce(
        (transactionsData, transaction) => {
            if (transaction.type === 'income') {
                transactionsData.income.push(transaction)
            } else {
                transactionsData.expenses.push(transaction)
            }

            return transactionsData
        },
        { income: [], expenses: [] } as ITransactionsData,
    )
}
