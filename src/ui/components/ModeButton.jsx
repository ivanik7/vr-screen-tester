export default function ModeButton({onClick, active, children}) {
    return (
        <button
            className={`m-4 border-4 rounded h-16 w-16 ${active ? 'border-cyan-400' : 'border-gray-400'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
