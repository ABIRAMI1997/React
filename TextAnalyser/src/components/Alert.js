import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            < div class="alert alert-primary" role="alert">
                {props.alert.msg} : {props.alert.type}
            </div>
        </div>
    )
}


