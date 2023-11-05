
import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";



const Assignment = () => {

    const [assignments, setAssignments] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/createAssignment')
        .then(res => res.json())
        .then(data => setAssignments(data))
    },[])

    return (
        <div>
            <div className="text-center my-8">
                <h3 className="text-2xl mb-2 font-bold text-[#4a64e4]">All Assignment</h3>
                
            </div>
            <div className="grid grid-cols-1  max-w-6xl mx-auto  gap-6 mb-20 mt-10">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>

        </div>
    );
};

export default Assignment;