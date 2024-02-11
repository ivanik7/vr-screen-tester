export default {
    name: "red",
    button: () => <div className="bg-red-500 w-full h-full"></div>,
    render: () => <color attach="background" args={["#FF0000"]} />,
};
