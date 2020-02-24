'use strict';

class AboutContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h3>3 Quarter hour</h3>
                <p>
                    A mix of the pomodoro technique ( <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">https://en.wikipedia.org/wiki/Pomodoro_Technique</a> )
                    and interleaving ( <a href="https://academicaffairs.arizona.edu/Interleaving">https://academicaffairs.arizona.edu/Interleaving</a> ). </p>
                <ol>

                    <li>Set aside a time to do some study - it only needs 15 minutes for a single subject but if you have an hour it will work much better.</li>
                    <li>Pick 3 subjects to study for with your notes, lecture slides etc.</li>
                    <li>Set a timer for 15 minutes on your phone and just study that one subject - any distractions that come up (like wanting to send an email or check your facebook) can wait to the end, don't pick up your phone and don't "just check" on something unless it's really related to what you are studying. (15 minutes should be okay, if you are having trouble with it take it down to 14 minutes - be aware of when you are flaking out and let me know)</li>
                    <li>Once the 15 minute session is done, move onto the next subject or do whatever you felt you really needed to do during the last session</li>
                    <li>On your third subject get through it and you are done for one session.</li>
                </ol>
                It took a while but you have studied 3 subjects in a focused way and may feel some amount of connection between the topics (How does probability relate to population growth etc etc).
                <ul>
                    <li>Now you have 15-20 minutes to get something to eat/relax etc. You should feel good about having done some study and be ready to get back to the books when you return</li>
                    <li>Repeat while you have time, dont forget to have lunch and bathroom breaks and try to make sure that you are ready to study for the session before you start - you want to build a habit of being able to focus and concentrate for the 15 minutes.</li>
                </ul>
                <p>
                </p>
            </div>
        )
    }

}

ReactDOM.render(
    <AboutContainer />, document.getElementById('about-container')
);