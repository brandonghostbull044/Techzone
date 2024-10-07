import { useContext, useRef, useState } from "react"; // Importar useRef
import { GlobalContext } from "../../Context"; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserFormulary (props) {
  const { setSinged, setCurrentUser, login } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [active, setActive] = useState('Sing In');

  // Crear referencias para los campos de entrada
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const first_nameRef = useRef(null);
  const last_nameRef = useRef(null);

  const singInUp = () => {
      const url = 'http://localhost:8000/users';

      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      const first_nameValue = first_nameRef.current.value;
      const last_nameValue = last_nameRef.current.value;
      
      switch (active) {
          case "Sing In": {
              axios.get(url, {
                  params: {
                      email: emailValue,
                      password: passwordValue
                  }
              })
              .then(response => {
                  if (response.data != false) {
                      let user = response.data;
                      user._id = user._id.$oid;
                      login(user);
                      navigate(props.route);
                  } else {
                      alert("Invalid email or password. Try again.");
                  }
              })
              .catch(error => {
                  console.error('Error:', error);
              });
              break;
          }
          case "Sing Up": {
              const newUser = {
                  email: emailValue,
                  password: passwordValue,
                  first_name: first_nameValue,
                  last_name: last_nameValue
              };
              axios.post(url, newUser, {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              .then(response => {
                  let user = response.data;
                  console.log(user);
                  user._id = user._id.$oid;
                  login(user);
                  navigate(props.route);
              })
              .catch(error => {
                  console.error('Error:', error);
                  alert("Error registering user.");
              });
              break;
          }
          default:
              break;
      }
  }

  return (
    <>
      <div className="flex flex-row">
          <p className={`font-medium text-2xl mb-10 w-1/2 cursor-pointer py-1 px-6 hover:scale-[1.01] whitespace-nowrap text-center rounded-l-full ${(active === 'Sing In') && 'bg-slate-600 bg-opacity-5'}`} onClick={() => {setActive('Sing In')}}>Sing In</p>
          <p className={`font-medium text-2xl mb-10 w-1/2 cursor-pointer py-1 px-6 hover:scale-[1.01] whitespace-nowrap text-center rounded-r-full ${(active === 'Sing Up') && 'bg-slate-600 bg-opacity-5'}`} onClick={() => {setActive('Sing Up')}}>Sing Up</p>
      </div>

      <div className='flex flex-col h-auto gap-6 justify-between'>
          <input 
            id="first_nameField" 
            type="text" 
            ref={first_nameRef}
            className={`border border-slate-300 rounded-full p-2 ${active != 'Sing Up' && 'hidden'}`}
            placeholder="First Name"
          />
          <input 
            id="last_nameField" 
            type="text" 
            ref={last_nameRef}
            className={`border border-slate-300 rounded-full p-2 ${active != 'Sing Up' && 'hidden'}`}
            placeholder="Last Name"
          />
          <input 
            id="emailField" 
            type='text' 
            ref={emailRef}
            className='border border-slate-300 rounded-full p-2' 
            placeholder="Email"
          />
          <input 
            id="passwordField" 
            type='password' 
            ref={passwordRef}
            className='border border-slate-300 rounded-full p-2' 
            placeholder="Password"
          />

          <div 
            className="flex justify-center p-2 hover:scale-[1.01] hover:bg-teal-500 bg-teal-400 rounded-full cursor-pointer text-white font-bold text-xl" 
            onClick={() => {singInUp()}}
          >
            {active}
          </div>
      </div>
    </>
  );
}

export default UserFormulary;
