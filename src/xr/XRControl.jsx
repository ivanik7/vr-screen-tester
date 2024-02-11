import { useXR, useXREvent } from "@react-three/xr";
import { FPS_NEXT, FPS_PREV, PATTERN_NEXT, PATTERN_PREV, useStateContext } from "../context/StateContext";

export default function XRControl() {
    const { dispatch } = useStateContext();
    const supportedFps = useXR(state => state?.session?.supportedFrameRates ?? []);

    useXREvent('select', () => dispatch({ type: PATTERN_PREV }), {handedness: "left"});
    useXREvent('select', () => dispatch({ type: PATTERN_NEXT }), {handedness: "right"});
    useXREvent('squeezeend', () => dispatch({ type: FPS_PREV, supportedFps }), {handedness: "left"});
    useXREvent('squeezeend', () => dispatch({ type: FPS_NEXT, supportedFps }), {handedness: "right"});

    return <></>
}
