import {
	create_element,
	change_currency,
	render_icon
} from '../helper.js';

async function product_detail_page(params = {}) {
	let tempalte = create_element('div');
	tempalte.classList.add('product-detail-page');
	tempalte.innerHTML = `
	<div class="grid-row product-detail">
		<div class="left">
			<div class="gallery">
				<div class="images" style="background-image: url(/assets/images/uni-tee.jpg)"></div>
				<div class="images" style="background-image: url(/assets/images/SSS-2-of-119-scaled.jpg)"></div>
				<div class="images" style="background-image: url(/assets/images/SSS-2-of-119-scaled.jpg)"></div>
				<div class="images" style="background-image: url(/assets/images/uni-tee.jpg)"></div>
			</div>
		</div>
		<div class="right">
			<div class="detail">
					<div class="text-right">
						<span class="close cursor-pointer">
							${render_icon.arrow_left()}
							<span>Quay lại</span>
						</span>
					</div>
					<p class="name">uni tee</p>
					<p class="price">100,000 VND</p>
					
					<p class="mb-15">màu</p>
					<div class="variation-list color mb-25">
						<span data-color="Xanh lá" class="color-plate" style="background-color: #2b8c7e"></span>
						<span data-color="Ghi" class="color-plate" style="background-color: #6a686d"></span>
						<span data-color="Trắng" class="color-plate" style="background-color: #fff"></span>
						<span data-color="Hồng đậm" class="color-plate" style="background-color: #d62264"></span>
					</div>

					<p class="mb-15">size</p>
					<div class="variation-list size mb-25">
						<span>0</span>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</div>
					<p class="check-size mb-25">
						${render_icon.tape_measure()}
						xem bảng size
					</p>
					<br>
					<button type="button" class="btn dark" style="width: 100%; padding: 14px;">thêm vào giỏ hàng</button>
				</div>
		</div>
	</div>
	`;
	
	function size_modal() {
		let div = create_element('div');
		div.setAttribute('id', 'size-chart-modal');
		div.classList.add('modal-wrapper');
		div.innerHTML = `
		<div class="overlay"></div>
		<div class="modal-dialog">
			<div class="modal-header">
				<p class="title" style="margin-bottom: 12px;">Bảng size</p>
				<p style="font-size: 12px;">
					Nếu số đo của bạn không phù hợp với bất kỳ số liệu nào dưới đây, bạn hãy dùng số đo vòng eo của mình để chọn size phù hợp nhé.
				</p>
				<span class="close" data-close="#size-chart-modal">${render_icon.close()}</span>
			</div>
			<div class="modal-body">
				<p class="title text-center">áo</p>
				<table class="table size-table mb-25">
					<tbody>
						<tr>
							<td></td>
							<td class="text-center"><p>0 - S</p></td>
							<td class="text-center"><p>1 - M</p></td>
							<td class="text-center"><p>2 - L</p></td>
						</tr>
						<tr>
							<td><p>chiều cao(cm)</p></td>
							<td class="text-center"><p>153 - 158</p></td>
							<td class="text-center"><p>158 - 163</p></td>
							<td class="text-center"><p>163 - 167</p></td>
						</tr>
						<tr>
							<td><p>cân nặng(kg)</p></td>
							<td class="text-center"><p>41 - 46</p></td>
							<td class="text-center"><p>47 - 52</p></td>
							<td class="text-center"><p>53 - 58</p></td>
						</tr>
						<tr>
							<td><p>vòng ngực(cm)</p></td>
							<td class="text-center"><p>85 - 89</p></td>
							<td class="text-center"><p>90 - 93</p></td>
							<td class="text-center"><p>94 - 98</p></td>
						</tr>
					</tbody>
				</table>

				<p class="title text-center">quần</p>
				<table class="table size-table">
					<tbody>
						<tr>
							<td></td>
							<td class="text-center"><p>0 - S - 27</p></td>
							<td class="text-center"><p>1 - M - 28</p></td>
							<td class="text-center"><p>2 - L - 29</p></td>
						</tr>
						<tr>
							<td><p>vòng eo(cm)</p></td>
							<td class="text-center"><p>64</p></td>
							<td class="text-center"><p>68</p></td>
							<td class="text-center"><p>72</p></td>
						</tr>
						<tr>
							<td><p>vòng mông(cm)</p></td>
							<td class="text-center"><p>88</p></td>
							<td class="text-center"><p>92</p></td>
							<td class="text-center"><p>96</p></td>
						</tr>
						<tr>
							<td><p>dài quần(cm)</p></td>
							<td class="text-center"><p>100</p></td>
							<td class="text-center"><p>102</p></td>
							<td class="text-center"><p>104</p></td>
						</tr>
						<tr>
							<td><p>rộng gấu(cm)</p></td>
							<td class="text-center"><p>13</p></td>
							<td class="text-center"><p>14</p></td>
							<td class="text-center"><p>15</p></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		`;
		function remove_modal(dom_trigger) {
			div.querySelector(dom_trigger).addEventListener('click', (e) => {
				e.preventDefault();
				div.remove();
				document.body.classList.remove('overflow-hidden');
			});
		}
		remove_modal('.close');
		remove_modal('.overlay');
		
		return div;
	}
	
	tempalte.querySelector('.close').addEventListener('click', (e) => {
		e.preventDefault();
		history.back();
	});
	
	tempalte.querySelector('.check-size').addEventListener('click', (e) => {
		e.preventDefault();
		document.body.classList.add('overflow-hidden');
		document.body.appendChild(size_modal());
	});
	
	return tempalte;
}

export default product_detail_page