const Header = () => {
    return (
        <div className="flex justify-center items-center">
            <nav className="flex felx-col bg-gray-300 shadow-md max-w-auto rounded-full justify-between p-6 space-y-16 ">
                <div className="flex flex-wrap item-center justify-between mx-auto max-w-screen-xl">
                    <img src="./assets/logo.png" alt="Logo" className="h-10" />
                    <div className="item-center justify-between px-6 py-2">
                        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                            <li>
                                <a href="/" className="text-stone-950 hover:text-gray-900"> Home </a>
                            </li>
                            <li>
                                <a href="/" className="text-stone-950 hover:text-gray-900"> Galery </a>
                            </li>
                            <li>
                                <a href="/" className="text-stone-950 hover:text-gray-900"> Special </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <button type="button" className="text-white bg-[#558297] focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center">Sing In</button>
                        <button type="button" className="text-white bg-[#558297] focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center">Sing Up</button>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
};
export default Header;