'use strict';
const e = React.createElement;

class ReactContainer extends React.Component{
    constructor(props) {
        super();
    }
    
    render(){
        return (
            <p>My React Component</p>
        )
    }

}

ReactDOM.render (
    <ReactContainer />, document.getElementById('react-container')
);