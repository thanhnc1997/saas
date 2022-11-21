import {
	create_element,
	render_icon
} from '../helper.js';

function cart() {
	document.body.classList.add('overflow-hidden');
	
	let div = create_element('div');
	div.classList.add('cart-modal-wrapper');
	div.innerHTML = `
	<div class="overlay"></div>
	<div class="cart-modal">
		<div class="cart-header flex-row align-items-center">
			<span class="title">giỏ hàng</span>
			<button type="button">${render_icon.close()}</button>
		</div>
		<div class="grid-row">
			<div class="content left">
				<div class="cart-item">
					<div class="empty text-center" style="position: absolute; top: 25%; left: 50%; transform: translate(-50%, 0);">Hiện chưa có sản phẩm nào trong giỏ ~~</div>
				</div>
			</div>
		</div>
	</div>
	`;
	
	setTimeout(() => {
		div.querySelector('.cart-modal').classList.add('in');
	}, 100);
	
	function remove_cart(dom_trigger) {
		div.querySelector(dom_trigger).addEventListener('click', (e) => {
			e.preventDefault();
			div.querySelector('.cart-modal').classList.remove('in');
			div.querySelector('.overlay').remove();
			document.body.classList.remove('overflow-hidden');
			setTimeout(() => {
				div.remove();
			}, 400);
		});
	}
	remove_cart('.cart-header button');
	remove_cart('.overlay');
	
	return div;
}

export default cart