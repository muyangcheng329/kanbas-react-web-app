
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import { setAssignment } from "./assignmentsReducer";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addAssignment,updateAssignment} from './assignmentsReducer';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();

  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };

  const [assignment,setAssignment] = useState({
    name: "New Assignment",
    description: "New Assignment Description",
    point: "100",
    course: courseId,
  });

  const dispatch = useDispatch();

  const handleSave = () => {

    if (assignmentId) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };




  return (
    <div style={{ marginLeft: '60px',marginTop:'40px',width: '800px'}}>

      <h2>Assignment Name</h2>
      <div style={{marginTop:'30px'}}></div>
      <li className="list-group-item">
        <input style={{width: '500px'}} value={assignment.name}
          onChange={(e) => setAssignment({
            ...assignment, name: e.target.value })}
        />
        <div></div>
        <div style={{marginTop:'30px'}}></div>
        <textarea style={{width: '500px'}}  value={assignment.description}
          onChange={(e) => setAssignment({
            ...assignment, description: e.target.value })}
        />
        <div style={{marginTop:'30px'}}></div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h6 style={{ marginRight: '10px' }}>point</h6>
            <input style={{ width: '460px' }} value={assignment.point} onChange={(e) => setAssignment({ ...assignment, point: e.target.value })} />
        </div>

        <div style={{marginTop:'30px'}}></div>


        <div style={{ display: 'flex', alignItems: 'center', width: '500px'}}>
            <h6 style={{ marginRight: '10px', marginBottom: '180px'}}>Assign</h6>
            <div className="container">
                <div className="row border p-3">
                    <div className="col-md-12 mb-3">
                        <h6>Due</h6>
                        <input type="date" value="" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h6>Available from</h6>
                        <input type="date" value="" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                        <h6>Until</h6>
                        <input type="date" value="" className="form-control" />
                    </div>
                </div>
            </div>
        </div>

        <div style={{marginTop:'50px'}}></div>

        <hr style={{width: '500px'}} />
        <div style={{ marginLeft: '360px'}}>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light">
            Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-danger">
            Save
            </button>
        </div>
        <hr style={{width: '500px'}} />
      </li>

    </div>
  );
}


export default AssignmentEditor;