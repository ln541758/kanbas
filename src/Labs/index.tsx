import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1> Yin-Shan Lin   --  Summer 1</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="/Lab1" element={<Lab1 />} />
                <Route path="/Lab2" element={<Lab2 />} />
                <Route path="/Lab3" element={<Lab3 />} />
                <Route path="/Lab4" element={<Lab4 />} />
                <Route path="/Lab5" element={<Lab5 />} />
            </Routes>
            <a href="https://github.com/ln541758/kanbas-react-web-app/tree/a1">Github</a>
        </div>
        </Provider>
    );
}