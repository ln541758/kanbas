

 export default function BootstrapGridSystem() {
    return (
        <div>
            <h2>Bootstrap</h2>
            <div id="wd-bs-grid-system">
                <h2>Grid system</h2>
                <div className="row">
                    <div className="col bg-danger text-white">
                        <h3>Left half</h3>
                    </div>
                    <div className="col bg-primary text-white">
                        <h3>Right half</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 bg-warning">
                        <h3>One thirds</h3>
                    </div>
                    <div className="col-8 bg-success text-white">
                        <h3>Two thirds</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 bg-dark text-white">
                        <h3>Sidebar</h3>
                    </div>
                    <div className="col-8 bg-secondary text-white">
                        <h3>Main content</h3>
                    </div>
                    <div className="col-2 bg-info">
                        <h3>Sidebar</h3>
                    </div>
                </div>
            </div>
        </div>
            );
}