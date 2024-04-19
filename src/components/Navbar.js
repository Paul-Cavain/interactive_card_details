const Navbar = ({title}) => {
    return (
        <nav className="fixed top-0 left-0 right-0 py-4 text-2xl uppercase w-full bg-sky-400 text-white text-start px-2">
            <h1>{title}</h1>
        </nav>
    );
}

export default Navbar;