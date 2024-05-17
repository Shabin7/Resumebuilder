import React from 'react'
import Navbar from './Navbar'
import Reaumeform from './Reaumeform';


const Resumeshow = ({}) => {
    return (<>

        <Navbar />
        <div className='m-4'>

            <h3>Personal Details</h3>
            <p>Full name:</p>
            <p>Email ID:</p>
            <p>Phone:</p>
            <p>City:</p>
            <p>State:</p>
            <p>Pincode</p>

            <h3>Educational qualification</h3>
            <p>Course:</p>
            <p>College:</p>
            <p>Year Of Completion:</p>

            <h3>Previous Work Experiancw</h3>
            <p>Company Name:</p>
            <p>Position:</p>
            <p>Duration:</p>
        </div>
    </>

    )
}

export default Resumeshow