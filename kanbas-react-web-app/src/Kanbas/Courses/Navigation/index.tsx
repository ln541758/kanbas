import "./index.css";
import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
   const { cid } = useParams();
   const { pathname } = useLocation();
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (

    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
         <Link key={`/Kanbas/Courses/${cid}/${link}`} to={`/Kanbas/Courses/${cid}/${link}`}
         className={`list-group-item list-group-item-action border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
             {link}

         </Link>
      ))}
    </div>

  );
}
