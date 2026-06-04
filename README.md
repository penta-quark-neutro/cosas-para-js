# cosas-para-js
no lo llamaría útiles, pero puede que cosas aquí sean interesantes o medianamente útiles.
lo aqui presente en parte son solo ideas o cosas creadas porque si, sientete libre de usar
estos archivos, y se agradece mencion pero no es nesesaria.
como mucho aqui no esta optimisado, o muy legible, recomiendo que lo refactorises a tu
entendimiento y necesidades.

¿sientes una chispa de inspiracion o no te gusta lo que ves?
si, es feo.
no tomes muy en cerio este repositorio mal escrito.
# contenido
### Complejos ℂ
esta hecha como una clase solo con metodos static.
maneja las operaciones basicas (+,-,*,/,Ln,e^z,||z||,arg(z),conjugado(z)).
lo maneja en 3 modalidades:
* creacion de nuevos vectores
* el resultado se almacena en vector apuntado
* el primer vector dado es modificado
opera con vectores de tamaño 2, donde seria [re,im]
### Cuateniones ℍ
esta hecha como una clase solo con metodos static.
maneja las operaciones basicas (+,-,*,/,Ln,e^z,||z||,conjugado(z)).
lo maneja en 3 modalidades:
* creacion de nuevos vectores
* el resultado se almacena en vector apuntado
* el primer vector dado es modificado
opera con vectores de tamaño 4, donde seria [re,i,j,k]
### Octaniones 𝕆
esta hecha como una clase solo con metodos static.
maneja las operaciones basicas (+,-,*,/,Ln,e^z,||z||,conjugado(z)).
lo maneja en 3 modalidades:
* creacion de nuevos vectores
* el resultado se almacena en vector apuntado
* el primer vector dado es modificado
opera con vectores de tamaño 8, donde seria [e0,e1,e2,e3,e4,e5,e6,e7]
debo apuntar que el algoritmo de multiplicacion y divicion no es el mas optimo posible.
### Sedeniones 𝕊
esta hecha como una clase solo con metodos static.
maneja las operaciones basicas (+,-,*,conjugado(z)).
lo maneja en 3 modalidades:
* creacion de nuevos vectores
* el resultado se almacena en vector apuntado
* el primer vector dado es modificado
opera con vectores de tamaño 16, donde seria [e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15]
debo apuntar que el algoritmo de multiplicacion no es el mas optimo, y la divicion no se introdujo por ser un algebra con
un espacio no normado, por lo que no aplique la definicion para dividir que depende de la norma.
### Rotador de vectores R3
rota vectores R3 de una lista
### TypedArray +128
es una ampliacion que para añadir:
* BigUint128Array
* BigUint256Array
* BigUint512Array
* BigUint1024Array
* BigUint2048Array

no son directamente TypedArrays, pero pueden ser utiles bajo ciertas condiciones.
### TypedArray 4,2 y 1
añade una ampliacion como lo anterior.
* Uint4Array, Uint2Array y Uint1Array, funcionan normalmente
* Int4Array e Int2Array, no usan complemento a 2, por lo que son simetricos a valores negativos y positivos

### TypedArray 24,40,48,56
añade una ampliacion como lo anterior.
* Uint24Array, Uint40Array, Uint48Array, BigUint56Array
* Int24Array, Int40Array, Int48Array, BigInt56Array

### cadena de markov
añade clases, para ejecutar cadenas de markov.
son basicas por el momento.
