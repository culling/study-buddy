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
                <div className="subjects-container">
                    {subjects.map((subject, i) => {
                        return (
                            <SubjectContainer key={i} subject={subject}></SubjectContainer>
                        )
                    })}

                </div>
                <br />
            </div >
        )
    }
}

class SubjectContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="h4">{this.props.subject.name}</div>
                {this.props.subject.getAssessments().map((assessment, i) => {
                    return (
                        <AssessmentContanier key={i} assessment={assessment}></AssessmentContanier>
                    )
                })}
            </div>
        )
    }
}

class AssessmentContanier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "assessment": props.assessment
        }
    }

    render() {
        return (
            <div className="card col-sm-6">
                <div className="card-title">
                    <br />
                    <span className="col">
                        <b>
                            {this.state.assessment.name}
                        </b>
                    </span>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="row">
                            <span className="col">Mark: {this.state.assessment.getMarks()}</span>
                        </div>
                        <div className="row">
                            <span className="col">Impact on final grade: {this.state.assessment.getFinalGradeWeight()}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


ReactDOM.render(
    <MarksContainer className="row" />, document.getElementById('marks-container')
);
