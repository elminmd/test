import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/`,
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/json");
        // headers.set("Authorization", `Bearer asdf1234`);
        return headers;
    },
});

export const customsBaseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_CUSTOMS_BASE_URL}/`,
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/json");
        headers.set("Lang", localStorage.getItem("i18nextLng") || "az");
        return headers;
    }
})
