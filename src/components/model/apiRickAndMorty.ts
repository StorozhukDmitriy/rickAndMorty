import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export type InfoType = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null
}
export type ResultType = {
    id: number;
    name: string;
    status: string;
    species: string
    type: string
    gender: string
    origin: {
        name: string,
        url: string
    } | undefined
    location: {
        name: string,
        url: string
    }
    image: string
    episode: Array<string>
    url: string
    created: string
}

export type ResponceType = {
    info: InfoType,
    results: ResultType[]
}

export const apiRickAndMorty = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api'
    }),
    endpoints: (builder) => ({
        getCards: builder.query<ResponceType, void>({
            query: () => '/character'
        }),
        getCard: builder.query<ResultType, number>({
            query: (id:number) => `/character/${id}`
        }),
        switchingPage: builder.query<ResponceType, void>({
            query: () => '/character'
        }),

    })
})


export const {useGetCardsQuery, useLazyGetCardQuery} = apiRickAndMorty