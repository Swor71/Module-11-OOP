function Button(text) {
	this.text = text || 'Hello!';
}

Button.prototype = {
	create: function(){
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function(){
			alert(self.text);
		});
		$('body').append(this.$element);
	}
};

var btn1 = new Button('Hi!');
var btn2 = new Button('Testing second button');
var btn3 = new Button('And the third');

btn1.create();
btn2.create();
btn3.create();