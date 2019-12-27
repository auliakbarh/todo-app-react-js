import React from 'react';
import style from '../styles/index.module.css'
import InlineInput from './inline-input'


function Headers(props) {
    return (
        <div className={`${style.headerStyle} ${style.centeredContent}`}>
            <h1>To-do</h1>
            <InlineInput onClick={props.addItem} />
        </div>
    );
}

export default Headers;
