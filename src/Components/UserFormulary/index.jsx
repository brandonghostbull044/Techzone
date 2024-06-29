import { useContext } from "react"
import { GlobalContext } from "../../Context"; 
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function UserFormulary (props) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { setSinged, users, setCurrentUser, saveInfo } = useContext(GlobalContext);
  const navigate = useNavigate();
  const email = document.getElementById('emailField');
  const password = document.getElementById('passwordField');
  
  const singIn = () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    const findedUser = users.some(user => user.email === emailValue && user.password === passwordValue);
    setSinged(true);
    setCurrentUser({email: email.value, password: password.value});
    switch (props.operation){
      case "SI":
        if (findedUser) {
          navigate(props.route);
        } else {
          alert("Invalid email or password. Try again.");
        }
        break;
      case "SU":
        var newUsers  = [...users];
        newUsers.push({email: emailValue, password: passwordValue});
        saveInfo(newUsers);
        break;
      default:
        break;
    }
      

  }

  return (
    <>
      <p className='font-medium text-2xl mb-10'>{props.tittle}</p>

      <div className='flex flex-col h-44 justify-between'>
          <input id="emailField" type='text' className='border border-slate-300 rounded-full p-2' placeholder="Email"></input>
          <input id="passwordField" type='password' className='border border-slate-300 rounded-full p-2' placeholder="Password"></input>

          <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-teal-500 bg-teal-400  rounded-full cursor-pointer text-white font-bold text-xl" onClick={() => loginWithRedirect()}>{props.buttonTittle}</div>
          {isAuthenticated && <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.picture} alt={user.name} />
            <p>Email: {user.email}</p>
          </div>}
      </div>
    </>
  )
}

export default UserFormulary
