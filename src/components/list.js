import React from 'react';
import style from '../styles/list.module.css'

function List(props) {
    let renderList = [];
    if(props.items){
        renderList = props.items.map((item) => {
            if(item.done){
                return <div key={item.id} className={`${style.checked} ${style.listItem}`}>
                    <span onClick={() => props.onClick(item.id)} className={`${style.item} ${style.textUnderlined}`}>
                        {item.title}
                    </span>
                    <span className={style.close} onClick={() => props.deleteItem(item.id)} >{`\u00D7`}</span>
                </div>
            }else{
                return <div key={item.id} className={style.listItem}>
                    <span onClick={() => props.onClick(item.id)} className={`${style.item} ${style.textUnderlined}`} >
                    {item.title}
                </span>
                    <span className={style.close} onClick={() => props.deleteItem(item.id)} >{`\u00D7`}</span></div>
            }
        });
    }

    return (
        <div id="myUL" className={style.containerList}>
            {renderList}
        </div>
    );
}

export default List;
