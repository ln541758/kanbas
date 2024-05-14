export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/angular.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2345/Home">
                CS2345 Angular
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/2345/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/vue.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/4321/Home">
                CS4321 Vue.JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/4321/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/rocket.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/3456/Home">
                CS3456 Rocket Science 101
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/3456/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/android.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1101/Home">
                CS1101 Android
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1101/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/python.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1102/Home">
                CS1102 Python
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1102/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/network.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1103/Home">
                CS1103 Network
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1103/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );}