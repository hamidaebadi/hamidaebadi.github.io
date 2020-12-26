class Footer extends HTMLElement {
	constructor(){
		super();
	}

	connectedCallback(){
		this.innerHTML = `
		<footer class="footer">
				&copy;HamiX-2020
		</footer>
		`;
	}
}

customElements.define('footer-component', Footer);