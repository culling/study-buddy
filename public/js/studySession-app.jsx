'use strict';

let timerLengthMinutes = 15;

let stopTime = new Date();
stopTime.setMinutes(stopTime.getMinutes() + timerLengthMinutes);

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
            minutesLeft: timerLengthMinutes,
            secondsLeft: 0
        };
    }



    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(() => ({
                minutesLeft: timer().getMinutes(),
                secondsLeft: timer().getSeconds()
            }))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h3>{this.state.subject.name}</h3>
                Timer Left: {this.state.minutesLeft} : {this.state.secondsLeft}
            </div>
        )
    }

}

ReactDOM.render(
    <StudySessionContainer />, document.getElementById('study-session-container')
);