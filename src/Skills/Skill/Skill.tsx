import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    text: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>icon</div>

            <h3 className={style.title}>
                {props.title}
            </h3>
            <span className={style.text}>
                {props.text}
            </span>
        </div>
    );
}

export default Skill;