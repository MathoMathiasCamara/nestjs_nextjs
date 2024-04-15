import { cookies } from "next/headers";
import { BACKEND_URL } from "../constants/api";

const getHeaders = () => ({
    Cookie: cookies().toString(),
});

export const post = async (path: string, formData: FormData) => {
    return postJson(path,Object.fromEntries(formData))
};

export const postJson = async (path: string, data: object) => {
    const res = await postAndResponse(path,data);
    const parsedRes = await res.json();
    return parsedRes;
};

export const postAndResponse = async (path: string, data: object) => {
    return fetch(`${BACKEND_URL}/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getHeaders() },
        body: JSON.stringify(data),
    });
};


export const get = async (path: string) => {
    const res = await fetch(`${BACKEND_URL}/${path}`, {
      headers: { ...getHeaders() },
    });
    return res.json();
  };
