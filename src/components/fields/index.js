import React from 'react';

export const customInput = field =>{
    const { meta: { touched, error }} = field; // za pomocą tego w poniższej linijce nie musimy pisać field.meta.touched lub field.meta.error 
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
  
    return(
        <div className={className}>
            <label>{field.visibleName}</label>
            <input {...field.input} className="form-control" type="text" disabled={field.disabled}/>
            <div className="text-help">{ touched ? error : ''}</div>
        </div>
        );     
}
 