import { combineReducers } from 'redux';

import { CREATE_POST } from '../actions';

const initialListPost = {
    listPosts:[
        {
            title: null,
            body: null,
            author: null,
            category: null,
            commentCount: null,
            id: null,
            timestamp: null,
            voteScore: null
        }
    ]
}

// function post(state ={}, action){
//     switch(action.type){
//         case ADD_POST:
//             const { post } = action
//             return {
//                 ...state,
//             // what goes here?
//             }
//         default :
//             return state
//     }
// }

function listOfPosts(state = initialListPost, action){
    const{post} = action //check
    console.log('reducer readable');

    switch(action.type){
        case CREATE_POST :
        return {
            post //change, obviously
        }
        default :
            return state
    }
}

export default combineReducers({
    // post,
    listOfPosts,
})