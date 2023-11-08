


/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import SubmittedAssignmentCard from '../../SubmittedAssignmentCard/SubmittedAssignmentCard';


const SubmittedAssignment = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make a GET request to fetch data from your server
        fetch('https://y-2gnpgecb1-nazmuls-projects-da750e87.vercel.app/mySubmittedAssignment')
            .then((response) => response.json())
            .then((data) => {
                setSubmittedAssignments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);


    const handleSubmittedConfirm = id => {
        fetch(`https://y-2gnpgecb1-nazmuls-projects-da750e87.vercel.app/mySubmittedAssignment/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = submittedAssignments.filter(submittedAssignment => submittedAssignment._id !== id);
                    const updated = submittedAssignments.find(submittedAssignment => submittedAssignment._id === id);
                    updated.status = 'confirm'
                    const submitAssignment = [updated, ...remaining];
                    setSubmittedAssignments(submitAssignment);
                }
            })
    }



    return (
        <div>
            <h2 className='text-center text-4xl font-semibold my-5'>All Submitted Assignment </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-2 gap-6 mb-20 mt-10">
                {submittedAssignments.map((submittedAssignment) => (
                    <SubmittedAssignmentCard
                        key={submittedAssignment._id}
                        submittedAssignment={submittedAssignment}
                        handleSubmittedConfirm={handleSubmittedConfirm}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubmittedAssignment;


