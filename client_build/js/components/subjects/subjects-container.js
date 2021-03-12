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

    setInnerHtml(shadowRoot){
        const subjects = this.storageStrategy.load("subjects");
        const prettyJsonString = JSON.stringify(subjects,null,"</br>");
        console.log("prettyJsonString: ", prettyJsonString);
        shadowRoot.innerHTML = `
        <p>subjectsContainer
        ${prettyJsonString}
        </p>`;
    }

    connectedCallback() {

    }

}

customElements.define('subjects-container', SubjectsContainer);