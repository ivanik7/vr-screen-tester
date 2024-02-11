export default function ModeButton({onClick, active, children}) {
    return (
        <button
            className={`m-4 hover:scale-125 transition-transform border-4 rounded h-16 w-16 hover:border-yellow-500 ${active ? 'border-cyan-400' : 'border-gray-400'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
