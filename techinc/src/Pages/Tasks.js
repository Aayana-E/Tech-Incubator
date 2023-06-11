import React, { useState, useEffect } from 'react';
import firebaseConfig from '../backend/firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksRef = firebase.database().ref('tasks');
    tasksRef.on('value', (snapshot) => {
      const tasksData = snapshot.val();
      const tasksArray = Object.entries(tasksData || {}).map(([taskId, task]) => ({
        id: taskId,
        ...task,
      }));
      setTasks(tasksArray);
    });

    return () => {
      tasksRef.off();
    };
  }, []);

  return (
    <div className="card-deck">
      {tasks.map((task) => (
         <center>
         <MDBCard style={{ maxWidth: "15rem" }}>
           <MDBCardBody>
             <MDBCardTitle>{task.title}</MDBCardTitle>
             <MDBCardText>
                {task.description}
             </MDBCardText>
             <MDBCardFooter className='text-muted'>{task.company} </MDBCardFooter>
           </MDBCardBody>
         </MDBCard>
       </center>
      ))}
    </div>
  );
}

export default Tasks;
