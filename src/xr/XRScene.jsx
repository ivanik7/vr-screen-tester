import { useStateContext } from "../context/StateContext";
import patterns from "../patterns";

export default function XRScene() {
    const { state } = useStateContext();

    const Pattern = patterns[state.patternId].render;

    return <Pattern/>
}
