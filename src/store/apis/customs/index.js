import { createApi } from "@reduxjs/toolkit/query/react";
import { customsBaseQuery } from "../baseQuery";

export const customsApi = createApi({
    baseQuery: customsBaseQuery,
    reducerPath: "customs",
    tagTypes: ["Customs"],
    endpoints: (builder) => ({
        getCustoms: builder.mutation({
            query: (body) => ({
                url: "api/v1/dictionaries/calAutoDuty",
                method: "POST",
                body,
            }),
        })
    }),
});

export const { useGetCustomsMutation } = customsApi;