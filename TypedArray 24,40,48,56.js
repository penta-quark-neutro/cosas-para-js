class Uint24Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%3==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 3',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*3)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint24Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint24Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint24Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint24Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/3}
get [Symbol.toStringTag](){return 'Uint24Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (this.mem[(i+1)*3-3]<<16)|(this.mem[(i+1)*3-2]<<8)|(this.mem[(++i)*3-1])}}

//funciones que tendra heredadas a lo creado
pos(indice){return (this.mem[(indice+1)*3-3]<<16)|(this.mem[(indice+1)*3-2]<<8)|(this.mem[(indice+1)*3-1])}
asig(indice,valor){this.mem[(indice+1)*3-3]=(valor&(0xff<<16))>>16,this.mem[(indice+1)*3-2]=(valor&(0xff<<8))>>8,this.mem[(indice+1)*3-1]=valor&0xff;
	return valor&((1<<24)-1)}
fill(valor,inicio,fin){let MTX=[(valor&(0xff<<16))>>16,(valor&(0xff<<8))>>8,valor&0xff],i=(inicio?inicio:0);fin=(fin?fin:this.length)
	while(i<fin){this.mem[(i+1)*3-3]=MTX[0],this.mem[(i+1)*3-2]=MTX[1],this.mem[(++i)*3-1]=MTX[2];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Uint24Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class Uint40Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%5==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 5',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*5)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint40Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint40Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint40Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint40Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/5}
get [Symbol.toStringTag](){return 'Uint40Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield Number((BigInt(this.mem[(i+1)*5-5])<<32n)|(BigInt(this.mem[(i+1)*5-4])<<24n)|(BigInt(this.mem[(i+1)*5-3])<<16n)|(BigInt(this.mem[(i+1)*5-2])<<8n)|(BigInt(this.mem[(++i)*5-1])))}}

//funciones que tendra heredadas a lo creado
pos(indice){return Number((BigInt(this.mem[(indice+1)*5-5])<<32n)|(BigInt(this.mem[(indice+1)*5-4])<<24n)|(BigInt(this.mem[(indice+1)*5-3])<<16n)|(BigInt(this.mem[(indice+1)*5-2])<<8n)|(BigInt(this.mem[(indice+1)*5-1])))}
asig(indice,valor){valor=BigInt(valor),
	this.mem[(indice+1)*5-5]=Number((valor&(0xffn<<32n))>>32n),this.mem[(indice+1)*5-4]=Number((valor&(0xffn<<24n))>>24n),
	this.mem[(indice+1)*5-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*5-2]=Number((valor&(0xffn<<8n))>>8n),this.mem[(indice+1)*5-1]=Number(valor&0xffn);
	return Number(valor&((1n<<40n)-1n))}
fill(valor,inicio,fin){valor=BigInt(valor);let MTX=[Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
	while(i<fin){this.mem[(i+1)*5-5]=MTX[0],this.mem[(i+1)*5-4]=MTX[1],this.mem[(i+1)*5-3]=MTX[2],this.mem[(i+1)*5-2]=MTX[3],this.mem[(++i)*5-1]=MTX[4];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Uint40Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class Uint48Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%6==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 6',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*6)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint48Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint48Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint48Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint48Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/6}
get [Symbol.toStringTag](){return 'Uint48Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield Number((BigInt(this.mem[(i+1)*6-6])<<40n)|(BigInt(this.mem[(i+1)*6-5])<<32n)|(BigInt(this.mem[(i+1)*6-4])<<24n)|(BigInt(this.mem[(i+1)*6-3])<<16n)|(BigInt(this.mem[(i+1)*6-2])<<8n)|(BigInt(this.mem[(++i)*6-1])))}}

//funciones que tendra heredadas a lo creado
pos(indice){return Number((BigInt(this.mem[(indice+1)*6-6])<<40n)|(BigInt(this.mem[(indice+1)*6-5])<<32n)|(BigInt(this.mem[(indice+1)*6-4])<<24n)|(BigInt(this.mem[(indice+1)*6-3])<<16n)|(BigInt(this.mem[(indice+1)*6-2])<<8n)|(BigInt(this.mem[(indice+1)*6-1])))}
asig(indice,valor){valor=BigInt(valor),
	this.mem[(indice+1)*6-6]=Number((valor&(0xffn<<40n))>>40n),this.mem[(indice+1)*6-5]=Number((valor&(0xffn<<32n))>>32n),this.mem[(indice+1)*6-4]=Number((valor&(0xffn<<24n))>>24n),
	this.mem[(indice+1)*6-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*6-2]=Number((valor&(0xffn<<8n))>>8n),this.mem[(indice+1)*6-1]=Number(valor&0xffn);
	return Number(valor&((1n<<48n)-1n))}
fill(valor,inicio,fin){valor=BigInt(valor);
	let MTX=[Number((valor&(0xffn<<40n))>>40n),Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),
		Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
		while(i<fin){this.mem[(i+1)*6-6]=MTX[0],this.mem[(i+1)*6-5]=MTX[1],this.mem[(i+1)*6-4]=MTX[2],this.mem[(i+1)*6-3]=MTX[3],this.mem[(i+1)*6-2]=MTX[4],this.mem[(++i)*6-1]=MTX[5];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Uint48Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class BigUint56Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%7==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 7',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*7)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigUint56Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigUint56Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigUint56Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigUint56Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/7}
get [Symbol.toStringTag](){return 'Uint56Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (BigInt(this.mem[(i+1)*6-6])<<40n)|(BigInt(this.mem[(i+1)*6-5])<<32n)|(BigInt(this.mem[(i+1)*6-4])<<24n)|(BigInt(this.mem[(i+1)*6-3])<<16n)|(BigInt(this.mem[(i+1)*6-2])<<8n)|(BigInt(this.mem[(++i)*6-1]))}}

//funciones que tendra heredadas a lo creado
pos(indice){return (BigInt(this.mem[(indice+1)*7-7])<<48n)|(BigInt(this.mem[(indice+1)*7-6])<<40n)|(BigInt(this.mem[(indice+1)*7-5])<<32n)|(BigInt(this.mem[(indice+1)*7-4])<<24n)|(BigInt(this.mem[(indice+1)*7-3])<<16n)|(BigInt(this.mem[(indice+1)*7-2])<<8n)|(BigInt(this.mem[(indice+1)*7-1]))}
asig(indice,valor){
	this.mem[(indice+1)*7-7]=Number((valor&(0xffn<<48n))>>48n),this.mem[(indice+1)*7-6]=Number((valor&(0xffn<<40n))>>40n),this.mem[(indice+1)*7-5]=Number((valor&(0xffn<<32n))>>32n),
	this.mem[(indice+1)*7-4]=Number((valor&(0xffn<<24n))>>24n),this.mem[(indice+1)*7-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*7-2]=Number((valor&(0xffn<<8n))>>8n),
	this.mem[(indice+1)*7-1]=Number(valor&0xffn);return valor&((1n<<56n)-1n)}
fill(valor,inicio,fin){
	let MTX=[Number((valor&(0xffn<<48n))>>48n),Number((valor&(0xffn<<40n))>>40n),Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),
		Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
		while(i<fin){this.mem[(i+1)*7-7]=MTX[0],this.mem[(i+1)*7-6]=MTX[1],this.mem[(i+1)*7-5]=MTX[2],this.mem[(i+1)*7-4]=MTX[3],this.mem[(i+1)*7-3]=MTX[4],this.mem[(i+1)*7-2]=MTX[5],this.mem[(++i)*7-1]=MTX[6];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigUint56Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}

//---------------------------------------------empiezan versiones Int-------------------------------------------

class Int24Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%3==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 3',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*3)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Int24Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Int24Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Int24Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Int24Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/3}
get [Symbol.toStringTag](){return 'Int24Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (((this.mem[(i+1)*3-3]&0x7f)<<16)|(this.mem[(i+1)*3-2]<<8)|(this.mem[(i+1)*3-1])*(1-2*((this.mem[(++i)*3-3]&0x80)>>7))}}

//funciones que tendra heredadas a lo creado
pos(indice){return (((this.mem[(indice+1)*3-3]&0x7f)<<16)|(this.mem[(indice+1)*3-2]<<8)|(this.mem[(indice+1)*3-1]))*(1-2*((this.mem[(indice+1)*3-3]&0x80)>>7))}

asig(indice,valor){if(valor<0){valor=((-valor)&0x7fffff)|0x800000}
	this.mem[(indice+1)*3-3]=(valor&(0xff<<16))>>16,
	this.mem[(indice+1)*3-2]=(valor&(0xff<<8))>>8,
	this.mem[(indice+1)*3-1]=valor&0xff;
	return (valor&0x7fffff)*(1-2*((valor&0x800000)>>23))}
fill(valor,inicio,fin){if(valor<0){valor=((-valor)&0x7fffff)|0x800000}
	let MTX=[(((valor&(0xff<<16))>>16)&0x7f)|(0x80*valor<0),(valor&(0xff<<8))>>8,valor&0xff],i=(inicio?inicio:0);fin=(fin?fin:this.length)
	while(i<fin){this.mem[(i+1)*3-3]=MTX[0],this.mem[(i+1)*3-2]=MTX[1],this.mem[(++i)*3-1]=MTX[2];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Int24Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class Int40Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%5==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 5',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*5)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Int40Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Int40Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Int40Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Int40Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/5}
get [Symbol.toStringTag](){return 'Int40Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield Number((BigInt((this.mem[(i+1)*5-5])&0x7f)<<32n)|(BigInt(this.mem[(i+1)*5-4])<<24n)|(BigInt(this.mem[(i+1)*5-3])<<16n)|(BigInt(this.mem[(i+1)*5-2])<<8n)|(BigInt(this.mem[(++i)*5-1])))}}

//funciones que tendra heredadas a lo creado
pos(indice){return Number((BigInt((this.mem[(indice+1)*5-5])&0x7f)<<32n)|(BigInt(this.mem[(indice+1)*5-4])<<24n)|
	(BigInt(this.mem[(indice+1)*5-3])<<16n)|(BigInt(this.mem[(indice+1)*5-2])<<8n)|(BigInt(this.mem[(indice+1)*5-1])))*(1-2*((this.mem[(indice+1)*5-5]&0x80)>>7))}

asig(indice,valor){valor=BigInt(valor);if(valor<0){valor=((-valor)&0x7fffffffffn)|0x8000000000n}
	this.mem[(indice+1)*5-5]=Number((valor&(0xffn<<32n))>>32n),this.mem[(indice+1)*5-4]=Number((valor&(0xffn<<24n))>>24n),
	this.mem[(indice+1)*5-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*5-2]=Number((valor&(0xffn<<8n))>>8n),this.mem[(indice+1)*5-1]=Number(valor&0xffn);
	return Number((valor&0x7fffffffffn)*(1n-2n*((valor&0x8000000000n)>>39n)))}

fill(valor,inicio,fin){valor=BigInt(valor);if(valor<0){valor=((-valor)&0x7fffffffffn)|0x8000000000n}let MTX=[Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
	while(i<fin){this.mem[(i+1)*5-5]=MTX[0],this.mem[(i+1)*5-4]=MTX[1],this.mem[(i+1)*5-3]=MTX[2],this.mem[(i+1)*5-2]=MTX[3],this.mem[(++i)*5-1]=MTX[4];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Int40Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class Int48Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%6==0){this.mem=new Int8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 6',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*6)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Int48Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Int48Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Int48Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Int48Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/6}
get [Symbol.toStringTag](){return 'Int48Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield Number((BigInt((this.mem[(i+1)*6-6])&0x7f)<<40n)|(BigInt(this.mem[(i+1)*6-5])<<32n)|
	(BigInt(this.mem[(i+1)*6-4])<<24n)|(BigInt(this.mem[(i+1)*6-3])<<16n)|(BigInt(this.mem[(i+1)*6-2])<<8n)|(BigInt(this.mem[(i+1)*6-1])))*(1-2*((this.mem[(++i)*6-6]&0x80)>>7))}}

//funciones que tendra heredadas a lo creado
pos(indice){return Number((BigInt((this.mem[(indice+1)*6-6])&0x7f)<<40n)|(BigInt(this.mem[(indice+1)*6-5])<<32n)|
	(BigInt(this.mem[(indice+1)*6-4])<<24n)|(BigInt(this.mem[(indice+1)*6-3])<<16n)|(BigInt(this.mem[(indice+1)*6-2])<<8n)|
	(BigInt(this.mem[(indice+1)*6-1])))*(1-2*((this.mem[(indice+1)*6-6]&0x80)>>7))}

asig(indice,valor){valor=BigInt(valor);if(valor<0){valor=((-valor)&0x7fffffffffffn)|0x800000000000n}
	this.mem[(indice+1)*6-6]=Number((valor&(0xffn<<40n))>>40n),this.mem[(indice+1)*6-5]=Number((valor&(0xffn<<32n))>>32n),this.mem[(indice+1)*6-4]=Number((valor&(0xffn<<24n))>>24n),
	this.mem[(indice+1)*6-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*6-2]=Number((valor&(0xffn<<8n))>>8n),this.mem[(indice+1)*6-1]=Number(valor&0xffn);
	return Number((valor&0x7fffffffffffn)*(1n-2n*((valor&0x800000000000n)>>47n)))}

fill(valor,inicio,fin){valor=BigInt(valor);if(valor<0){valor=((-valor)&0x7fffffffffffn)|0x800000000000n}
	let MTX=[Number((valor&(0xffn<<40n))>>40n),Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),
		Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
		while(i<fin){this.mem[(i+1)*6-6]=MTX[0],this.mem[(i+1)*6-5]=MTX[1],this.mem[(i+1)*6-4]=MTX[2],this.mem[(i+1)*6-3]=MTX[3],this.mem[(i+1)*6-2]=MTX[4],this.mem[(++i)*6-1]=MTX[5];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Int48Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?inicio:this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class BigInt56Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%7==0){this.mem=new Uint8Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 7',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new Uint8Array(a*7)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigInt56Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigInt56Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigInt56Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigInt56Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/7}
get [Symbol.toStringTag](){return 'BigInt56Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield ((BigInt((this.mem[(i+1)*7-7])&0x7f)<<48n)|
	(BigInt(this.mem[(ie+1)*7-6])<<40n)|(BigInt(this.mem[(i+1)*7-5])<<32n)|(BigInt(this.mem[(i+1)*7-4])<<24n)|(BigInt(this.mem[(i+1)*7-3])<<16n)|
	(BigInt(this.mem[(i+1)*7-2])<<8n)|(BigInt(this.mem[(i+1)*7-1])))*(1n-2n*((BigInt(this.mem[(++i)*7-7])&0x80n)>>7n))}}

//funciones que tendra heredadas a lo creado
pos(indice){return ((BigInt((this.mem[(indice+1)*7-7])&0x7f)<<48n)|
	(BigInt(this.mem[(indice+1)*7-6])<<40n)|(BigInt(this.mem[(indice+1)*7-5])<<32n)|
	(BigInt(this.mem[(indice+1)*7-4])<<24n)|(BigInt(this.mem[(indice+1)*7-3])<<16n)|
	(BigInt(this.mem[(indice+1)*7-2])<<8n)|(BigInt(this.mem[(indice+1)*7-1])))*(1n-2n*((BigInt(this.mem[(indice+1)*7-7])&0x80n)>>7n))}
asig(indice,valor){if(valor<0){valor=((-valor)&0x7fffffffffffffn)|0x80000000000000n}
	this.mem[(indice+1)*7-7]=Number((valor&(0xffn<<48n))>>48n),this.mem[(indice+1)*7-6]=Number((valor&(0xffn<<40n))>>40n),this.mem[(indice+1)*7-5]=Number((valor&(0xffn<<32n))>>32n),
	this.mem[(indice+1)*7-4]=Number((valor&(0xffn<<24n))>>24n),this.mem[(indice+1)*7-3]=Number((valor&(0xffn<<16n))>>16n),this.mem[(indice+1)*7-2]=Number((valor&(0xffn<<8n))>>8n),
	this.mem[(indice+1)*7-1]=Number(valor&0xffn);return (valor&0x7fffffffffffffn)*(1n-2n*((valor&0x80000000000000n)>>55n))}
fill(valor,inicio,fin){if(valor<0){valor=((-valor)&0x7fffffffffffffn)|0x80000000000000n}
	let MTX=[Number((valor&(0xffn<<48n))>>48n),Number((valor&(0xffn<<40n))>>40n),Number((valor&(0xffn<<32n))>>32n),Number((valor&(0xffn<<24n))>>24n),
		Number((valor&(0xffn<<16n))>>16n),Number((valor&(0xffn<<8n))>>8n),Number(valor&0xffn)],i=(inicio?inicio:0);fin=(fin?fin:this.length)
		while(i<fin){this.mem[(i+1)*7-7]=MTX[0],this.mem[(i+1)*7-6]=MTX[1],this.mem[(i+1)*7-5]=MTX[2],this.mem[(i+1)*7-4]=MTX[3],this.mem[(i+1)*7-3]=MTX[4],this.mem[(i+1)*7-2]=MTX[5],this.mem[(++i)*7-1]=MTX[6];}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigInt56Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}