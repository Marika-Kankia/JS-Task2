//1.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.


function integer(a){
	if(a%2==0){
		return true;
	}
		return false;

}
//2.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.


function Area(lenght,width){
	return lenght*width;

};

let lenght=4;
let width=7;
console.log('Area is' + Area(lenght,width));

//3.დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.


function AreaOfSquare(d){
	return d*d;

};

let d=6;
console.log('Area is' + AreaOfSquare(d));



//4.დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function getRandom() {
    return Math.floor(Math.random() * 101);

};

//5.დაწერეთ ფუნქცია, რომელიც მიიღებს ორ რიცხვს პარამეტრად (a, b)  და დააბრუნებს შემთხვევით რიცხვს a -დან b -მდე შუალედში.


function getRandom(a,b) {
	 return Math.random() * (b - a) + a;
}

//6.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს: "boy" ან "girl" და დააბრუნებს 10 გოგოს ან ბიჭის სახელიდან ერთ-ერთს შემთხვევითად. (სახელები ჩაწერილი იქნება მასივში ამავე ფუნქციაში. კარგი იქნება გამოიყენოთ #5 პუნქტში დაწერილი ფუნქცია).

function list() {
    let girlsnames= ['Lika','Salome','Lana','Maka','Tamuna','Elena','Ana','Tika','Megi','Ia'];
    let boysnames = ['Nika','Giorgi','Vaso','Lasha','Oto','Tornike','Levani','Luka','Makho','Erekle'];
    // let random=Math.floor(Math.random()*girls.lenght);
    // return girls[Math.floor(random*1000)%girls.lenght];
    return girls[Math.floor(Math.random()*girlsnames.lenght)]
};





//7.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს წელს (მაგალითად 2021) და დააბრუნებს true-ს თუ ეს წელი არის ნაკიანი ან false-ს წინააღმდეგ შემთხვევაში.


function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

//8.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს მართკუთხა პარალელეპიპედის გვერდების ზომებს და სიმაღლეს (a, b, c) და დააბრუნებს ფიგურის მოცულობას. მოცულობის გამოსათვლელად დაიხმარეთ #2 პუნქტში დაწერილი ფუნქცია.


function volume(m,n,h){
	return m*n*h;
}
let m=2,n=4,h=5;
console.log('volume is'+ volume(m,n,h));

//9.დაწერეთ რეკურსიული ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b), რეკურსიის გამოყენებით შეამოწმებს ყველა რიცხვს a დან b მდე და დალოგავს მხოლოდ კენტ რიცხვებს. (გამოიყენეთ #1 პუნქტში დაწერილი ფუნქცია)



//10* დაწერეთ რეკურსიული ფუნქცია, რომელიც პარამეტრებად მიიღებს ორ რიცხვს (x, y) და დააბრუნებს x ხარისხად y -ს. მაგალითად თუ ფუნქციამ მიიღო პარამეტრად 2 და 5 უნდა დააბრუნოს 2 -ს მეხუთე ხარისხი ანუ 32. გამოიყენეთ რეკურსია.



let power = function(x,y) {
    if(y === 0) {
        return 1;
    }

    if(y < 0) {
        return 1 / (power(x, abs(y)));
    }

    return x * power(x, y-1);
}
   let x=2,y=3;
   console.log(power(x,y));