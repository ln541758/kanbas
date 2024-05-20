import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Margins from "./Margins";
import Padding from "./Padding";
import Corners from "./Corners";
import Dimension from "./Dimension"
import RelativePosition from "./RelativePosition";
import Float from "./Float";
import AbsolutePosition from "./AbsolutePosition";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";

import "./index.css";
import BootstrapGridSystem from "./BootstrapGridSystem";
import BootstrapResponsiveGrid from "./BootstrapResponsiveGrid";
import ScreenSizeLabel from "./ScreenSizeLabel";


export default function Lab2() {
    return (
        <div className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>

            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="id-selector-1">
                    Instead of changing the look and feel of all the
                    elements of the same name, e.g., P, we can refer to a specific element by its ID
                </p>
                <p id="id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                    feel
                </p>
            </div>

            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>

            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3<br />
                            meaning the descendant of some ancestor.<br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span><br />
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            <div id="wd-css-colors">
                <h2>Colors</h2>
                <h3 className="wd-fg-color-blue">Foreground color</h3>
                <p className="wd-fg-color-red">
                    The text in this paragraph is red but
                    <span className="wd-fg-color-green">this text is green</span>
                </p>
            </div>


            <BackgroundColors />
            <Borders />
            <Padding />
            <Margins />
            <Corners />
            <Dimension />
            <RelativePosition />
            <AbsolutePosition />
            <Float />
            <GridLayout /> 
            <Flex />
            <ReactIconsSampler />
            <BootstrapGridSystem />
            <BootstrapResponsiveGrid />
            <ScreenSizeLabel />


        </div>
    );
}
