import * as THREE 	from "three";

var config = {
	
	canvas: {
		element : document.getElementById('container'),
		color : 0xf4eddf
	},

	camera: {
		position : new THREE.Vector3(0, 0, 80),
		target : new THREE.Vector3(0, 0, 0)
	},

	axisHelper: false,
	
	lights: {
		ambient: {
			color : 0xffffff
		} 
	},

	cylinders: [
		{
			x: 0,
			y: 0,
			z: 0,
			width: 10,
			height: 10,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: true
		},
		{
			x: 0,
			y: 0,
			z: 10,
			width: 6,
			height: 2,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: 0,
			y: 5,
			z: 40,
			width: 5,
			height: 20,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: Math.PI*.5,
			inverted: true
		},
		{
			x: 5,
			y: -5,
			z: 70,
			width: 10,
			height: 10,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: Math.PI*.5,
			inverted: true
		},
		{
			x: 20,
			y: 10,
			z: -20,
			width: 11,
			height: 10,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: -50,
			y: -30,
			z: -10,
			width: 11,
			height: 4,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: 50,
			y: 30,
			z: 9,
			width: 11,
			height: 6,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: -24,
			y: 40,
			z: 0,
			width: 11,
			height: 6,
			rotX: Math.PI*.5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: -30,
			y: 10,
			z: 30,
			width: 10,
			height: 4,
			rotX: Math.PI,
			rotY: 0,
			rotZ: 0,
			inverted: true
		},
		{
			x: 25,
			y: -25,
			z: -20,
			width: 9,
			height: 6,
			rotX: Math.PI * .5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: 5,
			y: 45,
			z: 0,
			width: 10,
			height: 7,
			rotX: Math.PI * .5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: -15,
			y: -45,
			z: -30,
			width: 9,
			height: 10,
			rotX: Math.PI * .5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
		{
			x: 30,
			y: -30,
			z: 30,
			width: 10,
			height: 4,
			rotX: Math.PI,
			rotY: 0,
			rotZ: 0,
			inverted: true
		},
		{
			x: -15,
			y: -45,
			z: -30,
			width: 9,
			height: 10,
			rotX: Math.PI * .5,
			rotY: 0,
			rotZ: 0,
			inverted: false
		},
	],

	radiusSegments: 100,

	heightSegments: 10,

	black: {
		r: 0,
		g: 0,
		b: 0,
	},

	white: {
		r: 0.9568,
		g: 0.9294,
		b: 0.8745,
	},

}


module.exports = config;