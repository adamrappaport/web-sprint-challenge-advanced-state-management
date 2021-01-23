import axios from 'axios';


export const FETCH_START = "FETCH_START"
export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";


export const findSmurf = () => dispatch => {
    
    
    dispatch({ type: FETCH_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SMURF, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_FAIL, payload: err }));
}
   
export const addNewSmurf = (smurfData) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurfData)
        .then(res => {
            dispatch({ type: ADD_SMURF, payload: smurfData });
        })
        .catch(err => dispatch({ type: FETCH_FAIL, payload: err }));
}

export const setError = (err) => {
    return({ type: FETCH_FAIL, payload: err });


}

