import { z } from 'zod'

import { appApi } from '../../../app/store/appApi'
import { convertTransactionsResponse } from '../converter'

const transactionTypeEnum = z.enum(['income', 'expenses'])
const transactionCategoryEnum = z.enum([
    'clothing_and_accessories',
    'restaurants_and_cafes',
    'sporting_goods',
    'supermarkets',
    'health_and_beauty',
    'everything_for_home',
    'hcs',
    'internet',
    'car',
    'subscriptions',
    'transfers',
    'cash_withdrawal',
    'entertainment_and_hobbies',
    'logistics',
    'transport',
    'education',
    'journeys',
    'taxes',
    'salary',
    'other_expenses',
])

const transactionSchema = z.object({
    id: z.string(),
    name: z.string(),
    business: z.string(),
    category: transactionCategoryEnum,
    type: transactionTypeEnum,
    amount: z.number(),
    date: z.number(),
})

const transactionsSchema = z.array(transactionSchema)

export type TransactionCategoryType = z.infer<typeof transactionCategoryEnum>
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
