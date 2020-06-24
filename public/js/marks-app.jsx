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
            createNewAssessment: false,
            "subjects": subjects,
            "new-assessment-name": "",
            "new-course-code": "",
            "new-grade-impact": ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveNewAssessment = this.saveNewAssessment.bind(this);
    }

    saveNewAssessment() {
        console.log("Save New Assessment Clicked");
        let newAssessmentName = this.state["new-assessment-name"];
        let newCourseCode = this.state["new-course-code"];
        let finalGradeWeight = this.state["new-grade-impact"];

        let subjects = this.state.subjects;
        let subject = subjects.find(({ courseCode }) =>
            String(courseCode).toLowerCase() === String(newCourseCode).toLowerCase());

        let newAssessment = new Assessment(
            newAssessmentName,
            finalGradeWeight,
            0,
            0
        );

        subject.addAssessment(newAssessment);
        saveSubjectsToLocal(subjects);
    }


    handleInputChange(event) {
        const target = event.target;
        console.log(target.name + " " + target.value);

        const name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });
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
                {this.state.createNewAssessment &&
                    <div className="card col-sm-6" >
                        <br />
                        <div className="card-title row">
                            <span className="col" ><b>Assessment Name: </b></span>
                            <span className="col-sm-1"></span>
                            <input name="new-assessment-name" className="col" type="text" onChange={this.handleInputChange} value={this.state["new-assessment-name"]} ></input>
                            <span className="col-sm-1"></span>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <div className="courseCode row">
                                    <span className="col">Course Code: </span>

                                    {/* <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Regular link</a>
                                        <a class="dropdown-item active" href="#">Active link</a>
                                        <a class="dropdown-item" href="#">Another link</a>
                                    </div> */}

                                    <input className="col" type="text" name={"new-course-code"} value={this.state["new-course-code"]} onChange={this.handleInputChange} />
                                </div>
                                <div className="gradeImpact row">
                                    <span className="col">Final grade percentage: </span>
                                    <input className="col" type="number" name={"new-grade-impact"} value={this.state["new-grade-impact"]} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <span className="col"></span>
                                <button className="btn btn-primary col" onClick={this.saveNewAssessment}>
                                    Save
                                    </button>
                            </div>
                        </div>
                    </div>
                }


                <br />

                <div className="row">
                    <span className="col"></span>
                    <button className="col btn btn-primary" onClick={(e) => { this.newAssessmentClick(e) }}>New Assessment</button>
                </div>
            </div >
        )
    }

    newAssessmentClick() {
        console.log("New Assessment Clicked");
        this.setState({
            createNewAssessment: true
        })
    }

}

class SubjectContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* <div className="container"> */}
                {/* {console.log("this.props.subject.getAssessments(): ", this.props.subject.getAssessments())} */}
                <div className="h4">{this.props.subject.name}</div>
                <div className="row">

                    {this.props.subject.getAssessments().map((assessment, i) => {
                        console.log("getAssessments i: ", assessment, " ", i);
                        return (
                            <AssessmentContanier key={i} assessment={assessment}></AssessmentContanier>
                        )
                    })}
                </div>
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
