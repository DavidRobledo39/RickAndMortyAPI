import axios from 'axios';
import {GET_CHARACTERS, GET_EPISODES, CREATE_CHARACTER} from './actionTypes';

export function getCharacters() {
    return async function (dispatch) {
        const characters = await axios.get("http://localhost:3001/characters")
        return dispatch({
            type: GET_CHARACTERS,
            payload: characters.data,
        })
    }
}

export function getEpisodes() {
    return async (dispatch) => {
        const episodes = await axios.get('http://localhost:3001/episode')
        return dispatch({
            type: GET_EPISODES,
            payload: episodes.data,
        })
    }
}
export function createCharacter(payload) {
    return async (dispatch) => {
        const characters = await axios.post('http://localhost:3001/characters', payload)
        return dispatch({
            type: CREATE_CHARACTER,
            payload: characters.data,
        })
    }
}