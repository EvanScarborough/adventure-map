export const API_URL = process.env.REACT_APP_API_URL;

export const get = async <T>(endpoint:string):Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    return json as T;
}

export const post = async <T>(endpoint:string, request:any):Promise<T> => {
    return fetch(`${API_URL}${endpoint}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(data => {
        if(data.hasOwnProperty("message")) throw new Error(data.message);
        return data
    });
}