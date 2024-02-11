export default function Link({href, children}) {
    return (
        <a className="text-blue-500" href={href}>{children}</a>
    );

}