class FloatCadenaMarkov{'use strict'//hecho por el pentaquark neutro y neutral auream
	constructor(estados,dist,estado_inicial){
	if(!Array.isArray(estados)){throw new Error('se esperaba un Array para el estado',{cause:typeof(estados)})}
	if(!Array.isArray(dist)){throw new Error('se esperaba un Array',{cause:typeof(dist)})}
	if(estados.length!=dist.length){throw new Error('los dos Array deben tener el mismo length')}
	if(!dist.every(x=>Array.isArray(x))){throw new Error('dist solo debe contener Arrays con las posibilidades')}
	if(!estados.includes(estado_inicial)){throw new Error('el estado_inicial debe exitir en estados',{cause:estado_inicial})}
		this.estado=estado_inicial;
		this.cadenas=estados;
		this.distribucion=dist;
		this.estadoAnterior=null;
}
//metodos static de la clase
static fromArray(ar){return new FloatCadenaMarkov(ar[0],ar[1],ar[2])}

//aqui los get
get estadodeCambio(){return this.distribucion[this.cadenas.indexOf(this.estado)]}
get estadoMasPosible(){return this.cadenas[this.estadodeCambio.indexOf(Math.max(...this.estadodeCambio))]}
get estadoMenosPosible(){return this.cadenas[this.estadodeCambio.lastIndexOf(Math.min(...this.estadodeCambio))]}
get [Symbol.toStringTag](){return 'FloatCadenaMarkov'}

//funciones que tendra heredadas a lo creado
paso(rnd){rnd=(typeof(rnd)=='number'?rnd:Math.random());let i=0,sum=0,pos=this.distribucion[this.cadenas.indexOf(this.estado)];this.estadoAnterior=this.estado;
	while(i<this.cadenas.length){sum+=pos[i];if(sum>=rnd){this.estado=this.cadenas[i];return !(this.estadoAnterior==this.estado)}i++}
	this.estado=this.cadenas[i-1];return !(this.estadoAnterior==this.estado)}
nPasos(k){let i=0,st=Array(k);while(i<k){this.paso();st[i++]=this.estado;}return st;}
obtenerArray(){return [this.cadenas,this.distribucion,this.estado]}
}

class IntCadenaMarkov{'use strict'//hecho por el pentaquark neutro y neutral auream
	constructor(estados,dist,estado_inicial){
	if(!Array.isArray(estados)){throw new Error('se esperaba un Array para el estado',{cause:typeof(estados)})}
	if(!Array.isArray(dist)){throw new Error('se esperaba un Array para dist',{cause:typeof(dist)})}
	if(estados.length!=dist.length){throw new Error('los dos Array deben tener el mismo length')}
	if(!dist.every(x=>(x instanceof Uint16Array))){throw new Error('dist solo debe contener Uint16Array con numeros para la posibilidad')}
	if(!estados.includes(estado_inicial)){throw new Error('el estado_inicial debe exitir en estados',{cause:estado_inicial})}
		this.estado=estado_inicial;
		this.cadenas=estados;
		this.distribucion=dist;
		this.estadoAnterior=null;
}
//metodos static de la clase
static fromArray(ar){return new IntCadenaMarkov(ar[0],ar[1],ar[2])}

//aqui los get
get estadodeCambio(){return this.distribucion[this.cadenas.indexOf(this.estado)]}
get estadoMasPosible(){return this.cadenas[this.estadodeCambio.indexOf(Math.max(...this.estadodeCambio))]}
get estadoMenosPosible(){return this.cadenas[this.estadodeCambio.lastIndexOf(Math.min(...this.estadodeCambio))]}
get [Symbol.toStringTag](){return 'IntCadenaMarkov'}

//funciones que tendra heredadas a lo creado
paso(rnd){let i=0,sum=0,pos=this.distribucion[this.cadenas.indexOf(this.estado)];rnd=(typeof(rnd)=='number'?rnd:Math.round(Math.random()*pos.reduce((ac,an)=>ac+an,ar.b))),this.estadoAnterior=this.estado;
	while(i<this.cadenas.length){sum+=pos[i];if(sum>=rnd){this.estado=this.cadenas[i];return !(this.estadoAnterior==this.estado)}i++}
	this.estado=this.cadenas[i-1];return !(this.estadoAnterior==this.estado)}
nPasos(k){let i=0,st=Array(k);while(i<k){this.paso();st[i++]=this.estado;}return st;}
obtenerArray(){return [this.cadenas,this.distribucion,this.estado]}
}