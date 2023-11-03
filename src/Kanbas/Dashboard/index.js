import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) 
  {
  

  return (
    <div style={{ marginLeft: '50px', marginTop: '10px' }}>
      <h1>Dashboard</h1>
      <hr />
      <div>
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <hr/>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input value={course.name} className="form-control" 
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control" 
            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control" type="date" 
            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control" type="date" 
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


          <button onClick={addNewCourse} style={{ backgroundColor: 'green', color: 'white' }}>
            Add
          </button>
          <button onClick={updateCourse} style={{ backgroundColor: 'blue', color: 'white' }}>
            Update
          </button>
        </div>
      </div>


      <div style={{marginTop:'20px'}}></div>

      <div className="list-group">
      {courses.map((course) => (
      <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item d-flex justify-content-between align-items-center">
      <span>{course.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div>
        <button onClick={(event) => { event.preventDefault(); setCourse(course); }}
        style={{ backgroundColor: 'yellow', color: 'black' }}>
          Edit
        </button>
        &nbsp;&nbsp;
        <button onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}
        style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>
    </Link>
  ))}
</div>
</div>
  );
}

export default Dashboard;
