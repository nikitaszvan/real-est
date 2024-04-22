import React from 'react';
import './form-input.styles.css';

const FormInput = ({ label, ...otherProps }) => {

    return (
        <div className="group">
            { label && (
            <label className={`${otherProps.value.length? 'shrink' : ''} form-input-label`} htmlFor={ label }>{ label }</label>
            )}
            <input className='form-input' { ...otherProps } required/>
        </div>
    )
}

export default FormInput;