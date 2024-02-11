import {Text} from '@react-three/drei'
import HeadLinkObject from "./HeadLinkObject";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";

export default function FpsDisplay () {
    const fps = useStateContext(({state}) => state.fps);
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const timeout = setTimeout(() => {
            setShow(false)
        }, 1000);

        return () => clearTimeout(timeout);
    }, [fps])

    if (!fps || !show) {
        return <></>
    }

    return (
        <HeadLinkObject>
            <Text 
                position={[0, 0, -5]}
                outlineColor="black"
                outlineOpacity={1}
                outlineWidth={0.05}
                fontSize={0.3}
                
            >
                {`${fps} FPS`}
            </Text>
        </HeadLinkObject>
    )
}