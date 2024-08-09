import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Signin";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Signup from "./Signup";
export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
  // @ts-ignore
  return (
    <div className="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <div className="flex-fill p-4 pt-0">
          <Routes>
            <Route path="/" element={ <Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
