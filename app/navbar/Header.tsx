import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-center -mt-2 relative z-10">
            <nav className="bg-white shadow-xl/20 rounded-full p-4 w-5xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
                    <img src="/assets/logo.png" alt="Logo" className="h-10" />
                    <div className="item-center justify-between px-6 py-2">
                        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                            <li>
                                <a href="/" className="text-stone-950 hover:text-gray-900"> Home </a>
                            </li>
                            <li>
                                <a href="/" className="text-stone-950 hover:text-gray-900"> Galery </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <Link href="/sing-in-up/login" className="text-white bg-[#558297] focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center">
                            Sing In
                        </Link>
                        <Link href="/" className="text-white bg-[#558297] focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center">
                            Sing Up
                        </Link>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
};
export default Header;