export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST = 'GET_POST'

export function createPost({post , category}){
    return{
        type: CREATE_POST,
        post,
        category,
    }
}

export function removePost({id, post, category}){
    return{
        type: DELETE_POST,
        id,
        post,
        category,
    }
}