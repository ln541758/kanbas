import "./index.css";

export default function AbsolutePosition() {
    return (
        <div id="wd-css-position-absolute">
            <h2>Absolute position</h2>
            <div className="wd-pos-relative">
                <div className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait">
                    Portrait</div>
                <div className="wd-pos-absolute-50-50 
         wd-bg-color-blue wd-fg-color-white 
         wd-dimension-landscape">
                    Landscape</div>
                <div className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square">
                    Square</div>
            </div><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}