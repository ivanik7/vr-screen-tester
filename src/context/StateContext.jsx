import { createContext, useReducer, useContext } from "react";
import { patternsCount } from "../patterns";

export const PATTERN_SET = "PATTERN_SET";
export const PATTERN_NEXT = "PATTERN_NEXT";
export const PATTERN_PREV = "PATTERN_PREV";
export const FPS_NEXT = "FPS_NEXT";
export const FPS_PREV = "FPS_PREV";

const StateContext = createContext();

const initialState = {
    patternId: 0,
    fps: undefined,
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
        case FPS_NEXT: {
            const currentFpsId = action.supportedFps.indexOf(state.fps);
            const nextFpsId = currentFpsId + 1 === action.supportedFps.length ? 0 : currentFpsId + 1;

            console.log('next',action.supportedFps, currentFpsId, nextFpsId);

            return {
                ...state,
                fps: action.supportedFps[nextFpsId]
            }
        }
        case FPS_PREV: {
            const currentFpsId = action.supportedFps.indexOf(state.fps);
            const prevFpsId = (currentFpsId - 1) < 0 ? action.supportedFps.length - 1 : currentFpsId - 1;

            console.log('prev',action.supportedFps, currentFpsId, prevFpsId);

            return {
                ...state,
                fps: action.supportedFps[prevFpsId]
            }
        }
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export const useStateContext = (fn = s => s) => fn(useContext(StateContext));
