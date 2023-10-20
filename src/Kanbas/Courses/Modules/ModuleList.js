import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {TbGripVertical} from "react-icons/tb"
import {AiFillCaretRight} from "react-icons/ai"
import {AiFillCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import {AiFillCaretDown} from "react-icons/ai"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const moduleBoxMaxWidth = '560px';

  return (
    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} style={{ marginBottom: '50px', maxWidth: moduleBoxMaxWidth }} className="list-group-item list-group-item-action list-group-item-secondary">
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <h6>
                 <TbGripVertical/>&nbsp;&nbsp;<AiFillCaretRight/>&nbsp;&nbsp;{module.name}
               </h6>
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
