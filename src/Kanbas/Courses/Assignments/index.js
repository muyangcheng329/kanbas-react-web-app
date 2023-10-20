import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import { useState } from "react";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {TbGripVertical} from "react-icons/tb"
import {AiFillCaretDown} from "react-icons/ai"
import {TfiWrite} from "react-icons/tfi"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const [searchText, setSearchText] = useState(""); 

  const filteredAssignments = courseAssignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ marginLeft: '60px',marginTop:'40px'}}>
      <div className="input-group mb-3" style={{ width: '1000px' }}>
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Search for Assignments"
          id="text-fields-email"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type="button" class="btn btn-outline-secondary wd-assignments-right" style={{marginLeft:'500px'}}><AiOutlinePlus/>&nbsp;Group</button> &nbsp;
        <button type="button" class="btn btn-danger" ><AiOutlinePlus/>&nbsp;Assignment</button> &nbsp;
        <button type="button" class="btn btn-outline-secondary"><FiMoreVertical/></button>
      </div>
      <div style={{marginTop:'50px'}}></div>
      <hr style={{ width: '1000px' }}/ >
      <div style={{marginTop:'50px'}}></div>

      <li class="btn btn-outline-secondary" style={{ width: '1000px', textAlign: 'left', backgroundColor: 'gainsboro' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            <TbGripVertical/>&nbsp;<AiFillCaretDown/>&nbsp;Assignments
          </span>
          <span>
            <button type="button" class="btn btn-outline-secondary">40% of Total</button>&nbsp;&nbsp;
            <AiOutlinePlus/>&nbsp;&nbsp;<FiMoreVertical/>
          </span>
        </div>
      </li>


      <div className="list-group" style={{ width: '1000px' }}>
        {courseAssignments.map((assignment) => (
          <
            Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <TbGripVertical/>&nbsp;&nbsp;&nbsp;<TfiWrite color="green"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{assignment.title}
            <div style={{marginTop:'10px'}}></div>
            <h6>
              <span style={{ color: 'red',marginLeft:'75px' }}>Mulitple Modules &nbsp;&nbsp;</span>
              <span> | &nbsp;&nbsp;&nbsp;Due Sep 18 at 11:59pm &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;100 pts</span>
              <AiOutlineCheckCircle style={{ marginLeft: '400px'}} color="green"/>
              <FiMoreVertical style={{ marginLeft: '30px'}}/>
            </h6>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
