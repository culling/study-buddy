import("../../data/local/localStorage.js");
class SubjectCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.storageStrategy = this.getDataStrategy();

        this.setInnerHtml(shadowRoot);
    }

    getDataStrategy(){
        return localStorageStrategy;
    }

    setInnerHtml(shadowDom){
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
        shadowDom.getElementById("add-subject-button").onclick=this.addSubjectButtonClick;
        // shadowRoot.firstElementChild.onclick=this.buttonClick;
    }

    connectedCallback() {

    }

    addSubjectButtonClick(){
        console.log('Add Subject Button clicked!');
        
    }
}

customElements.define('subject-card', SubjectCard);