
import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(""); // State for the selected difficulty level

  useEffect(() => {
    fetch("https://y-beige-seven.vercel.app/createAssignment")
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  return (
    <div>
      <div className="text-center my-8">
        <h3 className="text-2xl mb-2 font-bold text-[#4a64e4]">All Assignment</h3>
        <h2 className="text-xl font-semibold mb-2">Search Assignment on Difficulty Level</h2>
        {/* Dropdown to select the difficulty level */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="w-40 h-8 border border-gray-300"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 max-w-6xl mx-auto gap-6 mb-20 mt-10">
        {assignments
          .filter((assignment) => {
            // If no difficulty is selected, show all assignments
            if (!selectedDifficulty) return true;
            // Filter assignments based on selected difficulty level
            return assignment.difficultyLevel === selectedDifficulty;
          })
          .map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            ></AssignmentCard>
          ))}
      </div>
    </div>
  );
};

export default Assignment;












// import { useEffect, useState } from "react";
// import AssignmentCard from "../AssignmentCard/AssignmentCard";



// const Assignment = () => {

//     const [assignments, setAssignments] = useState([])

//     useEffect( () =>{
//         fetch('https://y-beige-seven.vercel.app/createAssignment')
//         .then(res => res.json())
//         .then(data => setAssignments(data))
//     },[])

//     return (
//         <div>
//             <div className="text-center my-8">
//                 <h3 className="text-2xl mb-2 font-bold text-[#4a64e4]">All Assignment</h3>
                
//             </div>
//             <div className="grid grid-cols-1  max-w-6xl mx-auto  gap-6 mb-20 mt-10">
//                 {
//                     assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default Assignment;