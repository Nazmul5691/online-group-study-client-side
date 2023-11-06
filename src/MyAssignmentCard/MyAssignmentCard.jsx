/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const MyAssignmentCard = ({myAssignment, handleDelete  }) => {

    const { _id, assignmentTitle, assignmentMarks,status } = myAssignment;
    return (
        <tr>
          <th>
              <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
          </th>
          
          <td>
              {assignmentTitle}
          </td>
          <td>{assignmentMarks}</td>
      </tr>
    );
};

export default MyAssignmentCard;