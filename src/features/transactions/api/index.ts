import { z } from 'zod'

import { appApi } from '../../../app/store/appApi'
import { convertTransactionsResponse } from '../converter'

const transactionSchema = z.object({
    id: z.string(),
    name: z.string(),
    business: z.string(),
    category: z.string(),
    type: z.enum(['income', 'expenses']),
    amount: z.number(),
    date: z.number(),
})

const transactionsSchema = z.array(transactionSchema)

export type ITransaction = z.infer<typeof transactionSchema>
export type ITransactionsResponse = z.infer<typeof transactionsSchema>

export interface ITransactionsData {
    income: Array<ITransaction>
    expenses: Array<ITransaction>
}

export const transactionsApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<ITransactionsData, void>({
            query: () => ({
                url: 'transactions',
                method: 'GET',
            }),
            extraOptions: {
                responseSchema: transactionsSchema,
            },
            transformResponse: convertTransactionsResponse,
        }),
    }),
})

export const { useGetTransactionsQuery } = transactionsApi
