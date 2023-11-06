/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SubmittedAssignmentCard = ({ submittedAssignment }) => {
    // Destructure assignment data
    // const submittedAssignment = useLoaderData()
    const { title, marks,assignmentTitle, assignmentMarks, _id , text} = submittedAssignment;

    

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title: {assignmentTitle}</h5>
                <p className="card-text">Marks: {assignmentMarks}</p>
                <button className="btn btn-primary">
                    Give Mark
                </button>
            </div>
        </div>
    );
};

export default SubmittedAssignmentCard;
