/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
    const assignment = useLoaderData()

    const { _id, title, marks, description, thumbnail, dueDate, difficultyLevel, photo } = assignment;

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center my-5">Assignment on : {title}</h2>
            </div>

            <div className="card lg:card-side bg-base-100 max-w-6xl mx-auto my-10 shadow-xl">
        <figure>
          <img className="h-40 md:h-auto w-full lg:w-[700px] md:w-48 md:flex-shrink-0" src={photo} alt="" />
        </figure>
  
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg mt-4 w-[380px]">{description}</p>
          <p className="text-base font-semibold">Marks: {marks}</p>
          <p className="text-base font-semibold">Due Date: {dueDate}</p>
          <p className="text-base font-semibold">Difficulty Level: {difficultyLevel}</p>
  
          <div className="mt-4">
            <Link to={`/assignmentSubmissionPage/${_id}`}>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Take Assignment
            </button>
            </Link>

            {/* <Link to={`/updateAssignment/${_id}`}>
            <button className="ml-3 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Update Assignment
            </button>
            </Link> */}
          </div>
        </div>
      </div>
        </div>

    );
};

export default ViewAssignment;