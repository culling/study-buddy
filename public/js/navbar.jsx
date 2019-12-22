'use strict';
const e = React.createElement;

class NavbarContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="studySession">New Study Session</a>
                        <a className="nav-item nav-link" href="subjects">Subjects</a>
                        <a className="nav-item nav-link" href="marks">Marks</a>
                        <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>)
    }

}

ReactDOM.render(
    <NavbarContainer />, document.getElementById('navbar-container')
);