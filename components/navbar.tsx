import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/intro" className="text-white hover:text-gray-300">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
