import React from 'react';
import styles from './Header.module.css'
import NavigationBlock from '../navigation_block/NavigationBlock';

function Header() {
    return (
        <div className={styles.header}>
            <NavigationBlock/>
        </div>
    );
}

export default Header;