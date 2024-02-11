import { XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import XRScene from "./XRScene";
import XRControl from "./XRControl";

export default function XRApp() {
    return (
        <Canvas>
            <XR>
                <XRScene/>
                <XRControl/>
            </XR>
        </Canvas>
    );
}
