import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IProd } from "../models/Interfaces";
const URL = "http://localhost:9000/api/product";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        get: builder.query<IProduct, void>({
            query: () => ({
                url: "/",
                method: "GET"
            }),
            providesTags: ["Products"]
        })
    })
});



