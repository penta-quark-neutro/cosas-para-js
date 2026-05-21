class BigUint128Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%16==0){this.mem=new BigUint64Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 16',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new BigUint64Array(a*2)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigUint128Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigUint128Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigUint128Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigUint128Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/2}
get [Symbol.toStringTag](){return 'BigUint128Array'}
*[Symbol.iterator](){let i=1;while(i<this.length){yield (this.mem[(i*2)-2]<<64n)|this.mem[(i*2)-1]}}

//funciones que tendra heredadas a lo creado
pos(indice){if(indice+1>this.length){return undefined;}
	return ((this.mem[((indice+1)*2)-2])<<64n)|this.mem[((indice+1)*2)-1]}
asig(indice,valor){if(indice+1>this.length){return valor}
	this.mem[((indice+1)*2)-2]=(valor>>64n)&0xffffffffffffffffn,this.mem[((indice+1)*2)-1]=valor&0xffffffffffffffffn;return valor;}
fill(valor,inicio,fin){let i=(inicio?inicio:0),region=[(valor>>64n)&0xffffffffffffffffn,valor&0xffffffffffffffffn];fin=(fin?fin:this.length);
	while(i<fin){this.mem[((i+1)*2)-2]=region[0],this.mem[((1+i++)*2)-1]=region[1];}}
toHex(){return (new Uint8Array(this.mem.buffer)).toHex()}
toBase64(){return (new Uint8Array(this.mem.buffer)).toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigUint128Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class BigUint256Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%32==0){this.mem=new BigUint64Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 32',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new BigUint64Array(a*4)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigUint256Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigUint256Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigUint256Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigUint256Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/4}
get [Symbol.toStringTag](){return 'BigUint256Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield ((this.mem[((i+1)*4)-4])<<192n)|((this.mem[((i+1)*4)-3])<<128n)|((this.mem[((i+1)*4)-2])<<64n)|(this.mem[((1+i++)*4)-1])}}

//funciones que tendra heredadas a lo creado
pos(indice){if(indice+1>this.length){return undefined;}
	return ((this.mem[((indice+1)*4)-4])<<192n)|((this.mem[((indice+1)*4)-3])<<128n)|((this.mem[((indice+1)*4)-2])<<64n)|(this.mem[((indice+1)*4)-1])}
asig(indice,valor){if(indice+1>this.length){return valor}
	this.mem[((indice+1)*4)-4]=(valor>>192n)&0xffffffffffffffffn,this.mem[((indice+1)*4)-3]=(valor>>128n)&0xffffffffffffffffn,
	this.mem[((indice+1)*4)-2]=(valor>>64n)&0xffffffffffffffffn,this.mem[((indice+1)*4)-1]=valor&0xffffffffffffffffn;return valor;}
fill(valor,inicio,fin){let i=(inicio?inicio:0),region=[(valor>>192n)&0xffffffffffffffffn,(valor>>128n)&0xffffffffffffffffn,(valor>>64n)&0xffffffffffffffffn,valor&0xffffffffffffffffn];fin=(fin?fin:this.length);
	while(i<fin){this.mem[((i+1)*4)-4]=region[0],this.mem[((i+1)*4)-3]=region[1],this.mem[((i+1)*4)-2]=region[2],this.mem[((1+i++)*4)-1]=region[3]}}
toHex(){return (new Uint8Array(this.mem.buffer)).toHex()}
toBase64(){return (new Uint8Array(this.mem.buffer)).toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigUint256Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class BigUint512Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%64==0){this.mem=new BigUint64Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 64',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new BigUint64Array(a*8)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigUint512Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigUint512Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigUint512Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigUint512Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/8}
get [Symbol.toStringTag](){return 'BigUint512Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield ((this.mem[((i+1)*8)-8])<<448n)|((this.mem[((i+1)*8)-7])<<384n)|((this.mem[((i+1)*8)-6])<<320n)|((this.mem[((i+1)*8)-5])<<256n)|
							((this.mem[((i+1)*8)-4])<<192n)|((this.mem[((i+1)*8)-3])<<128n)|((this.mem[((i+1)*8)-2])<<64n)|(this.mem[((1+i++)*8)-1])}}
//funciones que tendra heredadas a lo creado
pos(indice){if(indice+1>this.length){return undefined;}
	return ((this.mem[((indice+1)*8)-8])<<448n)|((this.mem[((indice+1)*8)-7])<<384n)|((this.mem[((indice+1)*8)-6])<<320n)|((this.mem[((indice+1)*8)-5])<<256n)|
		((this.mem[((indice+1)*8)-4])<<192n)|((this.mem[((indice+1)*8)-3])<<128n)|((this.mem[((indice+1)*8)-2])<<64n)|(this.mem[((indice+1)*8)-1])}
asig(indice,valor){if(indice+1>this.length){return valor}
	this.mem[((indice+1)*8)-8]=(valor>>448n)&0xffffffffffffffffn,this.mem[((indice+1)*8)-7]=(valor>>384n)&0xffffffffffffffffn,
	this.mem[((indice+1)*8)-6]=(valor>>320n)&0xffffffffffffffffn,this.mem[((indice+1)*8)-5]=(valor>>256n)&0xffffffffffffffffn,
	this.mem[((indice+1)*8)-4]=(valor>>192n)&0xffffffffffffffffn,this.mem[((indice+1)*8)-3]=(valor>>128n)&0xffffffffffffffffn,
	this.mem[((indice+1)*8)-2]=(valor>>64n)&0xffffffffffffffffn,this.mem[((indice+1)*8)-1]=valor&0xffffffffffffffffn;return valor;}
fill(valor,inicio,fin){let i=(inicio?inicio:0),
	region=[(valor>>448n)&0xffffffffffffffffn,(valor>>384n)&0xffffffffffffffffn,(valor>>320n)&0xffffffffffffffffn,(valor>>256n)&0xffffffffffffffffn,
		(valor>>192n)&0xffffffffffffffffn,(valor>>128n)&0xffffffffffffffffn,(valor>>64n)&0xffffffffffffffffn,valor&0xffffffffffffffffn];fin=(fin?fin:this.length);
	while(i<fin){this.mem[((i+1)*8)-8]=region[0],this.mem[((i+1)*8)-7]=region[1],this.mem[((i+1)*8)-6]=region[2],this.mem[((1+i)*8)-5]=region[3],
			this.mem[((i+1)*8)-4]=region[4],this.mem[((i+1)*8)-3]=region[5],this.mem[((i+1)*8)-2]=region[6],this.mem[((1+i++)*8)-1]=region[7]}}
toHex(){return (new Uint8Array(this.mem.buffer)).toHex()}
toBase64(){return (new Uint8Array(this.mem.buffer)).toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigUint512Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}
class BigUint1024Array{//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){if(a.byteLength%128==0){this.mem=new BigUint64Array(a)}else{throw new Error('el ArrayBuffer debe tener un byteLength multiplo de 128',{cause:'byteLength:'+a.byteLength})}}
		else{if(typeof(a)=='number'){this.mem=new BigUint64Array(a*16)}
			else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new BigUint1024Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new BigUint1024Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new BigUint1024Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new BigUint1024Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length/16}
get [Symbol.toStringTag](){return 'BigUint1024Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield ((this.mem[((i+1)*16)-16])<<960n)|((this.mem[((i+1)*16)-15])<<896n)|((this.mem[((i+1)*16)-14])<<832n)|((this.mem[((i+1)*16)-13])<<768n)|
							((this.mem[((i+1)*16)-12])<<704n)|((this.mem[((i+1)*16)-11])<<640n)|((this.mem[((i+1)*16)-10])<<576n)|((this.mem[((i+1)*16)-9])<<512n)|
							((this.mem[((i+1)*16)-8])<<448n)|((this.mem[((i+1)*16)-7])<<384n)|((this.mem[((i+1)*16)-6])<<320n)|((this.mem[((i+1)*16)-5])<<256n)|
							((this.mem[((i+1)*16)-4])<<192n)|((this.mem[((i+1)*16)-3])<<128n)|((this.mem[((i+1)*16)-2])<<64n)|(this.mem[((1+i++)*16)-1])}}
//funciones que tendra heredadas a lo creado
pos(indice){if(indice+1>this.length){return undefined;}indice=(indice+1)*16;
	return ((this.mem[indice-16])<<960n)|((this.mem[indice-15])<<896n)|((this.mem[indice-14])<<832n)|((this.mem[indice-13])<<768n)|
		((this.mem[indice-12])<<704n)|((this.mem[indice-11])<<640n)|((this.mem[indice-10])<<576n)|((this.mem[indice-9])<<512n)|
		((this.mem[indice-8])<<448n)|((this.mem[indice-7])<<384n)|((this.mem[indice-6])<<320n)|((this.mem[indice-5])<<256n)|
		((this.mem[indice-4])<<192n)|((this.mem[indice-3])<<128n)|((this.mem[indice-2])<<64n)|(this.mem[indice-1])}
asig(indice,valor){if(indice+1>this.length){return valor}indice=(indice+1)*16;
	this.mem[indice-16]=(valor>>960n)&0xffffffffffffffffn,this.mem[indice-15]=(valor>>896n)&0xffffffffffffffffn,
	this.mem[indice-14]=(valor>>832n)&0xffffffffffffffffn,this.mem[indice-13]=(valor>>768n)&0xffffffffffffffffn,
	this.mem[indice-12]=(valor>>704n)&0xffffffffffffffffn,this.mem[indice-11]=(valor>>640n)&0xffffffffffffffffn,
	this.mem[indice-10]=(valor>>576n)&0xffffffffffffffffn,this.mem[indice-9]=(valor>>512n)&0xffffffffffffffffn,
	this.mem[indice-8]=(valor>>448n)&0xffffffffffffffffn,this.mem[indice-7]=(valor>>384n)&0xffffffffffffffffn,
	this.mem[indice-6]=(valor>>320n)&0xffffffffffffffffn,this.mem[indice-5]=(valor>>256n)&0xffffffffffffffffn,
	this.mem[indice-4]=(valor>>192n)&0xffffffffffffffffn,this.mem[indice-3]=(valor>>128n)&0xffffffffffffffffn,
	this.mem[indice-2]=(valor>>64n)&0xffffffffffffffffn,this.mem[indice-1]=valor&0xffffffffffffffffn;return valor;}
fill(valor,inicio,fin){let i=(inicio?inicio:0),
	region=[(valor>>960n)&0xffffffffffffffffn,(valor>>896n)&0xffffffffffffffffn,(valor>>832n)&0xffffffffffffffffn,(valor>>768n)&0xffffffffffffffffn,
		(valor>>704n)&0xffffffffffffffffn,(valor>>640n)&0xffffffffffffffffn,(valor>>576n)&0xffffffffffffffffn,(valor>>512n)&0xffffffffffffffffn,
		(valor>>448n)&0xffffffffffffffffn,(valor>>384n)&0xffffffffffffffffn,(valor>>320n)&0xffffffffffffffffn,(valor>>256n)&0xffffffffffffffffn,
		(valor>>192n)&0xffffffffffffffffn,(valor>>128n)&0xffffffffffffffffn,(valor>>64n)&0xffffffffffffffffn,valor&0xffffffffffffffffn];fin=(fin?fin:this.length);
	while(i<fin){this.mem[((i+1)*16)-16]=region[0],this.mem[((i+1)*16)-15]=region[1],this.mem[((i+1)*16)-14]=region[2],this.mem[((1+i)*16)-13]=region[3],
			this.mem[((i+1)*16)-12]=region[4],this.mem[((i+1)*16)-11]=region[5],this.mem[((i+1)*16)-10]=region[6],this.mem[((1+i)*16)-9]=region[7],
			this.mem[((i+1)*16)-8]=region[8],this.mem[((i+1)*16)-7]=region[9],this.mem[((i+1)*16)-6]=region[10],this.mem[((i+1)*16)-5]=region[11],
			this.mem[((i+1)*16)-4]=region[12],this.mem[((i+1)*16)-3]=region[13],this.mem[((i+1)*16)-2]=region[14],this.mem[((1+i++)*16)-1]=region[15]}}
toHex(){return (new Uint8Array(this.mem.buffer)).toHex()}
toBase64(){return (new Uint8Array(this.mem.buffer)).toBase64()}
toString(){let i=1,cad=this.pos(0).toString();while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new BigUint1024Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?BigInt(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
}