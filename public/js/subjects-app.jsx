//'use strict';
//import React from 'react';
//import {render} from 'react-dom';
//import SubjectComponent from "./subject-component.jsx";

/**
 * Functions
 */



/**
* Variables
*/
let localStorageSubjects = JSON.parse(localStorage.getItem("subjects"));
let subjects = subjectFromJson(localStorageSubjects);



class SubjectComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            subject: props.subject
        }
    }

    deleteSubject() {
        let subjectToDelete = this.props.subject;
        subjects = subjects.filter(subject => subject.name != subjectToDelete.name);

        console.log(subjects);

        localStorage.setItem("subjects", JSON.stringify(subjects));
        location.reload();
    }

    render() {
        return (

            <div className="card col-sm-6"  >
                <div className="card-title">
                    <br />
                    <b>
                    {this.state.subject.name}
                    </b>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="courseCode row">
                            <span className="col">Course Code: </span>
                            <input className="col" type="text" id={"courseCode" + "-" + this.props.subject.courseCode} defaultValue={this.state.subject.courseCode} />
                        </div>
                        <div className="displayName row">
                            <span className="col">Display Name: </span>
                            <input className="col" type="text" id={"displayName" + "-" + this.props.subject.courseCode} defaultValue={this.state.subject.displayName} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <span className="col"></span>
                        <button className="btn btn-danger col" onClick={(e) => this.deleteSubject(e)} >Delete</button>
                    </div>
                </div>
            </div>)
    }
}


class SubjectsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    newSubjectClick(){
        console.log("New Subject Clicked");
    }

    render() {
        return (
            <div className="subjects-container">
                <div className="subjects-container row">

                    {subjects.map((subject, i) => {
                        return (
                            <SubjectComponent key={i} subject={subject} />
                        )
                    })}
                </div>
                <br />
                <div className="row">
                    <span className="col"></span>
                    <button className="col btn btn-primary" onClick={(e)=> {this.newSubjectClick(e)}}>New Subject</button>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <SubjectsContainer />, document.getElementById('subjects-container')
);
