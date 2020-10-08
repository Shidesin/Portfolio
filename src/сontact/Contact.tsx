import React from 'react';
import styles from './Contact.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'



function Contact() {
    return (
        <div className={styles.container}>
            <div className={`${common_style.content_box} ${styles.content_box}`}>
                <h2>Contact</h2>
                <div className={styles.form_box} >
                    <form className={styles.form}>
                        <div className={styles.row_class}>
                            <div>
                                <label>Name</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <>
                            <label>Subject</label>
                            <input type="text"/>
                        </>
                        <>
                            <label>Message</label>
                            <textarea cols={40} rows={10}/>
                        </>
                    </form>
                </div>
                <div>
                    <input type={'submit'}/>
                </div>

            </div>
        </div>
    )
}

export default Contact;