import React from 'react';
import './form-input.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const FormInput = ({ label, classInput, onFocus, ...otherProps }) => {

    return (
        <div className={`${classInput} group`} style={{ display: classInput !== 'confirm-password-input' ?  'block' : 'inline-flex'}}>
            { label && (
            <label className={`${otherProps.value.length? 'shrink ' : ''}form-input-label`} htmlFor={ label }>{ label }</label>
            )}
            <input className={`${label!== 'First and Last Name'? 'noSpaceInput' : 'noDoubleSpace'} form-input`} { ...otherProps } onFocus={ onFocus? onFocus : null} required />
        </div>
    )
}

export default FormInput;