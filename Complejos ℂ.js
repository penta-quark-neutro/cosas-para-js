class complejos{//hecho por el pentaquark neutro y neutral auream
//operadores que retornan un nuevo vector o un numero
static suma(a,b){return [a[0]+b[0],a[1]+b[1]]}
static resta(a,b){return [a[0]-b[0],a[1]-b[1]]}
static multiplicacion(a,b){return [(a[0]*b[0])-a[1]*b[1],a[0]*b[1]+b[0]*a[1]]}
static divicion(a,b){const G=(b[0]**2)+(b[1]**2);return [((a[0]*b[0])+a[1]*b[1])/G,(b[0]*a[1]-a[0]*b[1])/G]}
static conjugado(a){return [a[0],-a[1]]}
static Ln(a){return [Math.log(Math.hypot(a[1],a[0])),Math.atan2(a[1],a[0])]}
static exp(a){const pa=Math.exp(a[0]);return [(Math.cos(a[1])*pa),(Math.sin(a[1])*pa)]}
static arg(a){return Math.atan2(a[1],a[0]);}
static validar(a){return (!isNaN(a[0])&&!isNaN(a[1]))}
static modulo(a){return (a[0]**2+a[1]**2)**0.5}
//operadores que modifican una salida
static s_suma(a,b,salida){salida[0]=a[0]+b[0],salida[1]=a[1]+b[1];}
static s_resta(a,b,salida){salida[0]=a[0]-b[0],salida[1]=a[1]-b[1];}
static s_multiplicacion(a,b,salida){salida[0]=(a[0]*b[0])-a[1]*b[1],salida[1]=a[0]*b[1]+b[0]*a[1];}
static s_divicion(a,b,salida){const G=(b[0]**2)+(b[1]**2);salida[0]=((a[0]*b[0])+a[1]*b[1])/G,salida[1]=(b[0]*a[1]-a[0]*b[1])/G;}
static s_conjugado(a,salida){salida[0]=a[0],salida[1]=-a[1];}
static s_Ln(a,salida){salida[0]=Math.log(Math.hypot(a[1],a[0])),salida[1]=Math.atan2(a[1],a[0]);}
static s_exp(a,salida){const pa=Math.exp(a[0]);salida[0]=(Math.cos(a[1])*pa),salida[1]=(Math.sin(a[1])*pa);}
//operadores que modifican a 'a'
static p_suma(a,b){a[0]+=b[0],a[1]+=b[1];}
static p_resta(a,b){a[0]-=b[0],a[1]-=b[1];}
static p_multiplicacion(a,b){[a[0],a[1]]=[(a[0]*b[0])-a[1]*b[1],a[0]*b[1]+b[0]*a[1]];}
static p_divicion(a,b){const G=(b[0]**2)+(b[1]**2);[a[0],a[1]]=[((a[0]*b[0])+a[1]*b[1])/G,(b[0]*a[1]-a[0]*b[1])/G];}
static p_conjugado(a){a[1]*=-1;}
static p_Ln(a){[a[0],a[1]]=[Math.log(Math.hypot(a[1],a[0])),Math.atan2(a[1],a[0])];}
static p_exp(a){const pa=Math.exp(a[0]);[a[0],a[1]]=[(Math.cos(a[1])*pa),(Math.sin(a[1])*pa)];}
}
//se espera que a y b sean objetos o cualquier clase de cosa con las propiedades '0' y '1' como los vectores, y que
//estas propiedades sean numeros como: [5,7] o {0:46,1:0}.
//para los operadores con salida se espera que la salida tenga las propiedades '0' y '1' esten disponibles o se puedan escribir.
//cuidado, de no sobre escribir algo importante o asignar la misma salida a 2 cosas sin pensarlo.