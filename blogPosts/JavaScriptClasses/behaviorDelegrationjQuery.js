var Widget = {
  init: function(width, height) {
    this.width = width || 100;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function($where) {
    if (this.$elem) {
      this.$elem
        .css({
          width: this.width + "px",
          height: this.height + "px"
        })
        .appendTo($where);
    }
  }
};
console.log(Widget);
var Button = Object.create(Widget);
Button.setup = function(width, height, label) {
  // delegated call
  this.init(width, height);
  this.label = label || "Default";

  this.$elem = $("<button>").text(this.label);
};
Button.build = function($where) {
  // delegated call
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function(evt) {
  console.log("Button '" + this.label + "' clicked!");
};
console.log("==============BUTTON===================");
console.log(Button);
$(document).ready(function() {
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup("", "", "What hath");

  var btn2 = Object.create(Button);
  btn2.setup("", "", "God wrought?");

  btn1.build($("#jQueryTesting"));
  btn2.build($("#jQueryTesting"));
});
