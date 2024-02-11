import { useThree, createPortal } from '@react-three/fiber'

export default function HeadLinkObject({children}) {
    const camera = useThree((state) => state.camera)
    
    return createPortal(children, camera)
}
