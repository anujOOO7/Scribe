import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <Link to="/" className="flex-none w-10">
                <img src={logo} className="flex-none w-10"/>
            </Link>
            <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0">
                <input 
                    type="text" 
                    placeholder="Search"
                    className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:test-dark-grey"
                />
                <i className="fi fi-br-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
            </div>
        </nav>
    );
}

export default Navbar;