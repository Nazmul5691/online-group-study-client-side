/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SubmittedAssignmentCard = ({ submittedAssignment, handleSubmittedConfirm }) => {
    // Destructure assignment data
    // const submittedAssignment = useLoaderData()
    const { title, marks,assignmentTitle, assignmentMarks, _id , text, status} = submittedAssignment;

    

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title: {assignmentTitle}</h5>
                <p className="card-text">Marks: {assignmentMarks}</p>
                <Link to={`/giveMarks/${_id}`}>
                    <button className="btn btn-primary">
                        Give Mark
                    </button>
                </Link>
                
              {

                  status === 'confirm' ? <button><span className="btn btn-secondary text-white font-bold ">Confirmed</span></button> :
                      <button className="btn btn-secondary btn-xs">Pending</button>

              }
            
            {/* onClick={() => handleSubmittedConfirm(_id)} */}

            </div>
        </div>
    );
};

export default SubmittedAssignmentCard;
