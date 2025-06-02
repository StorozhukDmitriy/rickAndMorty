import styles from './Header.module.css'

import {Path} from '../Routing/Routing.tsx';
import {NavLink} from 'react-router';

type navArrType = Array<{ page: string, path: string }>

const navArr: navArrType = [{page: 'Home', path: Path.StartPage}, {
    page: 'Characters',
    path: Path.Characters
}, {page: 'Location', path: Path.Location}, {page: 'Episodes', path: Path.Episodes}];


function Header() {


    return (
        <div className={styles.header}>
            <nav>
                <ul className={styles.navMenu}>
                    {navArr.map((item, index) => (
                       <NavLink className={styles.navLink} key={index} to={item.path}>{item.page}</NavLink>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;