function create_element(e) {
	let div = document.createElement(e);
	return div;
}

function toast(type, message) {
	let div = create_element('div');
	div.classList.add('toast');
	if (type != '') div.classList.add(type);
	div.innerHTML = message;
	document.body.appendChild(div);
	
	setTimeout(() => {
		remove_element('.toast');
	}, 1000);
}

function loader() {
	let div = create_element('div');
	div.classList.add('lds-ring');
	div.innerHTML = `
	<div></div>
	<div></div>
	<div></div>
	`;
	document.body.appendChild(div);
}

function change_currency(price) {
	return price.toLocaleString('en-US');
}

let render_icon = {
	search() {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.36,9.38a6,6,0,1,1-6-6A6,6,0,0,1,15.36,9.38Z" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path><line x1="13.61" y1="13.61" x2="20.6" y2="20.6" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"></line></svg>
		`;
	},
	bag() {
		return `
		<svg id="bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="currentColor" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
		`;
	},
	arrow_left() {
		return `
		<svg id="left" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 512 341.333">
		<g id="Group_25" data-name="Group 25">
			<path id="Path_18" data-name="Path 18" d="M3.125,248.458l160-160a10.665,10.665,0,1,1,15.083,15.083L36.416,245.333H501.333a10.667,10.667,0,1,1,0,21.334H36.416L178.208,408.458a10.666,10.666,0,1,1-15.084,15.083l-160-160A10.663,10.663,0,0,1,3.125,248.458Z" transform="translate(0 -85.333)"/>
		</g>
	</svg>

		`;
	},
	arrow_right() {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 512 341.333">
			<g id="right" transform="translate(0 -85.333)">
				<g id="Group_26" data-name="Group 26">
					<path id="Path_19" data-name="Path 19" d="M508.875,248.458l-160-160a10.665,10.665,0,0,0-15.083,15.083L475.584,245.333H10.667a10.667,10.667,0,1,0,0,21.334H475.584L333.792,408.458a10.666,10.666,0,1,0,15.084,15.083l160-160A10.663,10.663,0,0,0,508.875,248.458Z"/>
				</g>
			</g>
		</svg>
		`;
	},
	tape_measure() {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="13.938" height="12.719" viewBox="0 0 13.938 12.719">
		<defs>
				<style>
					.cls-1 {
						fill: none;
						stroke-width: 1px;
					}

					.cls-1, .cls-2 {
						stroke: #000;
						fill-rule: evenodd;
					}

					.cls-2 {
						stroke-width: 1px;
					}
				</style>
			</defs>
			<path class="cls-1" d="M1.6,5.1a3.854,3.854,0,0,0,4,2.8h8.9l0,5.339H5.178A3.448,3.448,0,0,1,1.6,10.1C1.6,8.942,1.6,5.217,1.6,5.1Z" transform="translate(-1.063 -1.031)"></path>
			<path class="cls-1" d="M10.9,4.3V8.1" transform="translate(-1.063 -1.031)"></path>
			<path class="cls-1" d="M6.25,1.531c2.589,0,4.688,1.413,4.688,3.156S8.839,7.844,6.25,7.844,1.563,6.431,1.563,4.688,3.661,1.531,6.25,1.531Z" transform="translate(-1.063 -1.031)"></path>
			<ellipse id="Ellipse_3_copy" data-name="Ellipse 3 copy" cx="5.297" cy="3.656" rx="0.766" ry="0.531"></ellipse>
			<path class="cls-2" d="M5.565,9.343v3.622" transform="translate(-1.063 -1.031)"></path>
			<path id="Shape_1535_copy" data-name="Shape 1535 copy" class="cls-2" d="M8.661,10.9v2.07" transform="translate(-1.063 -1.031)"></path>
			<path id="Shape_1535_copy_2" data-name="Shape 1535 copy 2" class="cls-2" d="M11.757,9.343v3.622" transform="translate(-1.063 -1.031)"></path>
		</svg>
		`;
	},
	hamburger() {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512.001 320">
			<g id="menu" transform="translate(0 -96)">
				<g id="Group_28" data-name="Group 28">
					<g id="Group_27" data-name="Group 27">
						<path id="Path_20" data-name="Path 20" d="M501.333,96H10.667a10.667,10.667,0,1,0,0,21.334H501.334a10.667,10.667,0,1,0,0-21.334Z"/>
					</g>
				</g>
				<g id="Group_30" data-name="Group 30">
					<g id="Group_29" data-name="Group 29">
						<path id="Path_21" data-name="Path 21" d="M501.333,245.333H10.667a10.667,10.667,0,1,0,0,21.334H501.334a10.667,10.667,0,1,0,0-21.334Z"/>
					</g>
				</g>
				<g id="Group_32" data-name="Group 32">
					<g id="Group_31" data-name="Group 31">
						<path id="Path_22" data-name="Path 22" d="M501.333,394.667H10.667a10.667,10.667,0,1,0,0,21.333H501.334a10.667,10.667,0,1,0,0-21.333Z"/>
					</g>
				</g>
			</g>
		</svg>
		`;
	},
	close() {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 377.126 377.125">
			<g id="Group_35" data-name="Group 35" transform="translate(-4890.35 -7314.312) rotate(-45)">
				<g id="Group_33" data-name="Group 33" transform="translate(-1970 8790)">
					<g id="Group_27" data-name="Group 27">
						<path id="Path_20" data-name="Path 20" d="M501.333,96H10.667a10.667,10.667,0,1,0,0,21.334H501.334a10.667,10.667,0,1,0,0-21.334Z"/>
					</g>
				</g>
				<g id="Group_34" data-name="Group 34" transform="translate(-1724.667 9152.668) rotate(-90)">
					<g id="Group_27-2" data-name="Group 27" transform="translate(0 0)">
						<path id="Path_20-2" data-name="Path 20" d="M10.668,117.334H501.334a10.667,10.667,0,1,0,0-21.334H10.667a10.667,10.667,0,1,0,0,21.334Z" transform="translate(0 -96)"/>
					</g>
				</g>
			</g>
		</svg>
		`;
	},
	plus(params = {}) {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="${params.width}" viewBox="0 0 512.001 512.001">
			<g id="Group_35" data-name="Group 35" transform="translate(1970 -8640.667)">
				<g id="Group_33" data-name="Group 33" transform="translate(-1970 8790)">
					<g id="Group_27" data-name="Group 27">
						<path id="Path_20" data-name="Path 20" d="M501.333,96H10.667a10.667,10.667,0,1,0,0,21.334H501.334a10.667,10.667,0,1,0,0-21.334Z"/>
					</g>
				</g>
				<g id="Group_34" data-name="Group 34" transform="translate(-1724.667 9152.668) rotate(-90)">
					<g id="Group_27-2" data-name="Group 27" transform="translate(0 0)">
						<path id="Path_20-2" data-name="Path 20" d="M10.668,117.334H501.334a10.667,10.667,0,1,0,0-21.334H10.667a10.667,10.667,0,1,0,0,21.334Z" transform="translate(0 -96)"/>
					</g>
				</g>
			</g>
		</svg>
		`;
	},
	minus(params = {}) {
		return `
		<svg xmlns="http://www.w3.org/2000/svg" width="${params.width}" viewBox="0 0 512.001 21.334">
			<g id="Group_36" data-name="Group 36" transform="translate(0 -96)">
				<g id="Group_27" data-name="Group 27">
					<path id="Path_20" data-name="Path 20" d="M501.333,96H10.667a10.667,10.667,0,1,0,0,21.334H501.334a10.667,10.667,0,1,0,0-21.334Z"/>
				</g>
			</g>
		</svg>
		`;
	},
	trash() {
		return `
		<svg id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg>
		`;
	}
}

export {
	create_element,
	toast,
	loader,
	render_icon,
	change_currency
}