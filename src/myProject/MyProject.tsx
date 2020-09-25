import React from 'react';
import style from './MyProject.module.css'
import common_style from '../common/styles_module/CommonStyleBox.module.css'
import Project from './project/Project';

function MyProject() {
    return (
        <div className={style.project_container}>
            <div className={`${common_style.content_box} ${style.project_box}`}>
                <h2 className={style.title}>My Project</h2>
                <div className={style.projects}>
                    <Project title={'Counter'} description={'Бляцки щетчик с настройками'}/>
                    <Project title={'SocialNetwork'} description={'Еще чуть-чуть и ты напишешь ВСети....'}/>
                    <Project title={'TodoList'} description={'Trello занервничал после прихода тебя в инкубатор....'}/>
                </div>
            </div>
        </div>
    );
}

export default MyProject;