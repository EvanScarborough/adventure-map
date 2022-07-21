import { PreviewFile } from "../components/image-uploader.component";
import Auth from "../types/auth";

export const API_URL = process.env.REACT_APP_API_URL;

export interface ApiResponse<T> {
    data:T,
    status:number,
    error:boolean,
    errorMessage:string
};

export const get = async <T>(endpoint:string, auth:Auth|null=null):Promise<ApiResponse<T>> => {
    const headers:any = {
        'Content-Type': 'application/json'
    };
    if (auth?.token) headers['Authorization'] = `token ${auth.token}`;
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: headers
    });
    const json = await response.json();
    return {
        data: json as T,
        status: response.status,
        error: response.status !== 200,
        errorMessage: json.hasOwnProperty("message") ? json.message as string : response.statusText
    };
}

export const post = async <T>(endpoint:string, body:any, auth:Auth|null=null):Promise<ApiResponse<T>> => {
    const headers:any = {
        'Content-Type': 'application/json'
    };
    if (auth?.token) headers['Authorization'] = `token ${auth.token}`;
    const response = await fetch(`${API_URL}${endpoint}`,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });
    const json = await response.json();
    return {
        data: json as T,
        status: response.status,
        error: response.status !== 200,
        errorMessage: json.hasOwnProperty("message") ? json.message as string : response.statusText
    };
}

export const postFile = async <T>(endpoint:string, file:PreviewFile, auth:Auth|null=null):Promise<ApiResponse<T>> => {
    const headers:any = {
        // 'Content-Type': 'multipart/form-data'
    };
    if (auth?.token) headers['Authorization'] = `token ${auth.token}`;
    let body = new FormData();
    body.append('file', (file.file));
    const response = await fetch(`${API_URL}${endpoint}`,{
        method: 'POST',
        headers: headers,
        body: body
    });
    const json = await response.json();
    return {
        data: json as T,
        status: response.status,
        error: response.status !== 200,
        errorMessage: json.hasOwnProperty("message") ? json.message as string : response.statusText
    };
}