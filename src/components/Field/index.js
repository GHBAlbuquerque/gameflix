import React from 'react';

function FormField(props) {
    return (
        <div>
            <label>
                {props.labelName}:
                    <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                />{props.children}
            </label>
        </div>
    )
};



export default FormField;