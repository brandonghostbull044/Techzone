import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../Context';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Settings(props) {
  const { currentUser, setCurrentUser, logout } = useContext(GlobalContext);
  const [newUser, setNewUser] = useState({"_id": currentUser._id});
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState(''); 
  const settingOptions = ['First Name', 'Last Name', 'Email', 'Password'];
  const navigate = useNavigate();

  const handleEditClick = (index, title) => {
    setEditableIndex(index);
    setEditedTitle(title);
  };

  const handleConfirmClick = (index) => {
    setEditableIndex(null);

    const input_id = settingOptions[index];
    const newContent = document.getElementById(input_id).value;
    props.settings[index].content = newContent; 

    setEditedTitle('');
    let data = newUser;
    let newCurrentUser = currentUser; 
    data[input_id.toLocaleLowerCase().replace(' ', '_')] = document.getElementById(input_id).value;
    for (const key in data) {
      newCurrentUser[key] = data[key];
    }

    const url = 'http://localhost:8000/users';
    axios.put(url, data)
     .then((response) => {
        console.log(response);
      })  
      .catch((error) => {
        console.log(error);
      });
    setCurrentUser(newCurrentUser);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");
  
    if (confirmDelete) {
      const url = 'http://localhost:8000/users/' + currentUser._id;
      axios.delete(url)
        .then((response) => {
          console.log(response);
          logout();
          navigate('/');  
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Eliminación cancelada.");
    }
  };
  

  return (
    <ul>
      {props.settings.map((setting, index) => (
        <li key={index} className="flex items-center gap-2">
          <span>{setting.title}</span>
          {editableIndex === index ? (
            <input 
              type="text"
              className="border border-slate-300 rounded-full p-2 w-auto"
              value={editedTitle}
              id={setting.title}
              onChange={(e) => setEditedTitle(e.target.value)} 
            />
          ) : (
            <span className='border px-2'>{setting.content}</span>
          )}
          <button
            className="bg-teal-400 text-white p-2 rounded hover:bg-teal-600 transition-colors"
            onClick={() =>
              editableIndex === index
                ? handleConfirmClick(index)
                : handleEditClick(index, setting.content)
            }
          >
            {editableIndex === index ? 'Confirm' : 'Edit'}
          </button>
        </li>
      ))}

      <p className='text-red-900 cursor-pointer mt-10 w-fit' onDoubleClick={() => handleDeleteClick()}>Delete Account</p>
    </ul>
  );
}

export { Settings };
