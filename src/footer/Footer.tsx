import React from 'react';
import styles from './Footer.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'


function Footer() {
return(
    <div className={styles.container}>
        <div className={`${common_style.content_box} ${styles.content}`}>
            <h3>Alex Shidesin</h3>
            <div className={styles.footer}>
                А у меня ссылки наверху будут, так что я хз что тут надо...
            </div>
            <div className={styles.selfer_footer}>
                © 2020 All rights Reserved
            </div>
        </div>
    </div>
)
}

export default Footer;