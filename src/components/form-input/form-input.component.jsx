import React from 'react';
import './form-input.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const FormInput = ({ label, classInput, ...otherProps }) => {

    return (
        <div className={`${classInput} group`}>
            { label && (
            <label className={`${otherProps.value.length? 'shrink ' : ''}form-input-label`} htmlFor={ label }>{ label }</label>
            )}
            <input className={`${label!== 'First and Last Name'? 'noSpaceInput' : 'noDoubleSpace'} form-input`} { ...otherProps } required />
        </div>
    )
}

export default FormInput;