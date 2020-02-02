import React from 'react';
import Timer from 'react-compound-timer'


export const HomePage = (props) => {


    if(props.isIdleTimeOut) {
        props.history.push('/')
    }
    

    return (
        <div className="container mgntop" style={{ backgroundColor: "white", marginBottom: "30px" }}>
            <h1 style={{ paddingTop: "30px" }}>Idle Time</h1>
            <h3 style={{ paddingTop: "30px" }}>What is Idle Time?</h3>
            <p style={{ paddingTop: "20px" }}>Idle time is paid time that an employee, or machine, is unproductive that is a result of factors that can either be controlled or uncontrolled by management. It normally applies to full-time workers rather than consultants who typically have to bill for every hour of their time.</p>
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <Timer direction="backward" initialTime={60000}>
                    You will be auto logged out in
                    <Timer.Minutes /> minutes,
                    <Timer.Seconds /> seconds.
                </Timer>
            </div>
            
            {/* <h3 style={{ paddingTop: "20px", paddingBottom: "20px" }}>You will be auto logged out in <span id="SecondsUntilExpire"></span> seconds.</h3> */}
        </div>
    )
}