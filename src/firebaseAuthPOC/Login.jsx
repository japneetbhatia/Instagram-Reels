import React, {useState} from "react";
import firebase from "./firebase";
const auth = firebase.auth();
function Login() {
  // hooks  
  let [email, setEmail] = useState("");  
  let [password, setPassword] = useState("");  
  const loginFn = async () => {
      // email,password -> firebase
      // suth start
      // enable -> email and password
// user create on firebase side
      // npm i firebase
    //   alert(email + password);
    let res = await auth.signInWithEmailAndPassword(email, password);
  }
  return (
    <div>
        <div>
            Email : 
            <input type="Email" placeholder="Your Email" value = {email} 
            onChange={(e) => {
                //logic
                setEmail(e.target.value)
            }}
            />
        </div>
        <div>
            Password : 
            <input type="password" placeholder="*************" value = {email} 
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
        </div>
        <button onClick={loginFn}>Login</button>
    </div>
  );
}

export default Login;