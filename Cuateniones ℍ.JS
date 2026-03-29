class cuaterniones{//hecho por el pentaquark neutro y neutral auream 
//retornan un nuevo vector o un numero
static suma(a,b){return [a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3]]}
static resta(a,b){return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]]}
static multiplicacion(v1,v2){return [
((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),
((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),
((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),
((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]))];}
static divicion(v1,v2){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);return [
((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,
((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,
((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,
((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo];}
static conjugado(a){return [a[0],-a[1],-a[2],-a[3]]}
static Ln(V){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(V[0],V[1],v[2],V[3]);return [Math.log(Math.hypot(V[0],V[1],v[2],V[3])),(V[1]/M*c),(V[2]/M*c),(V[3]/M*c)]}
static exp(V){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);return [(Math.exp(V[0])*Math.cos(r)),srad*V[1],srad*V[2],srad*V[3]]}
static validar(a){return (!isNaN(a[0])&&!isNaN(a[1])&&!isNaN(a[2])&&!isNaN(a[3]))}
static modulo(a){return (V[0]**2+V[1]**2+V[2]**2+V[3]**2)**0.5}
//modifican una salida
static s_suma(a,b,salida){salida[0]=a[0]+b[0],salida[1]=a[1]+b[1],salida[2]=a[2]+b[2],salida[3]=a[3]+b[3]}
static s_resta(a,b,salida){salida[0]=a[0]-b[0],salida[1]=a[1]-b[1],salida[2]=a[2]-b[2],salida[3]=a[3]-b[3]}
static s_multiplicacion(v1,v2,salida){
salida[0]=((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),
salida[1]=((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),
salida[2]=((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),
salida[3]=((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]));}
static s_divicion(v1,v2,salida){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);
salida[0]=((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,
salida[1]=((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,
salida[2]=((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,
salida[3]=((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo;}
static s_conjugado(a,salida){salida[0]=a[0],salida[1]=-a[1],salida[2]=-a[2],salida[3]=-a[3]}
static s_Ln(V,salida){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(V[0],V[1],v[2],V[3]));salida[0]=Math.log(Math.hypot(V[0],V[1],v[2],V[3])),salida[1]=(V[1]/M*c),salida[2]=(V[2]/M*c),salida[3]=(V[3]/M*c)}
static s_exp(V,salida){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);salida[0]=(Math.exp(V[0])*Math.cos(r)),salida[1]=srad*V[1],salida[2]=srad*V[2],salida[3]=srad*V[3]}
//modifican al primer vector
static p_suma(a,b){[a[0],a[1],a[2],a[3]]=[a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3]]}
static p_resta(a,b){[a[0],a[1],a[2],a[3]]=[a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]]}
static p_multiplicacion(v1,v2){[v1[0],v1[1],v1[2],v1[3]]=[
((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),
((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),
((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),
((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]))];}
static p_divicion(v1,v2){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);[v1[0],v1[1],v1[2],v1[3]]=[
((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,
((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,
((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,
((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo];}
static p_conjugado(a){[a[1],a[2],a[3]]=[-a[1],-a[2],-a[3]]}
static p_Ln(V){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(V[0],V[1],v[2],V[3]);[V[0],V[1],V[2],V[3]]=[Math.log(Math.hypot(V[0],V[1],v[2],V[3])),(V[1]/M*c),(V[2]/M*c),(V[3]/M*c)]}
static p_exp(V){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);[V[0],V[1],V[2],V[3]]=[(Math.exp(V[0])*Math.cos(r)),srad*V[1],srad*V[2],srad*V[3]]}
}
//se espera que las entredas tengan 4 espacios como:[4,53,12,0] o {0:10,1:0,2:81,3:-5}
//recomiendo que si le daran Array o TypedArrays a estas operaciones, eso no varie para que el compilador JS optimice mejor las operaciones.