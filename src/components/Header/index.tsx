import logo from "../../assets/logo.svg";

export function Header() {
    return (
        <div id="header-container" className="hidden xl:block xl:absolute top-0 left-0 w-full p-4 z-10 pt-8">
            <header id="header" className="md:w-9/12 w-11/12 mx-auto">
                <img src={logo} className="logo mx-auto md:mx-0" alt="Talenzz logo" />
            </header>
        </div>
    );
}
