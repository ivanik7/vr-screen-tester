import { useXREvent } from "@react-three/xr";
import { PATTERN_NEXT, PATTERN_PREV, useStateContext } from "../context/StateContext";

export default function XRControl() {
    const { dispatch } = useStateContext();

    useXREvent('select', () => dispatch({ type: PATTERN_PREV }), {handedness: "left"});
    useXREvent('select', () => dispatch({ type: PATTERN_NEXT }), {handedness: "right"});

    return <></>
}
