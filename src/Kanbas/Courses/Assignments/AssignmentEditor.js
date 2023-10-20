import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ marginLeft: '60px',marginTop:'40px',width: '1000px'}}>
      
      <div style={{ display: 'flex',marginLeft: '800px'}}>

          <AiFillCheckCircle color='green'/>&nbsp;&nbsp;&nbsp;&nbsp;
          <h6 style={{color:'green'}}>Published</h6>
          <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: '20px'}}><FiMoreVertical/></button>
        
      </div>
      <hr/>

      <h2>Assignment Name</h2>
      <div style={{marginTop:'20px'}}></div>
      <input value={assignment.title}
             className="form-control mb-2" />
      <div style={{marginTop:'30px'}}></div>
      <hr/>
      <div style={{ marginLeft: '850px'}}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
      <hr/>
    </div>
  );
}


export default AssignmentEditor;