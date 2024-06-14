import { useContext } from "react"
import { GlobalContext } from "../../Context";
import Layout from '../../Components/Layout'
import TextField  from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function SingIn() {
  const { setSinged, users } = useContext(GlobalContext);
  const navigate = useNavigate();
  const email = document.getElementById('emailField');
  const password = document.getElementById('passwordField');
  
  const singIn = (route) => {
    const findedUser = users.some(user => user.email === email.value && user.password === password.value);
    if (findedUser) {
      setSinged(true);
      navigate(route);
    } else {
      alert("Invalid email or password. Try again.");
    }
  }

  return (
    <Layout className='bg-red-500'>
      <p className='font-medium text-2xl mb-10'>Sing In</p>

      <div className='flex flex-col h-44 justify-between'>
          <input id="emailField" type='text' className='border border-slate-300 rounded-full p-2' placeholder="Email"></input>
          <input id="passwordField" type='password' className='border border-slate-300 rounded-full p-2' placeholder="Password"></input>

          <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-teal-500 bg-teal-400  rounded-full cursor-pointer text-white font-bold text-xl" onClick={() => {singIn("/")}}>Sing In</div>
</div>
    </Layout>
  )
}

export default SingIn
