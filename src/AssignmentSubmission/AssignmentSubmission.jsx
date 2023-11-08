/* eslint-disable react/prop-types */
// AssignmentSubmission.jsx

/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
// AssignmentSubmission.jsx

/* eslint-disable no-unused-vars */

import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const AssignmentSubmission = ({ assignmentId, assignmentTitle, assignmentMarks }) => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [pdfLink, setPdfLink] = useState(""); // State variable to store the PDF link

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePdfLinkChange = (e) => {
    setPdfLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const assignmentData = {
      assignmentTitle,
      assignmentMarks,
      text,
      pdfLink, // Use pdfLink to store the PDF link
      email: user.email,
      assignmentId,
    };

    try {
      const response = await fetch("https://y-2gnpgecb1-nazmuls-projects-da750e87.vercel.app/submittedAssignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      });

      if (response.ok) {
        // console.log("Assignment submitted successfully");
        Swal.fire({
          title: "Success!",
          text: "Assignment Submitted successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        console.error("Error submitting assignment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="text">
          <Form.Label className="font-bold">Text Submission</Form.Label>
          <Form.Control
            type="text"
            value={text}
            className="w-[300px] h-12 border-2 mb-5 border-blue-600"
            onChange={handleTextChange}
            placeholder="Enter your text submission"
          />
        </Form.Group>

        <Form.Group controlId="pdfLink">
          <Form.Label className="font-bold">PDF Link Submission</Form.Label>
          <Form.Control
            type="text"
            value={pdfLink}
            className="w-[300px] h-12 border-2 mb-5 border-blue-600"
            onChange={handlePdfLinkChange}
            placeholder="Enter the PDF link here"
          />
        </Form.Group>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Assignment Title"
                defaultValue={assignmentTitle}
                name="assignmentTitle"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Marks"
                defaultValue={assignmentMarks}
                name="assignmentMarks"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>

        <Button type="submit" variant="primary" className="mt-4 mb-10">
          Submit Assignment
        </Button>
      </Form>
    </div>
  );
};

export default AssignmentSubmission;





















//old code
// import  { useState, useContext } from "react";
// import { Form, Button } from "react-bootstrap";
// import { useDropzone } from "react-dropzone";
// import { AuthContext } from "../Providers/AuthProviders";
// import Swal from "sweetalert2";

// const AssignmentSubmission = ({ assignmentId, assignmentTitle, assignmentMarks }) => {
//   const { user } = useContext(AuthContext);
//   const [text, setText] = useState("");
//   const [pdfFile, setPdfFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     setPdfFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: ".pdf",
//   });

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       return;
//     }

//     const assignmentData = {
//       assignmentTitle,
//       assignmentMarks,
//       text,
//       pdfFile,
//       email: user.email,
//       assignmentId,
//     };

//     try {
//       const response = await fetch("https://y-2gnpgecb1-nazmuls-projects-da750e87.vercel.app/submittedAssignment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(assignmentData),
//       });

//       if (response.ok) {
//         // console.log("Assignment submitted successfully");
//         Swal.fire({
//           title: "Success!",
//           text: "Assignment Submitted successfully",
//           icon: "success",
//           confirmButtonText: "Cool",
//         });
//       } else {
//         console.error("Error submitting assignment");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="text">
//           <Form.Label className="font-bold">Text Submission</Form.Label>
//           <Form.Control
//             type="text"
//             value={text}
//             className="w-[300px] h-12 border-2 mb-5 border-blue-600"
//             onChange={handleTextChange}
//             placeholder="Enter your text submission"
//           />
//         </Form.Group>

//         <Form.Group controlId="pdfFile">
//           <Form.Label className="font-bold">PDF File Submission</Form.Label>
//           <div
//             {...getRootProps()}
//             className="w-[300px] h-32 border-dashed border-2 border-gray-300 p-4 flex flex-col justify-center items-center text-gray-600"
//           >
//             <input {...getInputProps()} />
//             <p>
//               {pdfFile
//                 ? `Selected File: ${pdfFile.name}`
//                 : "Drag 'n' drop a PDF file here, or click to select one"}
//             </p>
//           </div>

//           <div className="md:flex mb-8">
//             <div className="form-control md:w-1/2">
//               <label className="label">
//                 <span className="label-text">Assignment Title</span>
//               </label>
//               <label className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Assignment Title"
//                   defaultValue={assignmentTitle}
//                   name="assignmentTitle"
//                   className="input input-bordered w-full"
//                   readOnly
//                 />
//               </label>
//             </div>

//             <div className="form-control md:w-1/2 ml-4">
//               <label className="label">
//                 <span className="label-text">Marks</span>
//               </label>
//               <label className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Marks"
//                   defaultValue={assignmentMarks}
//                   name="assignmentMarks"
//                   className="input input-bordered w-full"
//                   readOnly
//                 />
//               </label>
//             </div>
//           </div>
//         </Form.Group>

//         <Button type="submit" variant="primary" className="mt-4 mb-10">
//           Submit Assignment
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AssignmentSubmission;
