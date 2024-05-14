import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from "./TOC";

export default function Labs() {
    return (
        <div>
            <h1> Yin-Shan Lin   --  Summer 1</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="/Lab1" element={<Lab1 />} />
                <Route path="/Lab2" element={<Lab2 />} />
                <Route path="/Lab3" element={<Lab3 />} />
            </Routes>
            <a href="https://github.com/ln541758/kanbas-react-web-app/tree/a1">Github</a>
        </div>
    );
}