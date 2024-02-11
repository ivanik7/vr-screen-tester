import patterns from "../patterns";
import Link from "./components/Link";
import ModeButton from "./components/ModeButton";
import { PATTERN_SET, useStateContext } from "../context/StateContext";
import { startSession } from "@react-three/xr";

function App() {
    const { state, dispatch } = useStateContext();

    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-8">
            <h1 className="text-4xl">VR screen tester</h1>

            <div className="mx-11 max-w-lg">
                Click at any button bellow to start testing. Use left and right triggers to switch patterns. Use left and right grip to cycle through refresh rates. Press left menu button to exit.
            </div>

            {!navigator.xr ? <div className="bg-red-100">
                Your browser does not support WebXR. Open this page with built headset browser.
            </div> : <></> }

            <div className="flex">
                {patterns.map((pattern, index) => (
                    <ModeButton
                        key={pattern.name}
                        active={index === state.patternId}
                        onClick={() => {
                            dispatch({ type: PATTERN_SET, payload: index });
                            startSession('immersive-vr');
                        }}
                    >
                        <pattern.button />
                    </ModeButton>
                ))}
            </div>
            
            <div className="flex flex-col items-center">
                <div>Created by ivanik</div>
                <div>
                    <Link href="https://t.me/ivanik_log">telegram</Link> | <Link href="https://github.com/ivanik7">github</Link>
                </div>
            </div>
        </div>
    );
}

export default App;
