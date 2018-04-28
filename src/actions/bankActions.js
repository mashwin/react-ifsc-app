import axios from 'axios';
import {
    GET_BANKS, GET_STATES,
    UPDATE_BANK_NAME, GET_CITIES,
    UPDATE_STATE_NAME, UPDATE_CITY_NAME
} from '../constants';


export function getBanks(dispatch) {
    return function (dispatch) {
        axios.get('http://localhost:4000/banks')
            .then((response) => {
                dispatch({ 'type': GET_BANKS, 'payload': response.data.banks });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getStates(bankName) {

    return function (dispatch) {
        axios.post('http://localhost:4000/states', { bankName: bankName })
            .then((response) => {
                dispatch({ 'type': GET_STATES, 'payload': response.data.states });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function updateBankName(bankName) {
    return {
        type: UPDATE_BANK_NAME,
        payload: bankName
    }
}

export function getCities(bankName, sname) {

    return function (dispatch) {
        axios.post('http://localhost:4000/cities', { bankName: bankName, stateName: sname })
            .then((response) => {
                dispatch({ 'type': GET_CITIES, 'payload': response.data.cities });
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

export function updateStateName(stateName) {
    return {
        type: UPDATE_STATE_NAME,
        payload: stateName
    }
}

export function updateCityName(cityName) {
    return {
        type: UPDATE_CITY_NAME,
        payload: cityName
    }
}