import {  useState, createContext } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "firebase/auth";

export const MediumContext = createContext();

const MediumContextProvider = ( props ) => {
  const [user, setUser] = useState(null)
  const [st , setst] = useState(null)
  const [des , setdes] = useState('')
  const [ret , setret] = useState('')


  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user 

        setUser(user)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <MediumContext.Provider
      value={{ user ,handleUserAuth ,st ,des ,setdes ,setst , ret, setret }}>
      {props.children}
    </MediumContext.Provider>
  );
}
export default MediumContextProvider;