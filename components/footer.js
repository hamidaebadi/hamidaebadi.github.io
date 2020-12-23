class Footer extends HTMLElement {
	constructor(){
		super();
	}

	connectedCallback(){
		this.innerHTML = `
		<footer class="footer">
		<div class="footer-contact-section">
			Contact
		</div>
		<div class="footer-copyright-section">
				&copy;HamiX-2020
		</div>
	</footer>
		`;
	}
}

customElements.define('footer-component', Footer);