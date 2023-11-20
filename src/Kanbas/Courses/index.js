import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { AiOutlineMenu } from 'react-icons/ai'; 
import {AiOutlineRight} from 'react-icons/ai'; 
import {BiGlassesAlt} from 'react-icons/bi'; 
import { useState, useEffect } from "react";
import axios from "axios";



function Courses() {
  const {courseId} = useParams();
  const URL = "https://kanbas-node-server-app-bjef.onrender.com/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const {pathname} = useLocation();

  const [empty, kanbas, id, screen, name] = pathname.split("/");

  return (
    <div style={{ marginLeft: '50px', marginTop: '10px' }} >
      <h5>
        &nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMenu style={{ color: 'red' }} />
       
        <span style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;{course.number}&nbsp;&nbsp;<AiOutlineRight style={{ color: 'black' }} />&nbsp;&nbsp;</span>{screen}
        <button type="button" class="btn btn-outline-secondary" style={{position: 'absolute', right: '0', top: '0', padding: '10px 20px',}}><BiGlassesAlt />&nbsp;Student View</button>
      </h5>
      <hr style={{ width: '2000px' }}  />
      <h6 style={{ marginLeft: '20px'}}>202410_1 Fall 2023 Semest...</h6>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;