import React from 'react';
import styles from './Footer.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'


function Footer() {
return(
    <div className={styles.container}>
        <div className={`${common_style.content_box} ${styles.content}`}>
            <h3>Alex Shidesin</h3>
            <div className={styles.footer}>
                Link block: аля моя инста, линкед, заведу facebook и гит.
                и да, их можнов отдельную компоненту, но чуть позже
            </div>
            <div className={styles.selfer_footer}>
                © 2020 All rights Reserved
            </div>
        </div>
    </div>
)
}

export default Footer;