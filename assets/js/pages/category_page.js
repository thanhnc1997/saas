import {
	create_element,
	change_currency,
	render_icon
} from '../helper.js';

async function category_page(params = {}) {
	let template = create_element('section'),
			template_inner = create_element('div');
	template.classList.add('product-page');
	template_inner.classList.add('container');
	
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
	
	async function filter() {
		let div = create_element('div');
		div.classList.add('mb-25');
		div.innerHTML = `
		<div class="flex-row align-items-center mb-15">
			<span class="title mb-0 mr-auto">NEW ARRIVAL</span>
			<span class="filter-trigger">Lọc ${render_icon.plus({width: 11})}</span>
		</div>
		<div class="filter grid-row four-column-md">
			<div>
				<h4>Giá</h4>
				<button class="btn">Mặc định</button>
				<button class="btn">Từ thấp đến cao</button>
				<button class="btn">Từ cao đến thấp</button>
			</div>
			<div>
				<h4>Size</h4>
			</div>
			<div>
				<h4>Mùa sắc</h4>
			</div>
			<div>
				<h4>Danh mục</h4>
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function product_list() {
		let div = create_element('div');
		div.innerHTML = `
		<div class="grid-row product-row wtw"></div>
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
			<div class="image cursor-pointer" style="background-image: url(${product.image})"></div>
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
	
	template_inner.appendChild(await filter());
	template_inner.appendChild(await product_list());
	template.appendChild(template_inner);
	return template;
}

export default category_page;