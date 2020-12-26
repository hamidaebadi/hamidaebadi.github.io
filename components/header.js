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
				<li class="navbar-item"><a href="index.html">Etusivu</a></li>
				<li class="navbar-item"><a href="about.html">Minusta</a></li>
				<li class="navbar-item"><a href="myapps.html">Minun projektit</a></li>
			</ul>
		</nav>
		`;
	}
}

customElements.define('header-component', Header);
