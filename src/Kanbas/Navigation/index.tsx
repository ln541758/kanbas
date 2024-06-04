import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0 h-100">
      <a
        id="wd-account-link"
        target="_blank"
        rel="noreferrer"
        href="http://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/images/NEU.png" width="75px" alt=""/>
      </a>
      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </a>
      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item text-center border-0
      bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className="list-group-item text-white
      bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </a>
      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className="list-group-item text-white
      bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </a>
      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className="list-group-item text-white
      bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </a>
      <a
        id="wd-labs-link"
        href="#/Labs"
        className="list-group-item text-white
      bg-black text-center border-0"
      > 
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </a>
    </div>
  );
}
