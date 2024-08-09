import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div className="container w-75 pt-5">
    <h1>cs5610: web development final project: Kanbas Quizzes </h1>
    <h2 className="pt-4">Group Members:</h2>
    <ul className="list-group w-50 pt-2">
      <li className="list-group-item">Hao Pei</li>
      <li className="list-group-item">Yin-Shan Lin</li>
      <li className="list-group-item">Wangfan Qian</li>
      <li className="list-group-item">Zihao Li</li>
    </ul>
    <ul className="nav nav-pills pt-5">

      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/ln541758/web_final" className="nav-link">
          GitHub Repo
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-react-web-app-1spz.onrender.com" className="nav-link">
          Server on Render
        </a>
      </li>
    </ul>
    </div>
  );
}
