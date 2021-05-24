// import("../../../js/data/local/localStorage.js");
class SubjectCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.storageStrategy = this.getDataStrategy();
        this.logLevel = 5; 
        // debugMessage(this.logLevel, "this.storageStrategy: ", this.storageStrategy);
        this.setInnerHtml(shadowRoot, this.storageStrategy);
    }

    getDataStrategy() {
        return localStorageStrategy;
    }

    setInnerHtml(shadowDom, storageStrategy) {
        shadowDom.innerHTML = `
        <style>
            @import "css/main.css"
        </style>
    
        <div class="shadowed-card-container subject-card">
            
            <div class="card-input">
                <div>Course Name</div>
                <input id="course-name" type="text" value="Course Name" ></input>
            </div>

            <div class="card-input">
                <div>Course Code</div>
                <input id="course-code" type="text" value="Course Code"></input>
            </div>
        

           <div class="card-footer">
                <button id="add-subject-button" class="add-subject-button">Add Subject</button>
           </div> 
        </div>`;
        
        
        shadowDom.getElementById("add-subject-button").onclick = ()=>{ 
            const courseFullName = shadowDom.querySelector("#course-name").value;
            const courseShortName = shadowDom.querySelector("#course-code").value;

            this.addSubjectButtonClick(storageStrategy, courseFullName, courseShortName) 
        };
    }

    connectedCallback() {

    }

    addSubjectButtonClick(storageStrategy, courseFullName, courseShortName) {
        debugMessage(this.logLevel, 'Add Subject Button clicked!');
        // debugMessage(this.logLevel, "storageStrategy: ", storageStrategy);
        storageStrategy.add("subjects", {
            courseShortName: courseShortName,
            courseFullName: courseFullName,
            currentGradeTotal: 10,
            maximumPossibleGrade: 10,
        });
    }
}

customElements.define('subject-card', SubjectCard);