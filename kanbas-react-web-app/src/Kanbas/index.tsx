import { Navigate, Route, Routes, useNavigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "./Courses/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectdRoutes";
import Session from "./Account/Session";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>({
     name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    fetchCourses();
    navigate("/Kanbas/Dashboard");
  };


  const updateCourse = async () => {
    await client.updateCourse(course);
  };


  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Provider store={store}>
      <Session>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route path="Dashboard" element={
                <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />
                  </ProtectedRoute>
              } />

              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />

            </Routes>
          </div>
        </div>
      </div>
      </Session>
    </Provider>
  );
}
