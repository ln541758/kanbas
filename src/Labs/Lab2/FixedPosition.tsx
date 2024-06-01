import "./index.css";

export default function FixedPosition() {
    return (
        <div id="wd-css-position-fixed">
            <h2>Fixed position</h2>
            Checkout the blue square that says "Fixed position" stuck all the way on the right and half way down the page. It doesn't scroll with the rest of the page. Its position is "Fixed".
            <div className="wd-pos-fixed 
    wd-dimension-square wd-bg-color-blue 
    wd-fg-color-white">
                Fixed position
            </div>
        </div>
    );
}