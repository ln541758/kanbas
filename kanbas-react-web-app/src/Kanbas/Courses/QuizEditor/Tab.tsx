import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

export default function Tab() {
   const { cid, qid } = useParams();
   const { pathname } = useLocation();
   const links = ["Details", "Questions"];


  return (

    <div id="wd-quiz-editor-tag" className="list-group list-group-horizontal fs-5 rounded-0">
      {links.map((link) => (
         <Link key={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editing/${link}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editing/${link}`}
         className={`list-group-item list-group-item-action border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
             {link}

         </Link>
      ))}
    </div>

  );
}