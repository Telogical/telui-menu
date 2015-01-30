//this file decorates the global ui object with all widgets in this package

global.UI = require('@telogical/telui-form');

global.UI.Appearances.menuitem = require('./appearances/menuitem')(global.UI);
global.UI.Menu = require('./widgets/menu')(global.UI);

module.exports = global.UI;