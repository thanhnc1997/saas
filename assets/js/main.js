import {
	create_element
} from './helper.js';
import page_header from './components/page_header.js';

let app = create_element('div');
app.setAttribute('id', 'main');
app.appendChild(page_header());

const render = {
	async home() {
		let block = await import('./pages/home_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
	},
	async about() {
		let block = await import('./pages/about_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
	},
	async category() {
		let block = await import('./pages/category_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
	}
}

if (location.pathname == '/') render.home();
if (location.pathname == '/about') render.about();
if (location.pathname == '/c') render.category();