//=======Functions-Vertiefung-Level-1_1=====
//=======standart
// function intro1(){
//     return "Hello Function"
// }
// console.log(intro1());
//=========arrow
// const intor2 = () => "Hello Arro-Function";
// console.log(intor2());
//==========================================
//=======Functions-Vertiefung-Level-1_2=====
//Hello txt
// const sayHello = () => {
// console.log("Hello");
// };
// sayHello();
 //summe von zwei
// const addNumbers = (x, y) => {
// console.log(x + y);
// };
// const x = 2;
// const y = 3;
// addNumbers(x, y);
 //multi von zwei
// const multiplyNumbers = (x, y) => {
//     window.alert(x * y);
//     console.log(x * y)
// };
// multiplyNumbers(2, y);
 //paramenter
// function zeigeTyp(element) {
//     console.log(typeof element);
// }

 // Teste die Funktion mit verschiedenen Variablen
// let i = true;
// let j = "hi";
// let k = 1;
// let l = { name: "John" };
// let a = [0, 1];

// zeigeTyp(i); // "boolean"
// zeigeTyp(j); // "string"
// zeigeTyp(k); // "number"
// zeigeTyp(l); // "object"
// zeigeTyp(a); // "object" (Array ist ein spezieller Typ von Object)
//==========================================
//=======Functions-Vertiefung-Level-1_4=====
const hero = (heroName,heroPower,heroEnemy) => {
    const name = `Mein Lieblings Held ist: ${heroName}` ;
    const power = `Er hat die fähigkeit: ${heroPower}`;
    const enemy = `Sein grösster gegner ist: ${heroEnemy}`;
    console.log(name + '\n' + power + '\n' + enemy);
}
hero('Batman ','Ultramoney ','Joker ');