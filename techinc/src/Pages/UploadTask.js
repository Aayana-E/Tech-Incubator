import React, { useState } from 'react';
import '../Style/Profile.css';
import 'firebase/compat/database';
import firebaseConfig from '../backend/firebaseConfig';
import { getDatabase, ref, push, set } from 'firebase/database';
import firebase from 'firebase/compat/app';


function UploadTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    const taskData = {
      title: title,
      description: description,
      company: "Google"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    const newTaskRef = push(ref(database, 'tasks'));
    set(newTaskRef, taskData)
      .then(() => {
        console.log('Task uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading task:', error);
      });
  };

  return (
    <div className='upload-task-container'>
      <div>
        <label>Title:</label>
        <input type='text' value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type='text' value={description} onChange={handleDescriptionChange} />
      </div>
      <button onClick={handleUpload}>Upload Task</button>
    </div>
  );
}

export default UploadTask;
