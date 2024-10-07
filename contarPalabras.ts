import * as rs from "readline-sync";
const paragraph: string =
    "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

function howManyTextInPara(fullText: string, searchTerm: string): number {
    const paragraphLowerCase: string = fullText.toLowerCase();
    return paragraphLowerCase.split(searchTerm).length-1;
 }
const palabra: string = rs.question("Ingrese la palabra a buscar en el texto: ")
 const cantidad: number = howManyTextInPara(paragraph, palabra)
console.log(`La cantidad de veces que la palabra buscada aparece es: ${cantidad}`)