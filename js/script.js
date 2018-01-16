function Phone(brand, type, screenWidth, price, color) {
	this.brand = brand;
	this.type = type;
	this.price = price;
	this.color = color;
	this.screenWidth = screenWidth;
};

Phone.prototype.printInfo = function() {
	console.log('This is ' + this.brand + ' ' + this.type + ' of ' + this.color + ' color, and it\'s price is ' + this.price + '.');
};

Phone.prototype.printScreenWidth = function () {
	console.log('The ' + this.brand + ' ' + this.type + ' screen width is: ' + this.screenWidth);
};

var iPhone6S = new Phone('Apple', 'iPhone6S', '8\"', 3000, 'black');
var samsungGalaxyS6 = new Phone('Samsung', 'Galaxy S6','7\"', 2500, 'silver');
var onePlusOne = new Phone('OnePlus', 'One', '9\"', 2000, 'gold');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

iPhone6S.printScreenWidth();
samsungGalaxyS6.printScreenWidth();
onePlusOne.printScreenWidth();