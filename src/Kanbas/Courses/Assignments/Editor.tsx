export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={45} rows={9}>
        The assignment is available online
        Submit a link to the landing page of
        your web application running on Netlify. The landing
        page should include the follwing: your full
        name and section links to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" >
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
              <option value="THESIS">THESIS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade" >
              <option selected value="Percentage">Percentage</option>
              <option value="GPA">GPA</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission" >
              <option selected value="Online">Online</option>
              <option value="URL">URL</option>
              <option value="Google Cloud">Google Cloud</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td>
          </td>
          <td>
            <label htmlFor="wd-submission">Online Entry Option</label>
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
            <input type="checkbox" name="Submission Type" id="wd-submission-text" />
            <label htmlFor="wd-submission-text">Text Entry</label><br />
            <input type="checkbox" name="Submission Type" id="wd-submission-website" />
            <label htmlFor="wd-submission-website">Website URL</label><br />
            <input type="checkbox" name="Submission Type" id="wd-submission-media" />
            <label htmlFor="wd-submission-media">Media Recordings</label><br />
            <input type="checkbox" name="Submission Type" id="wd-submission-student" />
            <label htmlFor="wd-submission-student">Student Annotation</label><br />
            <input type="checkbox" name="Submission Type" id="wd-submission-file" />
            <label htmlFor="wd-submission-file">File Uploads</label><br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td>
          </td>
          <td>
            <label htmlFor="wd-due"> Due</label>
            <br />
            <input 
            type="date" 
            id="wd-due" 
            value="2024-05-13"/>
          </td>
        </tr>
        <br />
        <tr>
          <td>
          </td>
          <td>
            <label htmlFor="wd-available-from"> Available from</label>
            <br />
            <input
              type="date"
              id="wd-available-from"
              min="2000-01-15"
              max="2024-05-19"
              value="2024-05-06"
              style={{ width: '80%' }} />
          </td>
          <td>
            <label htmlFor="wd-available-until"> Until</label>
            <br />
            <input
              type="date"
              id="wd-until"
              min="2024-05-20"
              max="2050-01-01"
              value="2024-05-20"
              style={{ width: '110%' }} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" colSpan={3}>
            <hr />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td align="right" valign="top" >
            <button type="button">Cancel</button>
            <button type="button">Save</button>
          </td>
        </tr>
      </table >
    </div >
  );
}
