import { z } from 'zod'

import { appApi } from '../../../app/store/appApi'

const userSchema = z.object({
    balance: z.number(),
    spending: z.number(),
    saved: z.number(),
})

type IUserResponse = z.infer<typeof userSchema>

export const userApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getUserData: build.query<IUserResponse, void>({
            query: () => ({
                url: 'user',
                method: 'GET',
            }),
            extraOptions: {
                responseSchema: userSchema,
            },
        }),
    }),
})

export const { useGetUserDataQuery } = userApi
