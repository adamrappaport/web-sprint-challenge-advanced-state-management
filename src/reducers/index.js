import { FETCH_FAIL, FETCH_SMURF, FETCH_START,ADD_SMURF} from "../actions/index"

export const initialState = {
    smurfs: [],
    loading: false,
    error: ""
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({ ...state, loading: true });
        case (FETCH_SMURF):
            console.log(action.payload);
            return ({ ...state, smurfs: action.payload, loading: false });
        case (ADD_SMURF):
            return ({
                ...state, smurfs: [...state.smurfs,
                {
                    name: action.payload.name,
                    position: action.payload.position,
                    nickname: action.payload.nickname,
                    description: action.payload.description
                }
                ],
                isLoading: false
            });
        case (FETCH_FAIL):
            return ({ ...state, loading: false, error: action.payload });
        
        default:
            return state;
    }
}

export default reducer;