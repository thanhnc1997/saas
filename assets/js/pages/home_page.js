import {
	create_element,
	change_currency
} from '../helper.js';

async function home_page(params = {}) {
	let template = create_element('div');
	let female_product = [
		{
			id: 'nl-123',
			name: 'uni tee',
			price: 100000,
			sale_price: '',
			image: 'assets/images/uni-tee.jpg',
			size: [0, 1, 2, 3]
		},
		{
			id: 'nl-456',
			name: 'hen dress',
			price: 150000,
			sale_price: '',
			image: 'assets/images/hen-dress.jpg',
			size: [0, 1, 2, 3]
		},
		{
			id: 'nl-789',
			name: 'feth jacket',
			price: 420000,
			sale_price: 350000,
			image: 'assets/images/feth-jacket.jpg',
			size: [0, 1, 2, 3]
		},
		{
			id: 'nl-101',
			name: 'cozy sweat shirt',
			price: 150000,
			sale_price: '',
			image: 'assets/images/cozy-sweat.jpg',
			size: [0, 1, 2, 3]
		}
	];
	let male_product = [
		{
			id: 'nl-123',
			name: 'lech shirt',
			price: 100000,
			sale_price: '',
			image: 'assets/images/lech-shirt.jpg',
			size: [0, 1, 2, 3, 4]
		},
		{
			id: 'nl-456',
			name: 'high tee',
			price: 150000,
			sale_price: 120000,
			image: 'assets/images/high-tee.jpg',
			size: [0, 1, 2, 3, 4]
		},
		{
			id: 'nl-789',
			name: 'moment tee',
			price: 420000,
			sale_price: '',
			image: 'assets/images/moment-tee.jpg',
			size: [0, 1, 2, 3, 4]
		},
		{
			id: 'nl-101',
			name: 'cozy coat',
			price: 150000,
			sale_price: '',
			image: 'assets/images/cozy-coat.jpg',
			size: [0, 1, 2, 3, 4]
		}
	];
	
	async function banner() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container grid-row banner-row">
			<figure class="left">
				<div style="background-image: url(assets/images/h1-1.jpg)"></div>
				<figcaption>
					<p class="title">"great life" collection</p>
					<button class="btn" type="button">xem chi tiết</button>
				</figcaption>
			</figure>
			<figure class="right" style="background-image: url(assets/images/h1-2.jpg)"></figure>
		</div>
		`;
		
		return div;
	}
	
	async function new_arrival() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container">
			<h4 class="text-center title mb-25">
				new arrival 
			</h4>
			<div class="grid-row product-row"></div>
		</div>
		`;
		female_product.map(product => {
			let price = ``,
					sale_percent = 0;
			if (product.sale_price) {
				price = `
				<span class="old-price">${change_currency(product.price)}</span>
				<span>${change_currency(product.sale_price)}</span>`
				;
				sale_percent = 100 - parseInt(product.price / product.sale_price * 100);
			}
			else {
				price = change_currency(product.price)
			}
			let item = create_element('div');
			item.setAttribute('data-id', product.id);
			item.classList.add('item');
			item.innerHTML = `
			${product.sale_price ? `<span class="sale">${sale_percent}%</span>` : ''}
			<a href="/p" class="image" style="background-image: url(${product.image})"></a>
			<div class="detail">
				<p class="name">${product.name}</p>
				<p class="price">${price} VND</p>
				<p class="mb-5">2 màu</p>
				<p class="size">
					<span>size:</span>
					${
					product.size.map(size => {
						return `<span>${size}</span>`
					}).join('')
					}
				</p>
			</div>
			`;
			div.querySelector('.product-row').appendChild(item);
		});
		
		return div;
	}
	
	async function promotion() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container section-promotion">
			<figure>
				<img src="assets/images/ban_nhieu.jpg">
			</figure>
		</div>
		`;
		
		return div;
	}
	
	async function product() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container">
			<h4 class="title text-center mb-25">
				what to wear?
			</h4>
			<div class="grid-row product-row wtw">
				
			</div>
		</div>
		`;
		male_product.map(product => {
			let price = ``,
					sale_percent = 0;
			if (product.sale_price) {
				price = `
				<span class="old-price">${change_currency(product.price)}</span>
				<span>${change_currency(product.sale_price)}</span>`
				;
				sale_percent = 100 - parseInt(product.price / product.sale_price * 100);
			}
			else {
				price = change_currency(product.price)
			}
			let item = create_element('div');
			item.setAttribute('data-id', product.id);
			item.classList.add('item');
			item.innerHTML = `
			${product.sale_price ? `<span class="sale">${sale_percent}%</span>` : ''}
			<a href="/p" class="image" style="background-image: url(${product.image})"></a>
			<div class="detail">
				<p class="name">${product.name}</p>
				<p class="price">${price} VND</p>
				<p class="mb-5">2 màu</p>
				<p class="size">
					<span>size:</span>
					${
					product.size.map(size => {
						return `<span>${size}</span>`
					}).join('')
					}
				</p>
			</div>
			`;
			div.querySelector('.product-row').appendChild(item);
		});
		
		return div;
	}
	
	async function get_the_look () {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container container-md">
			<h4 class="title">get the look</h4>
			<div class="grid-row get-the-look">
				<div class="item" style="background-image: url(assets/images/gtl-5.jpg)">
					<!-- <span class="title">xem chi tiết</span> -->
				</div>
				<div class="item" style="background-image: url(assets/images/gtl-1.jpg)">
					<!-- <span class="title">xem chi tiết</span> -->
				</div>
				<div class="item" style="background-image: url(assets/images/gtl-2.jpg)">
					<!-- <span class="title">xem chi tiết</span> -->
				</div>
				<div class="item" style="background-image: url(assets/images/gtl-3.jpg)">
					<!-- <span class="title">xem chi tiết</span> -->
				</div>
				<div class="item" style="background-image: url(assets/images/gtl-4.jpg)">
					<!-- <span class="title">xem chi tiết</span> -->
				</div>
			</div>
			<br>
			<p class="title">#keyclothes</p>
		</div>
		`;
		
		return div;
	}
	
	template.appendChild(await banner());
	template.appendChild(await new_arrival());
	template.appendChild(await promotion());
	template.appendChild(await product());
	template.appendChild(await get_the_look());
	
	return template;
}

export default home_page;