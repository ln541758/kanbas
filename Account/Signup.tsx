import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as client from "./client";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";

export default function Signup() {
    const dispatch = useDispatch();
    const [user, setUser] = useState<any>({username: "", password: "", firstName: "", lastName: "", role: "STUDENT"});
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const signup = async () => {
        if (!validateForm()) {
            return;
        }
        try {
            const currentUser = await client.signup(user);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    }

    const validateForm = () => {
        if (!user.username || !user.password || !user.lastName || !user.firstName) {
            setError("ALl fields need to be filled before signing up")
            return false
        }
        return true
    }


    return (
        <div className="wd-signup-screen">
            <h1>Sign up</h1>
            {error && <div className="wd-error alert alert-danger">{error}</div>}
            <input value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
                   className="wd-username form-control mb-2" placeholder="username"/>
            <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password"
                   className="wd-password form-control mb-2" placeholder="password"/>
            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})}
                   className="wd-password form-control mb-2" placeholder="firstName"/>
            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})}
                   className="wd-password form-control mb-2" placeholder="lastName"/>
            <select value={user.role} onChange={(e) => setUser({...user, role: e.target.value})}>
                <option value={"STUDENT"}>STUDENT</option>
                <option value={"FACULTY"}>FACULTY</option>
            </select>

            <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2"> Sign up</button>
            <br/>
            <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
        </div>
    );
}
