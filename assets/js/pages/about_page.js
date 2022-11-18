import {
	create_element
} from '../helper.js';

async function about_page(params = {}) {
	let template = create_element('div');
	template.innerHTML = `<p>Giới thiệu</p>`
	
	return template;
}

export default about_page;