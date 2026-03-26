class Uint4Array {//hecho por el pentaquark neutro y neutral auream
	constructor(a) {
		if (a instanceof ArrayBuffer){this.mem=new Uint8Array(a)}
		else{if(typeof(a)=='number'){
			if((a%2==0)){this.mem=new Uint8Array(a/2)}else{throw new Error('El argumento debe ser un multiplo de 2',{cause:'valor entregado:'+a})}
		}else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint4Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint4Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint4Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint4Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length*2}
*[Symbol.toStringTag](){return 'Uint4Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (this.mem[i>>1]>>(4-4*(i++%2)))&0b1111}}

//funciones que tendra heredadas a lo creado
rempMem(uin8){if(uin8 instanceof Uint8Array){this.mem=uin8}else{throw new Error('se esperaba un Uint8Array')}}
pos(indice){if(indice+1>this.length){return undefined;}//a>>1 es como una divicion entera entre 2
	   return (this.mem[indice>>1]>>(4-4*(indice%2)))&0b1111}// el recuerdo de lo anterior if(indice%2==0){return no>>4}else{return no&0b00001111}
asig(indice,valor){if(indice+1>this.length){return valor&0b00001111;}let val=valor&0b00001111;
		this.mem[indice>>1]=(this.mem[indice>>1]&~(0b1111<<(4-4*(indice%2))))|(val<<(4-4*(indice%2)));return val}
	// adios a lo viejo if(indice%2==0){this.mem[indice>>1]=(no&0b00001111)|(val<<4)}else{this.mem[indice>>1]=(no&0b11110000)|val}return val}, tambien lo quite de fill
fill(valor,inicio,fin){let i=(inicio?inicio:0),val=valor&0b00001111;fin=(fin?fin:this.length);
	while(i<fin){this.mem[i>>1]=(this.mem[i>>1]&~(0b1111<<(4-4*(i%2))))|(val<<(4-4*(i++%2)))}}
random(){if(this.mem.length<=2**16){crypto.getRandomValues(this.mem)}else{
	let i=0;while(i<=Math.ceil(this.mem.length/(2**16))){crypto.getRandomValues(this.mem.subarray((2**16)*i,(2**16)*(1+(i++))))}}}
toHex(){return this.mem.toHex()}//junto a la base64 son bastante seguras de usar
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0);while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Uint4Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?parseFloat(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
subarray(inicio,fin){inicio=(!isNaN(inicio)?parseInt(inicio):0),fin=(!isNaN(fin)?parseInt(fin):this.length);if(!(inicio%2==0&&fin%2==0)){throw new Error('Los argumentos deben ser un multiplo de 2')}
let k=new Uint4Array(2);k.mem=this.mem.subarray(inicio>>1,fin>>1);return k;}
}
class Uint2Array {//hecho por el pentaquark neutro y neutral auream...
	constructor(a) {
		if (a instanceof ArrayBuffer){this.mem=new Uint8Array(a)}
		else{if(typeof(a)=='number'){
			if((a%4==0)){this.mem=new Uint8Array(a/4)}else{throw new Error('El argumento debe ser un multiplo de 4',{cause:'valor entregado:'+a})}
		}else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint2Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint2Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint2Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint2Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length*4}
*[Symbol.toStringTag](){return 'Uint2Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (this.mem[i>>2]>>(6-2*(i++%4)))&0b0011}}

//funciones que tendra heredadas a lo creado
rempMem(uin8){if(uin8 instanceof Uint8Array){this.mem=uin8}else{throw new Error('se esperaba un Uint8Array')}}
pos(indice){if(indice+1>this.length){return undefined;}//a>>2 es como una divicion entera entre 4
	return (this.mem[indice>>2]>>(6-2*(indice%4)))&0b0011}//que genial haber quitado el if
asig(indice,valor){if(indice+1>this.length){return valor&0b0011;}let val=valor&0b0011;
	this.mem[indice>>2]=(this.mem[indice>>2]&~(0b0011<<(6-2*(indice%4))))|(val<<(6-2*(indice%4)));return val}//que hermosa mejora, mejor que el otro metod0 con if
fill(valor,inicio,fin){let i=(inicio?inicio:0),val=valor&0b0011;fin=(fin?fin:this.length);
	while(i<fin){this.mem[i>>2]=(this.mem[i>>2]&~(0b0011<<(6-2*(i%4))))|(val<<(6-2*(i++%4)));}}
random(){if(this.mem.length<=2**16){crypto.getRandomValues(this.mem)}else{
	let i=0;while(i<=Math.ceil(this.mem.length/(2**16))){crypto.getRandomValues(this.mem.subarray((2**16)*i,(2**16)*(1+(i++))))}}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0);while(i<this.length){cad+=(','+this.pos(i++))}return cad;}//buu, repetido
map(funcion){let i=0,resul=new Uint2Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}//basicamente lo mismo otra vez
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?parseFloat(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
subarray(inicio,fin){inicio=(!isNaN(inicio)?parseInt(inicio):0),fin=(!isNaN(fin)?parseInt(fin):this.length);if(!(inicio%4==0&&fin%4==0)){throw new Error('Los argumentos deben ser un multiplo de 4')}
let k=new Uint2Array(4);k.mem=this.mem.subarray(inicio>>2,fin>>2);return k;}
}
class Uint1Array {//hecho por el pentaquark neutro y neutral auream...
	constructor(a) {
		if (a instanceof ArrayBuffer){this.mem=new Uint8Array(a)}
		else{if(typeof(a)=='number'){
			if((a%8==0)){this.mem=new Uint8Array(a/8)}else{throw new Error('El argumento debe ser un multiplo de 8',{cause:'valor entregado:'+a})}
		}else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Uint1Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Uint1Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Uint1Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Uint1Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length*8}
*[Symbol.toStringTag](){return 'Uint1Array'}
*[Symbol.iterator](){let i=0;while(i<this.length){yield (this.mem[i>>3]>>(7-(i++%8)))&1}}

//funciones que tendra heredadas a lo creado
rempMem(uin8){if(uin8 instanceof Uint8Array){this.mem=uin8}else{throw new Error('se esperaba un Uint8Array')}}
pos(indice){if(indice+1>this.length){return undefined;}//a>>3 es como una divicion entera entre 8
	return (this.mem[indice>>3]>>(7-indice%8))&1}//esta chiquito
asig(indice,valor){if(indice+1>this.length){return valor&1;}let val=valor&1;
	this.mem[indice>>3]=(this.mem[indice>>3]&~(1<<(7-(indice%8))))|(val<<(7-(indice%8)));return val}//casi sin cambios
fill(valor,inicio,fin){let i=inicio,val=valor&1;
	while(i<fin){this.mem[i>>3]=(this.mem[i>>3]&~(1<<(7-(i%8))))|(val<<(7-(i++%8)));}}
random(){if(this.mem.length<=2**16){crypto.getRandomValues(this.mem)}else{
	let i=0;while(i<=Math.ceil(this.mem.length/(2**16))){crypto.getRandomValues(this.mem.subarray((2**16)*i,(2**16)*(1+(i++))))}}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0);while(i<this.length){cad+=(''+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Uint1Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?parseFloat(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
subarray(inicio,fin){inicio=(!isNaN(inicio)?parseInt(inicio):0),fin=(!isNaN(fin)?parseInt(fin):this.length);if(!(inicio%8==0&&fin%8==0)){throw new Error('Los argumentos deben ser un multiplo de 8')}
let k=new Uint1Array(8);k.mem=this.mem.subarray(inicio>>3,fin>>3);return k;}
}
class Int4Array {//hecho por el pentaquark neutro y neutral auream... ...esta vez se va a optimisar un poquito mas, muy poquito...
	constructor(a) {
		if (a instanceof ArrayBuffer){this.mem=new Uint8Array(a)}
		else{if(typeof(a)=='number'){
			if((a%2==0)){this.mem=new Uint8Array(a/2)}else{throw new Error('El argumento debe ser un multiplo de 2',{cause:'valor entregado:'+a})}
		}else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Int4Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Int4Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Int4Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Int4Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length*2}
*[Symbol.toStringTag](){return 'Int4Array'}
*[Symbol.iterator](){let i=0,no;while(i<this.length){no=(this.mem[i>>1]>>(4-4*(i++%2)))&0b1111;yield (no&0b0111)*(1-2*(no>>3))}}

//funciones que tendra heredadas a lo creado
rempMem(uin8){if(uin8 instanceof Uint8Array){this.mem=uin8}else{throw new Error('se esperaba un Uint8Array')}}
pos(indice){if(indice+1>this.length){return undefined;}let no=(this.mem[indice>>1]>>(4-4*(indice%2)))&0b1111;
	   return (no&0b0111)*(1-2*(no>>3))}
asig(indice,valor){if(indice+1>this.length){return (valor*(1-2*(valor<0)))&0b0111|(0b1000*(valor<0));}let val=(valor*(1-2*(valor<0)))&0b0111|(0b1000*(valor<0));
		this.mem[indice>>1]=(this.mem[indice>>1]&~(0b1111<<(4-4*(indice%2))))|(val<<(4-4*(indice%2)));return val}
fill(valor,inicio,fin){let i=(inicio?inicio:0),val=(valor*(1-2*(valor<0)))&0b0111|(0b1000*(valor<0));fin=(fin?fin:this.length);
	while(i<fin){this.mem[i>>1]=(this.mem[i>>1]&~(0b1111<<(4-4*(i%2))))|(val<<(4-4*(i++%2)));}}
random(){if(this.mem.length<=2**16){crypto.getRandomValues(this.mem)}else{
	let i=0;while(i<=Math.ceil(this.mem.length/(2**16))){crypto.getRandomValues(this.mem.subarray((2**16)*i,(2**16)*(1+(i++))))}}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0);while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Int4Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?parseFloat(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
subarray(inicio,fin){inicio=(!isNaN(inicio)?parseInt(inicio):0),fin=(!isNaN(fin)?parseInt(fin):this.length);if(!(inicio%2==0&&fin%2==0)){throw new Error('Los argumentos deben ser un multiplo de 2')}
let k=new Int4Array(2);k.mem=this.mem.subarray(inicio>>1,fin>>1);return k;}
}
class Int2Array {//hecho por el pentaquark neutro y neutral auream...
	constructor(a) {
		if (a instanceof ArrayBuffer){this.mem=new Uint8Array(a)}
		else{if(typeof(a)=='number'){
			if((a%2==0)){this.mem=new Uint8Array(a/2)}else{throw new Error('El argumento debe ser un multiplo de 4',{cause:'valor entregado:'+a})}
		}else{throw new Error('el argumento debe ser un numero o ArrayBuffer',{cause:'tipo dado:'+typeof(a)})}}
	Object.defineProperties(this,{mem:{enumerable:false}});
	}
//metodos static de la clase
static fromHex(Hex){return new Int2Array(Uint8Array.fromHex(Hex).buffer)}
static fromBase64(Hex){return new Int2Array(Uint8Array.fromBase64(Hex).buffer)}
static fromDiv(iter){return new Int2Array(Uint8Array.from(iter).buffer)}
static from(iter){let i=0,k=new Int2Array(iter.length);while(i<iter.length){k.asig(i,iter[i++])}}

//aqui los get
get buffer(){return this.mem.buffer}
get byteLength(){return this.mem.byteLength}
get length(){return this.mem.length*2}
*[Symbol.toStringTag](){return 'Int2Array'}
*[Symbol.iterator](){let i=0,no;while(i<this.length){no=(this.mem[i>>2]>>(6-2*(i++%4)))&0b11;yield (no&1)*(1-2*(no>>1))}}

//funciones que tendra heredadas a lo creado
rempMem(uin8){if(uin8 instanceof Uint8Array){this.mem=uin8}else{throw new Error('se esperaba un Uint8Array')}}
pos(indice){if(indice+1>this.length){return undefined;}let no=(this.mem[indice>>2]>>(6-2*(indice%4)))&0b11;
	   return (no&1)*(1-2*(no>>1))}
asig(indice,valor){if(indice+1>this.length){return (valor*(1-2*(valor<0)))&1|(0b10*(valor<0));}let val=(valor*(1-2*(valor<0)))&1|(0b10*(valor<0));
		this.mem[indice>>1]=(this.mem[indice>>1]&~(0b11<<(6-2*(indice%4))))|(val<<(6-2*(indice%4)));return val}
fill(valor,inicio,fin){let i=(inicio?inicio:0),val=(valor*(1-2*(valor<0)))&1|(0b10*(valor<0));fin=(fin?fin:this.length);
	while(i<fin){this.mem[i>>1]=(this.mem[i>>1]&~(0b11<<(6-2*(i%4))))|(val<<(6-2*(i++%4)));}}
random(){if(this.mem.length<=2**16){crypto.getRandomValues(this.mem)}else{
	let i=0;while(i<=Math.ceil(this.mem.length/(2**16))){crypto.getRandomValues(this.mem.subarray((2**16)*i,(2**16)*(1+(i++))))}}}
toHex(){return this.mem.toHex()}
toBase64(){return this.mem.toBase64()}
toString(){let i=1,cad=this.pos(0);while(i<this.length){cad+=(','+this.pos(i++))}return cad;}
map(funcion){let i=0,resul=new Int2Array(this.length);while(i<this.length){resul.asig(i,funcion(this.pos(i),i++,this))}return resul;}
reduce(funcion,inicio){let i=0,cumulo=(!isNaN(inicio)?parseFloat(inicio):this.pos(i++));while(i<this.length){cumulo=funcion(cumulo,this.pos(i),i++,this)}return cumulo;}
subarray(inicio,fin){inicio=(!isNaN(inicio)?parseInt(inicio):0),fin=(!isNaN(fin)?parseInt(fin):this.length);if(!(inicio%2==0&&fin%2==0)){throw new Error('Los argumentos deben ser un multiplo de 2')}
let k=new Int2Array(2);k.mem=this.mem.subarray(inicio>>1,fin>>1);return k;}
}