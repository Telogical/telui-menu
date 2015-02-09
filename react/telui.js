//global.UI = global.UI || require('@telogical/telui-core');
require('@telogical/telui-core');

console.log('global.UI', global.UI);

global.UI.Appearances.menuitem = require('./appearances/menuitem')(global.UI);
global.UI.Menu = require('./widgets/menu')(global.UI);


module.exports = global.UI;