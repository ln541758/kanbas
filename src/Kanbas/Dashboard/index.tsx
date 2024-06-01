export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/2345/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS2345 Angular
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/2345/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/4321/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS4321 Vue.JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/4321/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3456/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS3456 Rocket Science 101
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/3456/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1101/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1101 Android
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1101/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1102/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1102 Python
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1102/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1103/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1103 Network
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1103/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
