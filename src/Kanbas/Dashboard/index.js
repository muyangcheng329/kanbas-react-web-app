import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{ marginLeft: '50px', marginTop: '10px' }}>
      <h1>Dashboard</h1>
      <hr />
      <div style={{ marginLeft: '50px' }}>
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <hr />
      <div class="row row-cols-3 g-4" style={{ paddingRight: '50px' }}>
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div class="card h-10 mb-4" style={{ marginLeft: '50px' }}>
              <img src="/images/dashboard-1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">{course.number}</h6>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                  202310_1 Fall 2023 Semester Full Term
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
