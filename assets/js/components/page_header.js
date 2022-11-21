import {
	create_element,
	render_icon
} from '../helper.js';

import cart from './cart.js';

function page_header() {
	let div = create_element('header');
	div.classList.add('header');
	div.innerHTML = `
	<div class="container">
		<div class="header-top">
			<a href="/" class="logo">
				<img src="assets/images/logo.png" alt="">
			</a>
			<div>
				<button type="button" class="mobile-nav-trigger">
					${render_icon.hamburger()}
				</button>
				<button type="button" class="search-page">
					${render_icon.search()}
				</button>
				<button type="button" class="cart">
					${render_icon.bag()}
					<span>(0)</span>
				</button>
			</div>
		</div>
		<nav class="main-nav">
			<a href="/" class="logo">
				<img src="images/logo.png" alt="">
			</a>
			<a href="/c">Nam</a>
			<a href="/c">Nữ</a>
			<a href="/c">Sale</a>
			<a href="#">get the look</a>
			<button type="button">${render_icon.close()}</button>
		</nav>
	</div>
	`;
	
	let overlay = create_element('div');
	overlay.classList.add('overlay');
	div.querySelector('.mobile-nav-trigger').addEventListener('click', () => {
		div.querySelector('.main-nav').style.display = 'block';
		div.querySelector('.main-nav').classList.add('slideInLeft');
		div.appendChild(overlay);
		document.body.classList.add('overflow-hidden');
	});
	function hide_mobile_nav() {
		div.querySelector('.main-nav').classList.remove('slideInLeft');
		div.querySelector('.main-nav').classList.add('slideOutLeft');
		document.body.classList.remove('overflow-hidden');
		setTimeout(() => {
			div.querySelector('.main-nav').classList.remove('slideOutLeft');
			div.querySelector('.main-nav').style.display = 'none';
			overlay.remove();
		}, 220);
	}

	div.querySelector('.main-nav button').addEventListener('click', (e) => {
		e.preventDefault();
		hide_mobile_nav();
	});
	
	div.querySelector('.cart').addEventListener('click', (e) => {
		e.preventDefault();
		document.body.appendChild(cart());
	});
	if (window.innerWidth < 768) {
		div.querySelectorAll('.main-nav span').forEach(item => {
			item.addEventListener('click', () => {
				hide_mobile_nav();
			})
		});
	}
	
	return div;
}

export default page_header