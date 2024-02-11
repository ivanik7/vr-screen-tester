import { Circle } from "@react-three/drei";
import HeadLinkObject from "../xr/components/HeadLinkObject";

export default {
    name: "glare",
    button: () => <div className="bg-black w-full h-full">
        <svg className="w-full h-full">
            <circle cx="25%" cy="25%" r="15%" fill="white" />
            <circle cx="75%" cy="25%" r="15%" fill="white" />
            <circle cx="25%" cy="75%" r="15%" fill="white" />
            <circle cx="75%" cy="75%" r="15%" fill="white" />
        </svg>
    </div>,
    render: () => (<>
        <color attach="background" args={["#000000"]} />
        <HeadLinkObject>
            <group
                position={[0, 0, -5]}
            >
                <Circle 
                    position={[-0.75, -0.75, 0]}
                    scale={[0.25, 0.25, 0.25]}
                    material-color="white"
                />
                <Circle 
                    position={[0.75, -0.75, 0]}
                    scale={[0.25, 0.25, 0.25]}
                    material-color="white"
                />
                <Circle 
                    position={[-0.75, 0.75, 0]}
                    scale={[0.25, 0.25, 0.25]}
                    material-color="white"
                />
                <Circle 
                    position={[0.75, 0.75, 0]}
                    scale={[0.25, 0.25, 0.25]}
                    material-color="white"
                />
            </group>
        </HeadLinkObject>
    </>),
};
