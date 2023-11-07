/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { Button } from "@windicss/react/ui";

const GiveMarks = () => {
  const giveMarksData = useLoaderData();

  const { _id, assignmentTitle, text, assignmentMarks , pdfFile} = giveMarksData;

  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the server
    const data = {
      assignmentId: _id,
      marks,
      feedback,
    };

    try {
      // Send the data to your server's API endpoint to save marks and feedback
      const response = await fetch("http://localhost:5000/saveMarksAndFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Marks and feedback saved successfully.");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error saving marks and feedback.");
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 my-10">
      <h2 className="text-2xl font-extrabold text-center">
      Give Marks On: {assignmentTitle}
      </h2>
      
      {/* <p className="">Assignment note: {text}</p> */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="md:w-1/2 md:mx-auto space-y-4">
          <div>
          <h3 className="text-xl font-bold">Assignment Marks : {assignmentMarks}</h3>
          <p className=" my-5"><span className="text-xl font-bold">Assignment note:</span> {text}</p>
            <label htmlFor="marks" className="block font-bold">
             Give Marks
            </label>
            <input
              type="number"
              id="marks"
              value={marks}
              onChange={handleMarksChange}
              placeholder="Enter marks"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block font-bold">
              Feedback
            </label>
            <textarea
              rows="3"
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter feedback"
              className="w-full input input-bordered"
            />
          </div>
          <button type="submit" className="w-full btn btn-primary">
            Submit Marks and Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default GiveMarks;










// /* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";


// const GiveMarks = () => {
//     const giveMarks = useLoaderData();

//     const { _id, assignmentTitle, pdfFile, text,  assignmentMarks} = giveMarks;
//     return (
//         <div>
//             <h2>give marks pages{assignmentTitle}</h2>
//             {/* <h2>{pdfFile}</h2> */}
//             <h2>{text}</h2>

//         </div>
//     );
// };

// export default GiveMarks;

