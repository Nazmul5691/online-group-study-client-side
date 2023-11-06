/* eslint-disable no-unused-vars */
import  { useState } from 'react';
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
    <div className='max-w-6xl mx-auto text-center'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="text">
          <Form.Label>Text Submission</Form.Label>
          <Form.Control
            type="text"
            value={text}
            className='h-20 align-middle w-[300px]'
            onChange={handleTextChange}
            placeholder="Enter your text submission"
          />
        </Form.Group>

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag or drop a PDF file here, or click to select one</p>
        </div>

        <Button type="submit">Submit Assignment</Button>
      </Form>
    </div>
  );
};

export default AssignmentSubmission;
