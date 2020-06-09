class SearchMovie extends HTMLElement {
	
	constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#inputElement").value;
    }

    render() {
    	this.shadowDOM.innerHTML = `
    	 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" id="inputElement" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0" id="btnElement" type="submit">Search</button>
    </form>`;

    this.shadowDOM.querySelector("#btnElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-movie", SearchMovie);