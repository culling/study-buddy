'use strict';
//const e = React.createElement;

localStorage.setItem(
    "subjects", JSON.stringify(
        [
            new Subject("Structured Methods", "SWEN301"),
            new Subject("Introduction to Artificial Intelligence", "COMP307"),
            new Subject("Applied Statistics 2A", "STAT292")
        ])
);

class ReactContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <p>My React Component</p>
        )
    }

}

ReactDOM.render(
    <ReactContainer />, document.getElementById('react-container')
);