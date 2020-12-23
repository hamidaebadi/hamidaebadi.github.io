class Header extends HTMLElement {
	constructor(){
		super();
	}

	//use lifecyble callbacks to add elements to the page
	connectedCallback(){
		this.innerHTML =
		`
		<nav class="navbar">
			<ul>
				<li class="navbar-item"><a href="index.html">Home</a></li>
				<li class="navbar-item"><a href="about.html">About</a></li>
				<li class="navbar-item"><a href="#apps">My Apps</a></li>
				<li class="navbar-item"><a href="contact.html">Get in Touch</a></li>
			</ul>
		</nav>
		`;
	}
}

customElements.define('header-component', Header);
