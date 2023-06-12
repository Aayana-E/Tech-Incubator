import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  

  useEffect(() => {
    const tasksRef = firebase.database().ref('user-tasks');
    tasksRef.on('value', (snapshot) => {
      const tasksData = snapshot.val();
      const tasksArray = Object.entries(tasksData || {}).map(([userId, userTasks]) => ({
        userId: userId,
        name: '',
        tasks: Object.entries(userTasks || {}).map(([taskId, task]) => ({
          id: taskId,
          ...task,
        })),
      }));
      setTasks(tasksArray);
    });

  


    return () => {
      tasksRef.off();
    };
  }, []);

  const handleStatusUpdate = (userId, taskId, status) => {
    firebase.database().ref(`user-tasks/${userId}/${taskId}`).update({
      status: status,
    });
  };

  return (
    <div>
      {tasks.map((user) => (
        <div key={user.userId}>
          <h2>User: {user.userId}</h2>
          <div className="card-deck">
            {user.tasks.map((task) => (
              <center key={task.id}>
                <MDBCard style={{ maxWidth: '15rem' }}>
                  <MDBCardBody>
                    <MDBCardTitle>{task.title}</MDBCardTitle>
                    <MDBCardText>{task.description}</MDBCardText>
                    <MDBCardFooter className="text-muted">{task.company}</MDBCardFooter>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name={`status-${task.id}`}
                          value="not-started"
                          checked={task.status === 'not-started'}
                          onChange={() => handleStatusUpdate(user.userId, task.id, 'not-started')}
                        />
                        Not Started
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name={`status-${task.id}`}
                          value="in-progress"
                          checked={task.status === 'in-progress'}
                          onChange={() => handleStatusUpdate(user.userId, task.id, 'in-progress')}
                        />
                        In Progress
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name={`status-${task.id}`}
                          value="completed"
                          checked={task.status === 'completed'}
                          onChange={() => handleStatusUpdate(user.userId, task.id, 'completed')}
                        />
                        Completed
                      </label>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </center>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
