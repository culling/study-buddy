'use strict';

let timerLengthMinutes = 15;

let stopTime = new Date();
stopTime.setMinutes(stopTime.getMinutes() + timerLengthMinutes);
stopTime.setSeconds(stopTime.getSeconds() + 1);

function timer() {
    let timeLeft = new Date(stopTime - new Date());
    return timeLeft;
}


class StudySessionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                name: "Computer Science"
            },
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
                <h3>{this.state.subject.name}</h3>
                <div>
                    Time Left: <b> {this.state.minutesLeft} : {this.state.secondsLeft} </b>
                </div>
                {this.state.stopStates.second &&
                    <button className="btn btn-primary">Next Subject</button>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <StudySessionContainer />, document.getElementById('study-session-container')
);