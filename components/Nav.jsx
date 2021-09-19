import Link from 'next/link';
import React from 'react';

import { MdMovieFilter } from "react-icons/md";
import { FaDev } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg";




export default function Nav() {
    return (

        <div className="navList">

            <nav className="navContent">

                <ul className="nav-list">
                    <li className="nav-list" ><Link href="/routes/Desenvolvimento">   Desenvolvimento  </Link> <FaDev/>         </li>
                    <li className="nav-list" ><Link href="/routes/Cafe">  Café                         </Link> <CgCoffee/>      </li>
                    <li className="nav-list" ><Link href="/routes/Sugestoes">  Sugestões               </Link> <MdMovieFilter/> </li>
                </ul>
            </nav>
        </div>
    )
}

