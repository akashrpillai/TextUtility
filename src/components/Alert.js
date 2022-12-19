import React from 'react'

export default function Alert({alert}) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
       <div style = {{height:"50px"}}>
       {alert && <div>
            <div className={`alert alert-${alert.Type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(alert.Type) }</strong> {alert.msg}
            </div>
        </div>}
        </div>
    )
}
