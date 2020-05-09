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



class SubjectContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                    <span className="col">
                        <b>
                            {this.props.subject.name}
                        </b>
                    </span>
                    <span className="col"></span>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="courseCode row">
                            <span className="col">Course Code: </span>
                            <input className="col" type="text" id={"courseCode" + "-" + this.props.subject.courseCode} defaultValue={this.props.subject.courseCode} />
                        </div>
                        <div className="displayName row">
                            <span className="col">Display Name: </span>
                            <input className="col" type="text" id={"displayName" + "-" + this.props.subject.courseCode} defaultValue={this.props.subject.displayName} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <button className="btn btn-light col" onClick={(e) => this.deleteSubject(e)} >Delete</button>
                        <span className="col"></span>

                    </div>
                </div>
            </div>)
    }
}


class SubjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createNewSubject: false,
            "new-subject-name": "",
            "new-course-code":  "",
            "new-display-name": "",
            "subjects": subjects
        }
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.saveNewSubject     = this.saveNewSubject.bind(this);
    }

    newSubjectClick() {
        console.log("New Subject Clicked");
        this.setState({
            createNewSubject: true
        })
    }

    saveNewSubject(){
        console.log("Save New Subject Clicked");
        let subjectName = this.state["new-subject-name"];
        let courseCode  = this.state["new-course-code"];
        let displayName = this.state["new-display-name"];

        let newSubject = new Subject(
            subjectName,
            courseCode,
            displayName
        )

        let subjects = this.state.subjects;
        subjects.push(newSubject);
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
            <div className="subjects-container">
                <div className="subjects-container row">

                    {subjects.map((subject, i) => {
                        return (
                            <SubjectContainer key={i} subject={subject} />
                        )
                    })}

                    {this.state.createNewSubject &&
                        <div className="card col-sm-6" >
                            <br />
                            <div className="card-title row">
                                <span className="col" ><b>Subject Name: </b></span>
                                <span className="col-sm-1"></span>
                                <input name="new-subject-name" className="col" type="text" onChange={this.handleInputChange} value={this.state["new-subject-name"]} ></input>
                                <span className="col-sm-1"></span>
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <div className="courseCode row">
                                        <span className="col">Course Code: </span>
                                        <input className="col" type="text" name={"new-course-code"} value={this.state["new-course-code"]} onChange={this.handleInputChange}   />
                                    </div>
                                    <div className="displayName row">
                                        <span className="col">Display Name: </span>
                                        <input className="col" type="text" name={"new-display-name"} value={this.state["new-display-name"]} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <span className="col"></span>
                                    <button className="btn btn-primary col" onClick={this.saveNewSubject}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    }
                </div>



                <br />
                <div className="row">
                    <span className="col"></span>
                    <button className="col btn btn-primary" onClick={(e) => { this.newSubjectClick(e) }}>New Subject</button>
                </div>
            </div >
        )
    }
}


ReactDOM.render(
    <SubjectsContainer />, document.getElementById('subjects-container')
);
