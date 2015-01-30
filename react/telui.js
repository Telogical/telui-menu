global.UI = global.UI || require('@telogical/telui-core');

global.UI.Appearances.menuitem = require('./appearances/menuitem')(global.UI);
global.UI.Menu = require('./widgets/menu')(global.UI);

module.exports = global.UI;