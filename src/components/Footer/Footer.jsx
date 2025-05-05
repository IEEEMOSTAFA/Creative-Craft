import React from 'react';
import { FaFacebookF, FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row items-center justify-between bg-black text-white px-10 py-6 mt-3">
            {/* Logo & Company Info */}
            <div className="flex items-center gap-4">
                <img
                    src="https://i.ibb.co/mFtpPzfy/bd-govt.png" // Replace with your actual logo URL
                    alt="Gov Service Logo"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h2 className="text-2xl font-bold text-yellow-400">Govt Service</h2>
                    <p className="text-sm text-gray-400">Providing reliable services since 1992</p>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            {/* Social Links */}
            <nav className="flex gap-6 text-xl mt-4 md:mt-0">
                <a href="https://facebook.com" className="hover:text-blue-500">
                <FaFacebookF />
                    {/* <FaFacebookF /> */}
                </a>
                <a href="https://github.com" className="hover:text-gray-400">
                    <FaGithub />
                </a>
                <a href="https://youtube.com" className="hover:text-red-500">
                    <FaYoutube />
                </a>
                <a href="https://twitter.com" className="hover:text-blue-400">
                    <FaXTwitter />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;