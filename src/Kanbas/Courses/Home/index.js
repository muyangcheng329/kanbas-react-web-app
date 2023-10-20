import ModuleList from "../Modules/ModuleList";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import {FaFileImport} from "react-icons/fa"
import {BiExport} from "react-icons/bi"
import {PiStopCircleLight} from "react-icons/pi"
import {BsFillBarChartFill} from "react-icons/bs"
import {MdBarChart} from "react-icons/md"
import {FaBullhorn} from "react-icons/fa"
import {AiOutlineBell} from "react-icons/ai"
import {AiFillPlusCircle} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import {FaCalendarAlt} from "react-icons/fa"

function Home() {
  return (
    <div className="row">
        <div className="col-5" style={{ marginLeft: '60px',marginTop:'40px'}}>

          <button type="button" class="btn btn-outline-secondary wd-home-moveright" style={{ marginRight: '10px' }}>Collapse All</button>
          <button type="button" class="btn btn-outline-secondary " style={{ marginRight: '10px' }}>View Progress</button>
          <button class="btn btn-outline-secondary dropdown-toggle" style={{ marginRight: '10px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <AiOutlineCheckCircle color="green"/> &nbsp;Publish All
          </button>
          <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Comedy</a></li>
                    <li><a class="dropdown-item" href="#">Drama</a></li>
                    <li><a class="dropdown-item" href="#">Fantasy</a></li>
          </ul>
          <button type="button" class="btn btn-danger" style={{ marginRight: '10px' }}><AiOutlinePlus/>&nbsp;Module</button>
          <button type="button" class="btn btn-outline-secondary"><FiMoreVertical/></button>
          <div style={{marginTop:'20px'}}></div>
          <hr style={{ width: '560px' }} />
          <div style={{marginTop:'50px'}}></div>
          <ModuleList />         
        </div>
        
        <div className="col-3">
        <div style={{marginTop:'50px'}}></div>
          <ul class="list-group">
                <li class="list-group-item list-group-item-secondary"> <FaFileImport/>&nbsp;Import Existing Content</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <BiExport/>&nbsp;Import From Commons</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <PiStopCircleLight/>&nbsp;Choose Home Page</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <BsFillBarChartFill/>&nbsp;View Course Stream</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <FaBullhorn/>&nbsp;New Announcement</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <MdBarChart/>&nbsp;New Analytics</li>
                <div style={{marginTop:'10px'}}></div>
                <li class="list-group-item list-group-item-secondary"> <AiOutlineBell/>&nbsp;View Course Notifications</li>
            </ul>

            <div style={{marginTop:'50px'}}></div>
            <h6>To Do</h6>
            <hr/>

            <h6 style={{ color: 'red' }}><AiFillPlusCircle color="red"/>&nbsp;&nbsp;&nbsp;Grade A1 - ENV + HTML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RxCross1 color="black"/></h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 points • Sep 18 at 11:59PM</h6>
            <div style={{marginTop:'20px'}}></div>
            <h6 style={{ color: 'red' }}><AiFillPlusCircle color="red"/>&nbsp;&nbsp;&nbsp;Grade A2 - CSS + BOOTSTRAP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RxCross1 color="black"/></h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 points • Sep 18 at 11:59PM</h6>

            <div style={{marginTop:'50px'}}></div>        
            <h6>Comming Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaCalendarAlt/>&nbsp;&nbsp;View Calendar</h6>
            <hr/>

            <h6 style={{ color: 'red' }}><FaCalendarAlt/>&nbsp;&nbsp;&nbsp;Lecture</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS4550.12631.202410</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 11 at 11:45am</h6>

            <h6 style={{ color: 'red' }}><FaCalendarAlt/>&nbsp;&nbsp;&nbsp;CS 5610 06 SP23 Lecture</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS4550.12631.202410</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 11 at 6pm</h6>

            <h6 style={{ color: 'red' }}><FaCalendarAlt/>&nbsp;&nbsp;&nbsp;CS 5610 Web Development</h6>
            <h6 style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Summer 1 2023 - Lecture</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS4550.12631.202410</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 11 at 7pm</h6>
            <div style={{marginTop:'30px'}}></div> 
            <h6 style={{ color: 'red' }}>12 more in the next week...</h6>
        </div> 
    </div>
  );
}
export default Home;