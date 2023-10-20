import ModuleList from "./ModuleList";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"


function Modules() {
  return (
    <div style={{ marginLeft: '60px',marginTop:'40px'}}>
      
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
  );
}
export default Modules;