
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const AssignmentSubmission = () => {
  const [text, setText] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Handle the uploaded PDF file here
    setPdfFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including text and PDF file
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
      {/* <h2 className="text-3xl font-bold text-center">Assignment Submission</h2> */}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="text">
          <Form.Label className='font-bold'>Text Submission</Form.Label>
          <Form.Control
            type="text"
            value={text}
            className="w-[300px] h-12 border-2 mb-5 border-blue-600"
            onChange={handleTextChange}
            placeholder="Enter your text submission"
          />
        </Form.Group>

        <Form.Group controlId="pdfFile">
          <Form.Label className='font-bold'>PDF File Submission</Form.Label>
          <div {...getRootProps()} className="w-[300px] h-32 border-dashed border-2 border-gray-300 p-4 flex flex-col justify-center items-center text-gray-600">
            <input {...getInputProps()} />
            <p>
              {pdfFile ? `Selected File: ${pdfFile.name}` : "Drag 'n' drop a PDF file here, or click to select one"}
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
