/* eslint-disable no-unused-vars */

import React from "react";

import { useLoaderData } from "react-router-dom";
import AssignmentSubmission from "../../AssignmentSubmission/AssignmentSubmission ";

const AssignmentSubmissionPage = () => {
  const assignment = useLoaderData();

  const { _id, title, marks, description, thumbnail, dueDate, difficultyLevel, photo } = assignment;

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-center my-5">Assignment Submission on: {title}</h2>
      <AssignmentSubmission></AssignmentSubmission>
    </div>
  );
};

export default AssignmentSubmissionPage;