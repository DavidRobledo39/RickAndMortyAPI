import {GET_CHARACTERS, GET_EPISODES, CREATE_CHARACTER, PAGINADO} from './actionTypes';


const initialState = {
    characters: [],
    episodes: [],
    info:{}
};


export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_CHARACTERS: {
            return {
                ...state,
                characters: action.payload
            }
        }
        case GET_EPISODES: {
            return {
                ...state,
                episodes: action.payload
            }
        }
        case CREATE_CHARACTER: {
            return {
                ...state
            }
        }
        case PAGINADO:{
            return{
                ...state,
                info: action.payload
            }
        }
        default: {
            return state
        }
    }
}


