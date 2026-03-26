function Rotacion(a,b,c,grrad=0.01745329251994329576923690768489){let cos=Math.cos((-c)*grrad),sen=Math.sin((-c)*grrad),
matriz=[cos+(b[0]**2)*(1-cos),b[0]*b[1]*(1-cos)-b[2]*sen,b[0]*b[2]*(1-cos)+b[1]*sen,
	b[1]*b[0]*(1-cos)+b[2]*sen,cos+(b[1]**2)*(1-cos),b[1]*b[2]*(1-cos)-b[0]*sen,
	b[2]*b[0]*(1-cos)-b[1]*sen,b[2]*b[1]*(1-cos)+b[0]*sen,cos+(b[2]**2)*(1-cos)],i=0,nv=Array.from(a);
while(i<a.length){nv[i]=[nv[i][0]*matriz[0]+nv[i][1]*matriz[3]+nv[i][2]*matriz[6],
			 nv[i][0]*matriz[1]+nv[i][1]*matriz[4]+nv[i][2]*matriz[7],
			 nv[i][0]*matriz[2]+nv[i][1]*matriz[5]+nv[i++][2]*matriz[8]];
}return nv;}//por el pentaquark neutro y neutral auream

//aqui "a" es una lista de vectores con formato [[x,y,z],[x,y,z],...]
//"b" es un vector unitario como eje de rotacion como [1,0,0]
//"c" son los grados de rotacion
//esto esta basado en rotacion de vectores con una matriz, esto es eficiente para muchos vectores que se tengan que rotar igual
//te dara como resultado un nuevo Array, pero es facil de cambiar para que modifique el original u otro, para ser mas eficiente