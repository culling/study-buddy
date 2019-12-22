'use strict';
const e = React.createElement;

let timerLengthMinutes = 15;

function newTimer(){
    let now = new Date();
    let finalTimer = now;
    finalTimer.setMinutes( now.getMinutes + timerLengthMinutes);
    return newTimer;
} 

function timer(){
    return "Time: ";
}

class StudySessionContainer extends React.Component{
    constructor(props) {
        super();

    }
    
    render(){
        return (
            <div>
                <p>My React Component</p>
                timer {timer()}
            </div>
        )
    }

}

ReactDOM.render (
    <StudySessionContainer />, document.getElementById('study-session-container')
);