import { setShowTwitterCards, increaseLoaderCounter, reduceLoaderCounter, setUsers } from "./actions";

export const initialState = {
    layout: {
        showTwitterCards: true,
    },
    loaderCounter: 0,
    users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case setShowTwitterCards.type:
            return {
                ...state,
                layout: {
                    ...state.layout,
                    showTwitterCards: action.payload,
                }
            }
        case increaseLoaderCounter.type:
            return {
                ...state,
                loaderCounter: state.loaderCounter + 1,
            }
        case reduceLoaderCounter.type:
            return {
                ...state,
                loaderCounter: state.loaderCounter - 1,
            }
        case setUsers.type:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;