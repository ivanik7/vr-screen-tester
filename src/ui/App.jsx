import patterns from "../patterns";
import Link from "./components/Link";
import ModeButton from "./components/ModeButton";
import { PATTERN_SET, useStateContext } from "../context/StateContext";
import { startSession } from "@react-three/xr";
import {trackEvent} from "../tracker";
import { useState } from "react";

function App() {
    const { state, dispatch } = useStateContext();

    const [error, setError] = useState(null);

    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-8">
            <h1 className="text-4xl">VR screen tester</h1>

            <div className="mx-11 max-w-lg">
                <p>Click any button bellow to start testing.</p>
                <p>Press trigger to switch the pattern.</p>
                <p>Press grip to change screen refresh rate.</p>
                <p>Press menu button to exit.</p>
            </div>

            {!navigator.xr || !navigator.xr.isSessionSupported("immersive-vr") ? (
                <div className="bg-red-100 p-4">WebXR is not supported by this browser. Use headset built-in browser.</div>
            ) : (
                <></>
            )}

            {error ? (
                <div className="bg-red-100 p-4">{error}</div>
            ) : (
                <></>
            )}

            <div className="flex flex-wrap justify-center">
                {patterns.map((pattern, index) => (
                    <ModeButton
                        key={pattern.name}
                        active={index === state.patternId}
                        onClick={async () => {
                            dispatch({ type: PATTERN_SET, payload: index });

                            try {
                                await startSession("immersive-vr");
                            } catch (error) {
                                setError(error.message);

                                trackEvent('enter-vr-error', {pattern: pattern.name, error: error.message})
                            }

                            trackEvent('enter-vr', {pattern: pattern.name})
                        }}
                    >
                        <pattern.button />
                    </ModeButton>
                ))}
            </div>

            <div className="flex flex-col items-center">
                <div>Created by ivanik</div>
                <div>
                    <Link href="https://t.me/ivanik_log">telegram channel</Link> | <Link href="https://github.com/ivanik7//vr-screen-tester">github</Link>
                </div>
            </div>
        </div>
    );
}

export default App;
