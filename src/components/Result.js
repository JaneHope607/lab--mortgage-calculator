import React from 'react';

const Result = (props) => {
    return (
        <>
        <h2>Maximum House Value: £{props.results}</h2>
        <h2>Expected Monthly Repayments: £{props.repaymentResults}</h2> 
        </>
    )
}

export default Result;