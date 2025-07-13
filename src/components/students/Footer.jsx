import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";


const Footer = () => {
    return (
        <footer className="bg-gray-900 md:px-36 text-left w-full text-white">
            <div className="flex  flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap*32 py-10 border-b border-white/30">
                <div className="flex flex-col md:items-start items-center w-full">
                    <img src={assets.logo_dark} className="w-65" alt="logo" />
                    <p className="mt-6 text-center md:text-left text-sm text-white/80">Welcome to the official website of Arif Academy [Govt. Reg. No-PF-44511]. You will find regarding the land issue and solutions in this website.</p>
                </div>
                <div className="flex flex-col md:items-start items-center w-full">
                    <h2 className="font-semibold text-white text-2xl mb-5">Company</h2>
                    <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex flex-col text-xl items-start w-full ">
                    <h2 className="font-semibold text-white mb-5">Subscribe to Our Newsletter</h2>
                    <p className="text-sm text-white/80">The latestnews, articles, and resources, sent to your inbox weekly</p>
                    <div className="flex items-center gap-2 pt-4">
                        <input className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm" type="email" placeholder="Enter your Email" name="subscribe" id="" />
                        <button className="bg-blue-600 w-24 h-9 text-sm text-white rounded">Subsciribe</button>
                    </div>

                </div>
            </div>
            {/* copy righ msg */}
            <p className="py-4 text-center text-xs md:text-sm text-white/60">Copyright 2025 © Arif Academy. All Right Reserved </p>
        </footer>
    );
};

export default Footer;