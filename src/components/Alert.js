import React from 'react'

export default function Alert(props) {
    const capital = (msg) => {
        let msg2 = msg.charAt(0).toUpperCase()
        return msg2 + msg.slice(1)
    }
    return (
        <div style={{ height: "70px" }} >
            {
                props.alert &&

                <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        {capital(props.alert.type)} - {props.alert.message}

                    </div>
                </div>

            }
        </div>


    )
}
