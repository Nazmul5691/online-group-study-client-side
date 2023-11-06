/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import SubmittedAssignmentCard from '../../SubmittedAssignmentCard/SubmittedAssignmentCard';


const SubmittedAssignment = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make a GET request to fetch data from your server
        fetch('http://localhost:5000/submittedAssignment')
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

    return (
        <div>
            <h2>Submitted Assignment Pages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-2 gap-6 mb-20 mt-10">
                {submittedAssignments.map((submittedAssignment) => (
                    <SubmittedAssignmentCard
                        key={submittedAssignment._id}
                        submittedAssignment={submittedAssignment}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubmittedAssignment;


