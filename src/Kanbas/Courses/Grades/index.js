import db from "../../Database";
import { Link, useParams } from "react-router-dom";
import {AiFillCaretDown} from "react-icons/ai"
import {BsKeyboard} from "react-icons/bs"
import {AiTwotoneSetting} from "react-icons/ai"
import {FaFileImport} from "react-icons/fa"
import {FaFileExport} from "react-icons/fa"
import { useState } from "react";
import React from "react";
import {BiFilterAlt} from"react-icons/bi"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  const [searchText, setSearchText] = useState(""); 

  const filteredAssignments = assignments.filter((assignment) =>
  assignment.title.toLowerCase().includes(searchText.toLowerCase())
);


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ marginLeft: '60px', width: '1000px'}}>

      <div style={{marginTop:'20px'}}></div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h6 style={{ color: 'red', margin: '0' }}>Gradebook</h6>
        <AiFillCaretDown color="red" style={{ marginLeft: '5px' }} />
        <BsKeyboard color="red" style={{marginLeft:'500px'}}/>
        <button type="button" class="btn btn-outline-secondary wd-home-moveright" style={{ marginRight: '10px',marginLeft:'100px' }}><FaFileImport/>&nbsp;&nbsp;Import</button>
        <button type="button" class="btn btn-outline-secondary " style={{ marginRight: '30px' }}><FaFileExport/>&nbsp;&nbsp;Export</button>
        <button type="button" class="btn btn-outline-secondary "><AiTwotoneSetting/></button>
      </div>

      <div style={{marginTop:'40px'}}></div>

      <div style={{width: '800px', display: 'flex', alignItems: 'center' }}>
        <h4>Student Names</h4>
        <h4 style={{marginLeft:'290px'}}>Assignment Names</h4>
      </div>

      <div style={{width: '800px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Search Students"
          id="text-fields-email"
          value={searchText}
          onChange={handleSearchChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input
          type="text"
          className="form-control custom-input"
          placeholder="Search Assignments"
          id="text-fields-email"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <div style={{marginTop:'20px'}}></div>

      <button type="button" class="btn btn-outline-secondary wd-home-moveright"><BiFilterAlt/>&nbsp;&nbsp;Apply Filters</button>

      <div style={{marginTop:'20px'}}></div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color:'red'}}>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>


      </div></div>);
}
export default Grades;