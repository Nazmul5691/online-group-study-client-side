/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import DatePicker from 'react-datepicker'; // Corrected import statement
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [dueDate, setDueDate] = useState(null);

  const { _id, title, marks, description, thumbnail, difficultyLevel, photo } = assignment;

  const handleUpdateAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const difficultyLevel = form.difficultyLevel.value;
    const photo = form.photo.value;


    const updatedAssignment = { _id, title, marks, description, thumbnail, difficultyLevel, photo }

    // Send data to the server
    fetch(`https://y-beige-seven.vercel.app/createAssignment/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAssignment), // Use the assignment object
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-300 p-24">
        <h2 className="text-3xl font-extrabold text-center mb-5">Update Assignment of : {title}</h2>
        <form onSubmit={handleUpdateAssignment}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Assignment Title" defaultValue={title} name="title" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Marks</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Marks" defaultValue={marks} name="marks" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Description"  defaultValue={description} name="description" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Thumbnail url"  defaultValue={thumbnail} name="thumbnail" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Photo url"  defaultValue={photo} name="photo" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control ml-4">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <label className="input-group">
                <DatePicker
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}
                  defaultValue={dueDate}
                  placeholderText="Due Date"
                  name="dueDate"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mb-16">
              <label className="label">
                <span className="label-text">Difficulty Level</span>
              </label>
              <label className="select">
                <select name="difficultyLevel"  defaultValue={difficultyLevel} className="select w-full">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Assignment"
            className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
