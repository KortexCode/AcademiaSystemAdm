
function Header() {

    return (
        <header className="w-full">
            <nav className="flex flex-row items-center justify-between w-full h-11
            border-b border-solid border-orange-700 bg-primary-color">
                <p className="ml-4">Logo</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="fill-current" className="size-8 mr-4 cursor-pointer" id="menu-mobile">
                <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </nav>
        </header>
    )
}

export {Header};