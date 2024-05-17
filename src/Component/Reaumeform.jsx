import React, { useState } from 'react'
import Navbar from './Navbar'

const Reaumeform = () => {
    const [fullname, setFunllName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPinCode] = useState('');
    const [course, setCourse] = useState('');
    const [college, setCollege] = useState('');
    const [year, setYear] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [Position, setPosition] = useState('');
    const [duration, setDuration] = useState('');



    const handleUpdate = () => {
        const data = {
            fullname,
            email,
            phone,
            city,
            state,
            pincode,
            course,
            college,
            year
        }
        console.log(data);

    }
    return (

        <div>
            <Navbar />
            <form class="row g-3  m-4" >
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Full name</label>
                    <input type="text" class="form-control" id="validationCustom01"
                        value={fullname}
                        onChange={(e) => setFunllName(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Email ID</label>
                    <input type="email" class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Phone</label>
                    <input type="number" class="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">City</label>
                    <input type="text" class="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">State</label>
                    <input type="text" class="form-control"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Pin Code</label>
                    <input type="number" class="form-control"
                        value={pincode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className='mt-4'>Educational qualifications</h3>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Course</label>
                    <input type="text" class="form-control"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Univercity/ College/School</label>
                    <input type="text" class="form-control"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Year Of Completion</label>
                    <input type="number" class="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className='mt-4'>Previous Work Experiance</h3>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Company Name</label>
                    <input type="text" class="form-control"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Position</label>
                    <input type="text" class="form-control"
                        value={Position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Duration</label>
                    <input type="text" class="form-control"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
                {/* <div class="col-12">
                    <button class="btn btn-primary" type="button" onClick={handleUpdate}>Submit form</button>
                </div> */}

            </form>


            <div>
                <h3 className='mt-4 ms-4 pt-4 ps-4'>Resume</h3>
            </div>

            <div className='ms-4 p-4'>
                <h3 className='text-info'>Personal Details</h3>
                <p>Full name: {fullname}</p>
                <p>Email ID: {email}</p>
                <p>Phone:{phone}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Pincode: {pincode}</ p>

                <h3 className='text-info'>Educational qualification</h3>
                <p>Course:  {course}</p>
                <p>College:  {college}</p>
                <p>Year Of Completion: { year}</p>

                <h3 className='text-info'>Previous Work Experiancw</h3>
                <p>Company Name:  {companyName}</p>
                <p>Position:  {Position}</p>
                <p>Duration:  {duration}</p>
            </div>


        </div>
    )
}

export default Reaumeform