(function (root) {
  var NN = root.NN = (root.NN || {});

  NN.Name = Name = function (fname, lname) {
    this.fname = fname;
    this.lname = lname;
  };

  NN.Name.names = [];

  Name.prototype.render = function () {
    return this.fname + " " + this.lname;
  };

  NN.NameWidget = NameWidget = function (div) {
    this.$promptEl = div.find(".prompt");
    this.$inputEl = div.find(".input");
    this.$submitEl = div.find(".submit");
    this.$contentEl = div.find(".content");
  };

  NameWidget.prototype.installFirstNameHandler = function () {
    this.$promptEl.text("Enter First Name!");
    this.$submitEl.off('click');

    this.$submitEl.on(
      "click", this.handleFirstNameClick.bind(this)
    );
  };

  NameWidget.prototype.handleFirstNameClick = function () {
    this.fname = this.$inputEl.val();
    this.installLastNameHandler();
  };

  NameWidget.prototype.installLastNameHandler = function () {
    this.$promptEl.text("Enter Last Name!");
    this.$submitEl.off('click');

    this.$submitEl.on(
      "click",
      this.handleLastNameClick.bind(this)
    );
  };

  NameWidget.prototype.handleLastNameClick = function () {
    var lname = this.$inputEl.val();
    var newName = new Name(this.fname, lname);

    Name.names.push(newName);
    this.$contentEl.append(newName.render());

    this.installFirstNameHandler();
  };
})(this);

$(function () {
  $(".name-form").each(function (index, nameForm) {
    new NN.NameWidget($(nameForm)).installFirstNameHandler();
  });
});
