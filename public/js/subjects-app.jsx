'use strict';


/**
 * Functions
 */

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
        };
    }

    render() {
        return (
            <div>
                <h3>{this.state.subject.getDisplayName()}</h3>
                <div>
                    Time Left: <b> {this.state.minutesLeft} : {this.state.secondsLeft} </b>
                </div>

                {this.state.playAlert &&
                    <div>
                        <audio className="audio-element" controls volume="0.3">
                            <source src="/resources/shishio-doshi.mp3"></source>
                        </audio>
                    </div>
                }
                {this.state.stopStates.second &&
                    <button className="btn btn-primary" onClick={() => { moveToNextSubject(subjects); window.location.reload(); }}>
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