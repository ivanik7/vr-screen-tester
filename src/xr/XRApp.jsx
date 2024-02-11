import { XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import XRScene from "./XRScene";
import XRControl from "./XRControl";
import { useStateContext } from "../context/StateContext";
import FpsDisplay from "./components/FpsDisplay";

export default function XRApp() {
    const { state } = useStateContext();

    return (
        <div className="w-1 h-1 opacity-0">
            <Canvas>
                <XR frameRate={state.fps}>
                    <XRScene/>
                    <XRControl/>
                    <FpsDisplay/>
                </XR>
            </Canvas>
        </div>
    );
}
