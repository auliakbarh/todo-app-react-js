import React from 'react';
import style from '../styles/form.module.css';

function InlineInput({placeholder='Tuliskan sesuatu', onClick=null, buttonName='Simpan'}) {
    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    const addValue = () => {
        const inputVal = document.getElementById("myInput").value;
        if(isBlank(inputVal)){
            alert('Mohon tuliskan sesuatu')
            document.getElementById("myInput").value = "";
        }else{
            onClick(inputVal);
            document.getElementById("myInput").value = "";
        }

    };
    return (
        <div className={style.containerInlineInput}>
            <input type="text" id="myInput" placeholder={placeholder} />
            <span onClick={() => addValue()} className={style.addBtn}>{buttonName}</span>
        </div>
    );
}

export default InlineInput;
