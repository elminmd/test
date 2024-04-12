import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const todosApi = createApi({
    reducerPath: "tickets",
    baseQuery,
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "todos",
        }),
    }),
});

export const { useGetAllTodosQuery } = todosApi;