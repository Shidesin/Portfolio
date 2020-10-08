import React from 'react';
import styles from './MainBox.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'


function MainBox() {
    return (
        <div className={styles.container}>
            <div className={common_style.content_box}>
                <div className={styles.text}>
                    <div> Link block: аля моя инста, линкед, заведу facebook и гит.
                        и да, их можнов отдельную компоненту, но чуть позже</div>
                    <h2>I am Alex Shidesin</h2>
                    <span>Na danniy moment hui poymi chto....</span>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
}

export default MainBox;