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


    render() {
        return (
            <div className="card col-sm-6"  >
                <div className="card-title">
                    {this.state.subject.name}
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="courseCode row">
                            <span className="col-sm-6">Course Code: </span>
                            <input className="col-sm-6" type="text" id={"courseCode"+"-"+this.props.subject.courseCode } defaultValue={this.state.subject.courseCode} />
                        </div>
                        <div className="displayName row">
                            <span className="col-sm-6">Display Name: </span>
                            <input className="col-sm-6" type="text" id={"displayName"+"-"+this.props.subject.courseCode} defaultValue={this.state.subject.displayName} />
                        </div>
                    </div>
                </div>
            </div>)
    }
}


class SubjectsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="subjects-container row">
                {subjects.map((subject, i) => {
                    return (
                        <SubjectComponent key={i} subject={subject} />
                    )
                })}

            </div>
        )
    }
}


ReactDOM.render(
    <SubjectsContainer />, document.getElementById('subjects-container')
);
