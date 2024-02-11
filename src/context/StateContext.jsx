import { createContext, useReducer, useContext } from "react";
import { patternsCount } from "../patterns";

export const PATTERN_SET = "PATTERN_SET";
export const PATTERN_NEXT = "PATTERN_NEXT";
export const PATTERN_PREV = "PATTERN_PREV";

const StateContext = createContext();

const initialState = {
    patternId: 2,
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case PATTERN_SET:
            return {
                ...state,
                patternId: action.payload,
            };
        case PATTERN_NEXT:
            return {
                ...state,
                patternId: state.patternId + 1 === patternsCount ? 0 : state.patternId + 1,
            };
        case PATTERN_PREV:
            return {
                ...state,
                patternId: state.patternId - 1 < 0 ? patternsCount - 1 : state.patternId - 1,
            };
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
