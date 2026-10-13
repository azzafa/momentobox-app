const Footer = () => {
    return (
        <div className="flex justify-center relative z-10">
            <footer className="bg-white inset-shadow-sm/20 p-4 w-full mt-10">
                <div className="w-full max-w-screen-xl mx-auto p-4">
                    <div className="flex item-center justify-between">
                        <img src="/assets/logo.png" alt="Logo" className="h-10" />
                                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">MomentoBox</a>. All Rights Reserved.</span>
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
                    </div>
                </div>
            </footer>
        </div>
    )
};
export default Footer;