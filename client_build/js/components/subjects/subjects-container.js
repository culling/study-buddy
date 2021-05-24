import("../../../js/data/local/localStorage.js");
class SubjectsContainer extends HTMLElement {
    constructor() {
        super();
        this.SUBJECTS_KEY = "subjects";
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.storageStrategy = this.getDataStrategy();

        this.setInnerHtml(shadowRoot);
    }

    getDataStrategy(){
        return localStorageStrategy;
    }

    setInnerHtml(shadowDom){
        const subjects = this.storageStrategy.load("subjects");

        shadowDom.innerHTML = `
        <div>subjectsContainer
            <subject-card></subject-card>
        </div>`;

        window.addEventListener('storage', function(e) {
            console.log("Storage Event triggered");
            console.log(e.key, e.oldValue,e.newValue, e.url, e.storageArea);            
        });
    }

    connectedCallback() {

    }
}

customElements.define('subjects-container', SubjectsContainer);