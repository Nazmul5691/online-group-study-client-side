

// 2nd old code for view pdf link in new tab

/* eslint-disable react/jsx-no-target-blank */
import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const giveMarksData = useLoaderData();

  const { _id, assignmentTitle, text, assignmentMarks, pdfLink } = giveMarksData;

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
      const response = await fetch("http://localhost:5000/saveMarksAndFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // console.log("Marks and feedback saved successfully.");
        Swal.fire({
          title: "Success!",
          text: "Giving marks and feedback submitted successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
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

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="md:w-1/2 md:mx-auto space-y-4">
          <div>
            <h3 className="text-xl font-bold">Assignment Marks: {assignmentMarks}</h3>
            <p className="my-5">
              <span className="text-xl font-bold">Assignment note:</span> {text}
            </p>
              <a
                href={pdfLink}
                target="_blank" // Add this line to open the link in a new tab
                className="text-blue-600 underline cursor-pointer"
              >
              View PDF File on Google Drive
            </a>
            <label htmlFor="marks" className="block font-bold mt-5">
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

 
 
 
 
 
 
 
 
 
 
 
 // const openPdfInNewTab = () => {
  //   if (pdfLink) {
  //     window.open(pdfLink, "_blank");
  //   } else {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "PDF file link is not available",
  //       icon: "error",
  //       confirmButtonText: "Ok",
  //     });
  //   }
  // };
 
 
 //1st old code

 
 /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


// const GiveMarks = () => {
//   const giveMarksData = useLoaderData();

//   const { _id, assignmentTitle, text, assignmentMarks , pdfFile} = giveMarksData;
//   const googleDriveUrl = pdfFile;

//   const [marks, setMarks] = useState("");
//   const [feedback, setFeedback] = useState("");

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare data to send to the server
//     const data = {
//       assignmentId: _id,
//       marks,
//       feedback,
//     };

//     try {
//       const response = await fetch("http://localhost:5000/saveMarksAndFeedback", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
        
//         // console.log("Marks and feedback saved successfully.");
//         Swal.fire({
//           title: "Success!",
//           text: "Giving marks and feedback Submitted successfully",
//           icon: "success",
//           confirmButtonText: "Cool",
//         });
//       } else {
//         // Handle errors, e.g., show an error message
//         console.error("Error saving marks and feedback.");
//       }
//     } catch (error) {
//       // Handle network or unexpected errors
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 my-10">
//       <h2 className="text-2xl font-extrabold text-center">
//       Give Marks On: {assignmentTitle}
//       </h2>
      
//       {/* <p className="">Assignment note: {text}</p> */}
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="md:w-1/2 md:mx-auto space-y-4">
//           <div>
//           <h3 className="text-xl font-bold">Assignment Marks : {assignmentMarks}</h3>
//           <p className=" my-5"><span className="text-xl font-bold">Assignment note:</span> {text}</p>
//           <a
//           href={googleDriveUrl} // You should set the appropriate URL for the Google Drive link
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 underline"
//         >
//           View PDF File on Google Drive
//         </a>
//             <label htmlFor="marks" className="block font-bold mt-5">
//              Give Marks
//             </label>
//             <input
//               type="number"
//               id="marks"
//               value={marks}
//               onChange={handleMarksChange}
//               placeholder="Enter marks"
//               className="w-full input input-bordered"
//             />
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block font-bold">
//               Feedback
//             </label>
//             <textarea
//               rows="3"
//               id="feedback"
//               value={feedback}
//               onChange={handleFeedbackChange}
//               placeholder="Enter feedback"
//               className="w-full input input-bordered"
//             />
//           </div>
//           <button type="submit" className="w-full btn btn-primary">
//             Submit Marks and Feedback
//           </button>
          
        
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GiveMarks;










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

