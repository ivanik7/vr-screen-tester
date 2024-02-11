export default {
    name: "green",
    button: () => <div className="bg-green-500 w-full h-full"></div>,
    render: () => <color attach="background" args={["#00FF00"]} />,
};
