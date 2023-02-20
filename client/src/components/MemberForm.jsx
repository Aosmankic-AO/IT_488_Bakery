import React, {useState} from 'react';
import  "../pages/membership/membership.css"

const MemberForm = () => {
    /** Variables **/
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    /** Handle submission of form **/
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Membership Submit Clicked');
        console.log(name, email, dob);
        // If any of the fields are blank then alert user
        if (name === '' || email === '' || dob === '') {
            alert('Please fill out all fields');
        }
        // POST request sent to API
        const response = await fetch('http://localhost:3001/membership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, dob}),
        });
        // If response is successful, then execute
        if(response.ok){
            console.log('Response OKAY')
            setName('');
            setEmail('');
            setDob('');
            window.location.reload();
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Member Sign Up Form</h1>
                <label >Name</label>
                <input onChange={(e)=> setName(e.target.value)}/>
                <label>Email</label>
                <input onChange={(e)=> setEmail(e.target.value)}/>
                <label type="date">Date of Birth</label>
                <input onChange={(e)=> setDob(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MemberForm;