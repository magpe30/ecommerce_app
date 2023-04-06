import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/api/v1/latest-products',
        })
    })
});

export const { useGetAllProductsQuery } = productsApi