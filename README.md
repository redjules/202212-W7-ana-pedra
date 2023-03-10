<img align="right" width="179" height="118" alt="ISDI CODER LOGO" src="/dist/assets/isdi_logo_hq.jpg">

# :zap: Challenge Week 7

## GoT DOM

Programar un interfaz de usuario que refleje el siguiente modelo de datos:

En **_"Juego de Tronos"_** existen personajes. Todos esos personajes tienen la siguiente informaci贸n:

| ICONO |  NOMBRE  | APELLIDO  |        ROL         |
| :---: | :------: | :-------: | :----------------: |
|  馃憫   | Joffrey  | Baratheon |        Rey         |
|   馃棥   |  Jaime   | Lannister |      Luchador      |
|   馃棥   | Daenerys | Targaryen |     Luchadora      |
|  馃帗   |  Tyrion  | Lannister | Asesor de Daenerys |
|   馃洝   |  Bronn   |     -     | Escudero de Jaime  |

- Nombre
- Familia a la que pertenece
- Edad
- Estado (vivo o muerto, aunque inicialmente todos est谩n vivos)

Todos los personajes pueden hacer lo siguiente:

- Realizar la acci贸n de comunicar, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto. **_Nota:_** este m茅todo devuelve el string con la frase, no imprime por consola.
- Realizar la acci贸n de morir, cambi谩ndose su estado a muerto.
- Pertenecen a la misma serie, **_"Juego de Tronos"_**.

Cada uno de esos personajes puede ser un rey, un luchador, un asesor, o un escudero.

- Un rey, adem谩s de la informaci贸n que tiene por ser personaje, tiene la siguiente informaci贸n:

  - A帽os de reinado
  - Cuando se comunica dice: _"Vais a morir todos"_

- Un luchador, adem谩s de la informaci贸n que tiene por ser personaje, tiene la siguiente informaci贸n:

  - Arma que usa
  - Destreza (un valor entre 0 y 10)
  - Cuando se comunica dice: _"Primero pego y luego pregunto"_

- Un asesor, adem谩s de la informaci贸n que tiene por ser personaje, tiene la siguiente informaci贸n:

  - Personaje al que asesora (que puede ser rey, luchador, asesor o escudero)
  - Cuando se comunica dice: _"No s茅 por qu茅, pero creo que voy a morir pronto"_

- Un escudero, adem谩s de la informaci贸n que tiene por ser personaje, tiene la siguiente informaci贸n:
  - Personaje al que sirve (que s贸lo puede ser luchador)
  - Grado de pelotismo (un valor entre 0 y 10)
  - Cuando se comunica dice: _"Soy un loser"_

## Reglas

Crea los siguientes archivos JS y haz que funcionen como m贸dulos mediante import y export:

- [x] `personaje.js`, `rey.js`, `luchador.js`, `asesor.js`, `escudero.js` (mete dentro cada clase)
- [x] `personajes.js` (crea dentro un array con los personajes.
- [x] `index.js` (aqu铆 va todo el resto del enunciado, y 茅ste ser谩 el punto de entrada)

## Requisitos

- [x] Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:
  - En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje: 馃憫 馃棥 馃帗 馃洝
  - Si el personaje est谩 muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
  - En la lista con clase `metadata`, haz que s贸lo aparezcan los `li` correspondientes al personaje.
- [x] Cuando el usuario haga clic en el bot贸n _"muere"_, tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
- [x] Cuando el usuario haga clic en el bot贸n _"habla"_, el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.

## Netlify 
https://week7-ana-pedra.netlify.app/
