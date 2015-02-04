//think...shoudl this be an appearance of menuitem, yet a list of somethign else.

require('@telogical/telui-radio');

function Menu(ui) {
  'use strict';
  return React.createClass({
    displayName: 'Menu',
    mixins: [ui.Mixins.Widget],
    propTypes: {

    },
    getInitialState: function getInitialState() {
      return {
        id: '',
        label: ''
      };
    },

    __focusMenu: function focusMenu() {
      if (this.refs.list) {
        this.refs.list.getDOMNode().focus();
      }
    },

    __change: function change(value) {

      var model = this.props;

      if (model.disabled) {
        return;
      }

      var hasChangeFunction = model.change && typeof model.change === 'function';

      if (hasChangeFunction) {
        model.change(value);
      }
    },

    render: function render() {
      var cx = React.addons.classSet,
        domx = React.DOM,
        model = this.props,
        row = 'w-12 w-alpha w-omega';

      var menuFrameClasses = {
        'ui-widget': true,
        'ui-menu': true,
        'ui-list-menuitem': true
      };

      var menuAttrs = {
        id: model.id + '_list',
        label: '',
        labelProp: model.labelProp,
        uiState: model.uiState,
        uiStateProp: model.stateProp,
        iconPrimary: model.iconPrimary,
        iconSecondary: model.iconSecondary,
        cssClass: model.cssClass,
        text: true,
        disabled: model.disabled,
        value: model.value,
        data: model.data,
        name: model.name,
        appearance: model.appearance || 'menuitem',
        orientation: 'vertical',
        scope: model.scope,
        ref: 'list',
        focusable: model.focusable
      };

      menuAttrs.change = this.__change;

      var menuFrameAttrs = {
        id: model.id,
        className: cx(menuFrameClasses),
        onFocus: this.__focusMenu
      };

      if (model.maxHeight) {
        menuFrameAttrs.style = {
          'maxHeight': this._toPx(model.maxHeight),
          'overflow': 'auto'
        };
      }

      var menu = ui.Radiogroup(menuAttrs),
        menuframe = domx.div(menuFrameAttrs, menu);

      return menuframe;
    }
  });
}

module.exports = Menu;