import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as client from "./client"
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";
import { User } from "./client";

export default function Signin() {
      const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "STUDENT"
  });
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const signin = async () => {
        try {
            const currentUser = await client.signin(credentials);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="wd-signin-screen">
            <h1>Sign in</h1>
            {error && <div className="wd-error alert alert-danger">{error}</div>}
            <input className="wd-username form-control mb-2"
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                   value={credentials.username} placeholder="username"/>
            <input className="wd-password form-control mb-2"
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                   value={credentials.password} placeholder="password" type="password"/>
            <button className="wd-signin-btn btn btn-primary w-100" onClick={signin}> Sign in</button>
            <br/>
            <Link className="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );
}

