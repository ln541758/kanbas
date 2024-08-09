import * as client from "./client";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css"
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };


    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="wd-profile-screen">
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="wd-username" value={profile.username}
                               onChange={(e) => setProfile({...profile, username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="wd-password" value={profile.password}
                               onChange={(e) => setProfile({...profile, password: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="wd-firstname" value={profile.firstName}
                               onChange={(e) => setProfile({...profile, firstName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="wd-lastname" value={profile.lastName}
                               onChange={(e) => setProfile({...profile, lastName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input className="wd-dob" value={profile.dob}
                               onChange={(e) => setProfile({...profile, dob: e.target.value})} type="date"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="wd-email" value={profile.email}
                               onChange={(e) => setProfile({...profile, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="wd-role" value={profile.role}
                                onChange={(e) => setProfile({...profile, role: e.target.value})}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}

