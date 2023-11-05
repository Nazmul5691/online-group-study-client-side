import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const CreateAssignment = () => {
  const [dueDate, setDueDate] = useState(null);

  const handleCreateAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const difficultyLevel = form.difficultyLevel.value;
    const photo = form.photo.value;

    const newProduct = { title, marks, description, thumbnail, dueDate, difficultyLevel, photo };
    console.log(newProduct);

    // Send data to the server (you can adapt this to your server setup)
    fetch('http://localhost:5000/createAssignment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-300 p-24">
        <h2 className="text-3xl font-extrabold text-center mb-5">Create Assignment</h2>
        <form onSubmit={handleCreateAssignment}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Assignment Title" name="title" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Marks</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Marks" name="marks" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2  ml-4">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Thumbnail url" name="thumbnail" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
        <div className="form-control md:w-1/2 ">
                <label className="label">
                <span className="label-text">Photo url</span>
                </label>
                <label className="input-group">
                <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
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
                <select name="difficultyLevel" className="select  w-full">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Create Assignment"
            className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
