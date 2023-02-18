import {  useState, createContext } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from 'firebase/auth';

export const MediumContext = createContext();

const MediumContextProvider = ( {children} ) => {
  const [user, setUser] = useState(null)
  const [st , setst] = useState(null)
  const [des , setdes] = useState('')
  const [ret , setret] = useState('')


  const handleUserAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth, provider)
      .then(result => {
       
        const user = result.user 

        setUser(user)
      })
      .catch((error )=> {
        console.error = error.message;
        
      })
  }

  return (
    <MediumContext.Provider
      value={{ user ,handleUserAuth ,st ,des ,setdes ,setst , ret, setret }}>
      {children}
    </MediumContext.Provider>
  )
}
export default MediumContextProvider;