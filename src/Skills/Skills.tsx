import React from 'react';
import style from './Skills.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'
import Skill from './Skill/Skill';

function Skills() {
    let jsText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    let cssText = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    let reactText = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


    return (
        <div className={style.skill_container}>
            <div className={`${common_style.content_box} ${style.skill_box}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} text={jsText}/>
                    <Skill title={'CSS'} text={cssText}/>
                    <Skill title={'React'} text={reactText}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;