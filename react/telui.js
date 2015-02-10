
var TelUI = require('@telogical/telui-core');

TelUI.Appearances.menuitem = require('./appearances/menuitem')(TelUI);
TelUI.Menu = require('./widgets/menu')(TelUI);

module.exports = TelUI;