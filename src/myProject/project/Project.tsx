import React from 'react';
import style from './Project.module.css'

type PropsTypeProject = {
    title: string
    description: string
}

function Project(props: PropsTypeProject) {
    return (
        <div className={style.project_container}>
            <a className={style.link} href={'ссылачка на гит'}><img className={style.image} alt={'карцинка с логаципам'}/></a>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Project;