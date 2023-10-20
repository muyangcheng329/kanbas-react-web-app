import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB Navigate)",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="wd-course-navigation list-group" style={{ width: 220 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {
          
          link === "Discussions" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" />
            </>
          ):

          link === "Announcements" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" / >
            </>
          ):

          link === "Pages" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" />
            </>
          ):

          link === "Files" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" / >
            </>
          ):

          link === "Rubrics" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" />
            </>
          ):

          link === "Outcomes" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" / >
            </>
          ):

          link === "Collaborations" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" />
            </>
          ):

          link === "Syllabus" ? (
            <>
              {link} <AiOutlineEyeInvisible color="black" className="right-align-icon" / >
            </>
          ):
                  
          (
            link
          )}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
