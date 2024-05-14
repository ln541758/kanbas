import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top" width="30%">
          <Modules />
        </td>
        <td valign="top" width="15%">
          <CourseStatus />
        </td>
      </tr>
    </table>
  );
}

