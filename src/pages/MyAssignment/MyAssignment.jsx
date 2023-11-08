import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyAssignmentCard from "../../MyAssignmentCard/MyAssignmentCard";
import Swal from 'sweetalert2';

const MyAssignment = () => {

    const {user} = useContext(AuthContext)
    const [ myAssignments, setMyAssignment ]  = useState([])
    // const { _id } = myAssignments

    const url = `https://y-beige-seven.vercel.app/mySubmittedAssignment?email=${user?.email}`

    // console.log(myAssignments);


    useEffect( () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyAssignment(data))
    },[url] )


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://y-beige-seven.vercel.app/mySubmittedAssignment/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Assignment deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                          });
                        const remaining = myAssignments.filter(myAssignment => myAssignment._id !== id);
                        setMyAssignment(remaining);
                    }
                })
        }
    }


    


    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-5xl">My Assignment: {myAssignments.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            
                            
                            <th>Assignment Title</th>
                            <th>Marks</th>
                            {/* <th>Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAssignments.map(myAssignment => <MyAssignmentCard
                                key={myAssignment._id}
                                myAssignment={myAssignment}
                                handleDelete={handleDelete}
                                
                            ></MyAssignmentCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAssignment;