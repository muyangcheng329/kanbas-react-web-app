import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {AiOutlineInbox} from "react-icons/ai";
import {AiOutlineHistory} from "react-icons/ai";
import {MdOutlineComputer} from "react-icons/md";
import {MdOutput} from "react-icons/md";
import {BiHelpCircle} from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Signin","Signup","Users","Account2","Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];


  
  const linkToIconMap = {
    Account: <FaUserCircle className="wd-icon" color="gray"/>,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <MdOutlineComputer className="wd-icon" />,
    Commons: <MdOutput className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
    Users:<BiUserCircle className="wd-icon" />,
    Signin: <BiUserCircle className="wd-icon" />,
    Account2: <FaUserCircle className="wd-icon"/>,
    Signup:<BiUserCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      <img src="/images/NEU.jpg" alt="NEU" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item  ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;