import "./index.css";

export default function RelativePosition() {
    return (
        <div id="wd-css-position-relative">
            <h2>Relative</h2>
            <div className="wd-bg-color-gray">
                <div className="wd-bg-color-yellow 
                    wd-dimension-portrait">
                    <div className="wd-pos-relative-nudge-down-right">
                        Portrait</div></div>
                <div className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape">
                    Landscape</div>
                <div className="wd-bg-color-red wd-dimension-square">
                    Square</div>
            </div>
        </div>
    );
}