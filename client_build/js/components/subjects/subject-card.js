// import("../../../js/data/local/localStorage.js");
class SubjectCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.storageStrategy = this.getDataStrategy();
        console.log("this.storageStrategy: ", this.storageStrategy);
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
        
        
        shadowDom.getElementById("add-subject-button").onclick = ()=>{ this.addSubjectButtonClick(storageStrategy) };
        // shadowRoot.firstElementChild.onclick=this.buttonClick;
    }

    connectedCallback() {

    }

    addSubjectButtonClick(storageStrategy) {
        console.log('Add Subject Button clicked!');
        console.log("storageStrategy: ", storageStrategy);
        storageStrategy.add("subjects", {
            courseShortName: "SWEN301",
            courseFullName: "Structured Methods",
            currentGradeTotal: 90.13,
            maximumPossibleGrade: 100,
        });
    }
}

customElements.define('subject-card', SubjectCard);