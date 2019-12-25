'use strict';

/**
 * Functions
 */



/**
* Variables
*/


class MarksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "subjects": subjects
        }
    }

    render() {
        return (
            <div className="marks-container">
                <div className="subjects-container row">

                {JSON.stringify(subjects)}
                    
                </div>

                <br />
            </div >
        )
    }
}


ReactDOM.render(
    <MarksContainer />, document.getElementById('marks-container')
);
