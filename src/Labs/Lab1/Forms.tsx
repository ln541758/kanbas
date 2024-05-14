export default function Forms() {
    return (
        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username:</label>
                <input
                    id="wd-text-fields-username"
                    placeholder="jdoe" />
                <br />
                <label htmlFor="wd-text-fields-password">Password:</label>
                <input
                    type="password"
                    id="wd-text-fields-password"
                    value="123@#$asd" />
                <br />
                <label htmlFor="wd-text-fields-first-name">First name:</label>
                <input
                    type="text"
                    id="wd-text-fields-first-name"
                    title="John" />
                <br />
                <label htmlFor="wd-text-fields-last-name">Last name:</label>
                <input
                    type="text"
                    id="wd-text-fields-last-name"
                    placeholder="Doe"
                    value="Wonderland"
                    title="The last name" />

                <h5>Text boxes</h5>
                <label>Biography:</label>
                <br />
                <textarea id="wd-textarea" cols={30} rows={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </textarea>

                <h5 id="wd-buttons">Buttons</h5>
                <button
                    id="wd-all-good"
                    onClick={() => alert("Life is Good!")}
                >
                    Hello World!
                </button>

                <h5>File upload</h5>
                <input id="wd-upload" type="file" />

                <h5 id="wd-radio-buttons">Radio buttons</h5>
                <label>Favorite movie genre:</label>
                <br />
                <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                <label htmlFor="wd-radio-comedy">Comedy</label>
                <br />
                <input type="radio" name="radio-genre" id="wd-radio-drama" />
                <label htmlFor="wd-radio-drama">Drama</label>
                <br />
                <input type="radio" name="radio-genre" id="wd-radio-scifi" />
                <label htmlFor="wd-radio-scifi">Science Fiction</label>
                <br />
                <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
                <label htmlFor="wd-radio-fantasy">Fantasy</label>
                <br />
                <label>Favorite colors:</label>
                <br />
                <input type="radio" name="radio-colors" id="wd-radio-yellow" />
                <label htmlFor="wd-radio-yellow">Yellow</label>
                <br />
                <input type="radio" name="radio-colors" id="wd-radio-red" />
                <label htmlFor="wd-radio-red">Red</label>
                <br />
                <input type="radio" name="radio-colors" id="wd-radio-blue" />
                <label htmlFor="wd-radio-blue">Blue</label>
                <br />
                <input type="radio" name="radio-colors" id="wd-radio-green" />
                <label htmlFor="wd-radio-green">Green</label>

                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genre:</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comedy</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
                <br />
                <label>Favorite colors:</label>
                <br />
                <input type="checkbox" name="check-colors" id="wd-chkbox-yellow" />
                <label htmlFor="wd-chkbox-yellow">Yellow</label>
                <br />
                <input type="checkbox" name="check-colors" id="wd-chkbox-red" />
                <label htmlFor="wd-chkbox-red">Red</label>
                <br />
                <input type="checkbox" name="check-colors" id="wd-chkbox-blue" />
                <label htmlFor="wd-chkbox-blue">Blue Fiction</label>
                <br />
                <input type="checkbox" name="check-colors" id="wd-chkbox-green" />
                <label htmlFor="wd-chkbox-green">Green</label>

                <h4 id="wd-dropdowns">Dropdowns</h4>

                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                <select id="wd-select-many-genre" multiple>
                    <option selected value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h4>Other HTML field types</h4>

                <label htmlFor="wd-text-fields-email"> Email: </label>
                <input type="email"
                    placeholder="jdoe@somewhere.com"
                    id="wd-text-fields-email" />
                <br />

                <label htmlFor="wd-text-fields-salary-start"> Starting salary:
                </label>
                <input type="number"
                    id="wd-text-fields-salary-start"
                    placeholder="1000"
                //value="100000" 
                />
                <br />

                <label htmlFor="wd-text-fields-telephone"> Phone Number: </label>
                <input type="tel"
                    id="wd-text-fields-telephone"
                    placeholder="123-234-3456" />
                <br />

                <label htmlFor="wd-text-fields-rating"> Rating: </label>
                <input type="range" id="wd-text-fields-rating"
                    placeholder="Doe"
                    max="5"/>
                <br />

                <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                <input type="date"
                    id="wd-text-fields-dob"
                    min="2000-01-15"
                    max="2000-01-25"
                    value="2000-01-21" />
                <br />
            </form>
        </div>
    );
}
