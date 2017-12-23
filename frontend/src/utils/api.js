const api = 'http://localhost:3001/';

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

export function fetchCategories (){
    return fetch(`${api}categories` , {headers : {'Authorization': token}})
    .then((res) => res.json())
    .then(({categories}) => categories.map(({name}) => name));
}

export function fetchAllPosts () {
    return fetch(`${api}posts`, {headers : {'Authorization': token}})
    .then((res) => res.json())
    .then((resjson) => resjson.filter(({deleted}) =>  deleted !== true));
} 

export function fetchPostsByCategory ( category ) {
    return fetch(`${api}${category}/posts`, {headers : {'Authorization': token}})
    .then((res) => res.json())
    .then((resjson) => resjson.filter(({deleted}) =>  deleted !== true));
}