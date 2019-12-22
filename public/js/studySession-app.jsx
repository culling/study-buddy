'use strict';


/**
 * Functions
 */

function getStopTime(timerLengthMinutes) {
    let stopTime = new Date();
    stopTime.setMinutes(stopTime.getMinutes() + timerLengthMinutes);
    stopTime.setSeconds(stopTime.getSeconds() + 1);
    return stopTime;
}

function timer() {
    let timeLeft = new Date(stopTime - new Date());
    return timeLeft;
}

function moveToNextSubject(subjects) {
    let index = localStorage.getItem("currentSubjectIndex");
    index++;
    localStorage.setItem("currentSubjectIndex", index % (subjects.length));
}

function getCurrentSubjectIndex() {
    let index = localStorage.getItem("currentSubjectIndex");
    let subjectsSize = JSON.parse(localStorage.getItem("subjects")).length;
    index %= subjectsSize;
    if (index == undefined) {
        index = 0;
    }

    console.log("Index: " + index);
    return index;
}

function getNextSubject(subjects, index) {
    let length = subjects.length;
    return subjects[(index + 1) % (length)]
}




/**
 * Variables
 */
let localStorageSubjects = JSON.parse(localStorage.getItem("subjects"));
let subjects = subjectFromJson(localStorageSubjects);

let timerLengthMinutes = 1;
let stopTime = getStopTime(timerLengthMinutes);
let index = getCurrentSubjectIndex();


/**
 * React
 */
class StudySessionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: subjects[index],
            minutesLeft: (timerLengthMinutes).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            secondsLeft: (0).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            stopStates: {
                minute: false,
                second: false
            }
        };
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {

            if (!this.state.stopStates.second) {
                this.setState(() => ({
                    minutesLeft: timer().getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
                    secondsLeft: timer().getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 })
                }))
            }

            if (this.state.minutesLeft == "00") {
                let stopStates = this.state.stopStates;
                stopStates.minute = true;
                this.setState({
                    stopStates: stopStates
                });
            }
            if (this.state.stopStates.minute && this.state.secondsLeft == "00") {
                let stopStates = this.state.stopStates;
                stopStates.second = true;
                this.setState(() => ({
                    stopStates: stopStates
                }));
                console.log("stopStates.second: " + this.state.stopStates.second);
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                <h3>{this.state.subject.getDisplayName()}</h3>
                <div>
                    Time Left: <b> {this.state.minutesLeft} : {this.state.secondsLeft} </b>
                </div>
                {this.state.stopStates.second &&
                    <button className="btn btn-primary" onClick={()=>{moveToNextSubject(subjects); window.location.reload();}}>
                        Next Subject: {(getNextSubject(subjects, index)).getShortName()}
                    </button>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <StudySessionContainer />, document.getElementById('study-session-container')
);