/* eslint-disable react/prop-types */
// AssignmentSubmission.jsx

/* eslint-disable no-unused-vars */

import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const AssignmentSubmission = ({ assignmentId, assignmentTitle, assignmentMarks }) => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setPdfFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
  });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const assignmentData = {
      assignmentTitle : assignmentTitle,
      assignmentMarks : assignmentMarks,
      text,
      pdfFile,
      email: user.email,
      assignmentId,
      
    };

    try {
      const response = await fetch("http://localhost:5000/submitAssignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      });

      if (response.ok) {
        console.log("Assignment submitted successfully");
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
      <div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
    <label className="label">
      <span className="label-text text-xl font-semibold">Assignment Title</span>
    </label>
    <div className="input-group">
      <input
        type="text"
        placeholder="Assignment Title"
        value={assignmentTitle}
        name="assignmentTitle"
        className="input input-bordered w-full"
        readOnly
      />
    </div>
  </div>

  <div className="form-control md:w-1/2 ml-4">
    <label className="label">
      <span className="label-text text-xl font-semibold">Marks</span>
    </label>
    <div className="input-group">
      <input
        type="text"
        placeholder="Marks"
        value={assignmentMarks}
        name="assignmentMarks"
        className="input input-bordered w-full"
        readOnly
      />
    </div>
  </div>
</div>
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

        <Form.Group controlId="pdfFile">
          <Form.Label className="font-bold">PDF File Submission</Form.Label>
          <div
            {...getRootProps()}
            className="w-[300px] h-32 border-dashed border-2 border-gray-300 p-4 flex flex-col justify-center items-center text-gray-600"
          >
            <input {...getInputProps()} />
            <p>
              {pdfFile
                ? `Selected File: ${pdfFile.name}`
                : "Drag 'n' drop a PDF file here, or click to select one"}
            </p>
          </div>

          

        </Form.Group>

        <Button type="submit" variant="primary" className="mt-4 mb-10">
          Submit Assignment
        </Button>
      </Form>
    </div>
  );
};

export default AssignmentSubmission;































// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useDropzone } from 'react-dropzone';

// const AssignmentSubmission = () => {
//   const [text, setText] = useState('');
//   const [pdfFile, setPdfFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     // Handle the uploaded PDF file here
//     setPdfFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: '.pdf',
//   });

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, including text and PDF file
//   };

//   return (
//     <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
//       {/* <h2 className="text-3xl font-bold text-center">Assignment Submission</h2> */}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="text">
//           <Form.Label className='font-bold'>Text Submission</Form.Label>
//           <Form.Control
//             type="text"
//             value={text}
//             className="w-[300px] h-12 border-2 mb-5 border-blue-600"
//             onChange={handleTextChange}
//             placeholder="Enter your text submission"
//           />
//         </Form.Group>

//         <Form.Group controlId="pdfFile">
//           <Form.Label className='font-bold'>PDF File Submission</Form.Label>
//           <div {...getRootProps()} className="w-[300px] h-32 border-dashed border-2 border-gray-300 p-4 flex flex-col justify-center items-center text-gray-600">
//             <input {...getInputProps()} />
//             <p>
//               {pdfFile ? `Selected File: ${pdfFile.name}` : "Drag 'n' drop a PDF file here, or click to select one"}
//             </p>
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
