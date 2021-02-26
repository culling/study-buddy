class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="page-header navbar-light bg-light sticky-top">
            <!-- Internal Links -->
            <div class="grid-left-side" style="text-align: left;">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    </i> Home</a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

            <!-- External Links -->
            <div class="grid-right-side navbar-expand-lg navbar-nav nav-link">
                <nav class="navbar" style="margin-left: auto;">
                    <a target="blank" class="nav-link navbar-light" style="padding-right: 1em;"
                        href="#">
                        <b>^_^</b>
                    </a>
                    <a target="blank" class="nav-link navbar-light" style="padding-right: 1em;"
                        href="#">
                        <b>:D</b>
                    </a>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);