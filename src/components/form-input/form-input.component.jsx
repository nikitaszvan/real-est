import React from 'react';
import './form-input.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const FormInput = ({ label, classInput, onFocus, signUpMode, ...otherProps }) => {

    return (
        <div className={`${classInput} group`} style={{ display: classInput !== 'confirm-password-input' ?  'block' : 'inline-block', marginBottom: (classInput === 'password-input' && !signUpMode)? '45px' : '5px' }}>
            { label && (
            <label className={`${otherProps.value.length? 'shrink ' : ''}form-input-label`} htmlFor={ label }>{ label }</label>
            )}
            <input className={`${label!== 'First and Last Name'? 'noSpaceInput' : 'noDoubleSpace'} form-input`} { ...otherProps } onFocus={ onFocus? onFocus : null} required />
        </div>
    )
}

export default FormInput;