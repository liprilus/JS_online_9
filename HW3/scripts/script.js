const task1 = "Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz."
console.log(task1);

for (let i = 0; i < 10; i++){
    if (i%3===0) {
        console.log(`i = ${i}  FizBuz`);
    }
    else if (i%2===0){
        console.log(`i = ${i}  Fiz`);
    }
    else console.log(`i = ${i}  Buz`);
}

const task2 = "Написати логіку знаходження факторіалу числа 10.";
console.log(task2);
let fact = 1;
for (i = 1; i <= 10; i++){
    fact *= i
}
console.log(`10! = 1x2x3x4x5x6x7x8x9x10 = ${fact}`);

const task3 = "У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?";
console.log(task3);
const sheets = 500;
const sheetsPerWeek = 1200;
const numberOfWeeks = 8;
console.log(`Найменша кількість пачок, яку необхідно придбати на ${numberOfWeeks} тижнів дорівнює ${Math.ceil(sheetsPerWeek*numberOfWeeks/sheets)}.`);

const task4 = "Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3";
console.log(task4);
let apartNumber = 73;
function apartments (x){
    const floors = 9;
    const apartPerFloor = 3;
    console.log (`numer of apartment - ${x}`);
    let apartEntr = Math.ceil(x/(floors*apartPerFloor));
    let apartFloor = Math.ceil((x - (apartEntr-1)*floors*apartPerFloor)/apartPerFloor);
    console.log(`Number of floor - ${apartFloor}, number of entrance - ${apartEntr}`);   
}
apartments(apartNumber);

const task5 = " Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків";
console.log(task5);
const lines = 7;
let basis = lines*2-1;
for (let i = 0; i < lines; i++){
    let a ='';
    for (let j = 0; j < basis; j++){ 
         if (j >= lines - i - 1 && j <= basis - lines + i){
            a += `${String.fromCharCode(2017,32)}`;// fromCharCode использован ислючительно из любопытства. смотрел методы Стринга.
            // a += `${String.fromCharCode(111,32)}`; //раскомментить, если символ строчкой выше не нравится.
        }   
        else {
            a += `${String.fromCharCode(32,32)}`;
        }      
    }
    console.log(a);
}
