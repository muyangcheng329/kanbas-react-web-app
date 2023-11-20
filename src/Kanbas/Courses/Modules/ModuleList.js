import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {TbGripVertical} from "react-icons/tb"
import {AiFillCaretRight} from "react-icons/ai"
import {AiFillCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import {AiFillCaretDown} from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import { findModulesForCourse,createModule} from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const moduleBoxMaxWidth = '560px';
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }



  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div style={{marginTop:'20px'}}></div>

        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>


        &nbsp;&nbsp;&nbsp;
        <button onClick={handleUpdateModule} style={{ backgroundColor: 'blue', color: 'white' }}>
          Update
        </button>

        <button onClick={handleAddModule} style={{ backgroundColor: 'green', color: 'white' }}>
           Add
        </button>

        
        <div style={{marginTop:'20px'}}></div>

        <div>
        <textarea value={module.description}
          onChange={(e) => 
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>

        </div>
      </li>

      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} style={{ marginBottom: '50px', maxWidth: moduleBoxMaxWidth }} className="list-group-item list-group-item-action list-group-item-secondary">

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h6>
                  <TbGripVertical/>&nbsp;&nbsp;<AiFillCaretRight/>&nbsp;&nbsp;{module.name}
                </h6>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={()=> handleDeleteModule(module._id)} style={{ backgroundColor: 'red', color: 'white' }}>
                  Delete
                </button>
                <button onClick={() => dispatch(setModule(module))} style={{ backgroundColor: 'blue', color: 'white' }}>
                  Edit
                </button>
              </div>

               <div>
                 <AiFillCheckCircle color='green'/><AiFillCaretDown/>&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlinePlus/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FiMoreVertical/>
               </div>
            </div>

             <p>{module.description}</p>
             
             {
                module.lessons && (
                    <ul className="list-group ">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item ">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }

           </li>
      ))
      }
    </ul>
  );
}

export default ModuleList;
