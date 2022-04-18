import Auth from "../types/auth";

export const API_URL = process.env.REACT_APP_API_URL;

export const get = async <T>(endpoint:string, auth:Auth|null=null):Promise<T> => {
    const headers:any = {
        'Content-Type': 'application/json'
    };
    if (auth?.token) headers['Authorization'] = `token ${auth.token}`;
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: headers
    });
    const json = await response.json();
    return json as T;
}

export const post = async <T>(endpoint:string, body:any, auth:Auth|null=null):Promise<T> => {
    const headers:any = {
        'Content-Type': 'application/json'
    };
    if (auth?.token) headers['Authorization'] = `token ${auth.token}`;
    return fetch(`${API_URL}${endpoint}`,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
        if(data.hasOwnProperty("message")) throw new Error(data.message);
        return data
    });
}