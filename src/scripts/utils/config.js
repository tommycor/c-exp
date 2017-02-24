import * as THREE 	from "three";

var config = {
	
	canvas: {
		element : document.getElementById('container'),
		color : 0xfff8d8
	},

	camera: {
		position : new THREE.Vector3(0, 0, 50),
		target : new THREE.Vector3(0, 0, 0)
	},

	axisHelper: false,
	
	lights: {
		ambient: {
			color : 0xffffff
		} 
	},
}


module.exports = config;