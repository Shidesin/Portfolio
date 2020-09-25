import React from 'react';
import styles from './NavigationBlock.module.css'

function NavigationBlock() {
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contact</a>
        </div>
    );
}

export default NavigationBlock;