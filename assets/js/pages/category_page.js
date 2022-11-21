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
				<h4 class="mb-15 font-weight-bold">Giá</h4>
				<label class="label mb-10">
					<input name="price" type="radio"><span>Mặc định</span>
				</label>
				<label class="label mb-10">
					<input name="price" type="radio"><span>Từ thấp đến cao</span>
				</label>
				<label class="label mb-10">
					<input name="price" type="radio"><span>Từ cao đến thấp</span>
				</label>
			</div>
			<div>
				<h4 class="mb-15 font-weight-bold">Size</h4>
				<label class="label mb-10">
					<input name="size" type="radio"><span>0</span>
				</label>
				<label class="label mb-10">
					<input name="size" type="radio"><span>1</span>
				</label>
				<label class="label mb-10">
					<input name="size" type="radio"><span>2</span>
				</label>
				<label class="label mb-10">
					<input name="size" type="radio"><span>3</span>
				</label>
				<label class="label mb-10">
					<input name="size" type="radio"><span>4</span>
				</label>
			</div>
			<div>
				<h4 class="mb-15 font-weight-bold">Màu sắc</h4>
				<span data-color="Xanh lá" class="color-plate" style="background-color: #2b8c7e"></span>
				<span data-color="Ghi" class="color-plate" style="background-color: #6a686d"></span>
				<span data-color="Trắng" class="color-plate" style="background-color: #fff"></span>
				<span data-color="Hồng đậm" class="color-plate" style="background-color: #d62264"></span>
			</div>
			<div>
				<h4 class="mb-15 font-weight-bold">Danh mục</h4>
				<span class="tag">Nữ</span>
				<span class="tag">Nam</span>
				<span class="tag">Áo phông</span>
				<span class="tag">Sơ mi</span>
				<span class="tag">Váy</span>
				<span class="tag">Áo khoác</span>
			</div>
		</div>
		`;
		
		div.querySelector('.filter-trigger').addEventListener('click', (e) => {
			e.preventDefault();
			e.currentTarget.querySelector('svg').classList.toggle('active');
			div.querySelector('.filter').classList.toggle('show');
		});
		
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
	
	template_inner.appendChild(await filter());
	template_inner.appendChild(await product_list());
	template.appendChild(template_inner);
	return template;
}

export default category_page;