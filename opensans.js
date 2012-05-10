(function() {
  var $, FontSwitcherView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  $ = jQuery;

  FontSwitcherView = (function(_super) {

    __extends(FontSwitcherView, _super);

    function FontSwitcherView() {
      this.toggle = __bind(this.toggle, this);
      FontSwitcherView.__super__.constructor.apply(this, arguments);
    }

    FontSwitcherView.prototype.tagName = "li";

    FontSwitcherView.prototype.className = "opensans-plugin";

    FontSwitcherView.prototype.storage_name = "opensans-plugin";

    FontSwitcherView.prototype.render = function() {
      $("#layout_footer ul").append(this.el);
      if (this.enabled()) {
        $("body").addClass("opensans");
      } else {
        $("body").removeClass("opensans");
      }
      return this;
    };

    FontSwitcherView.prototype.enabled = function() {
      var store;
      store = sessionStorage.getItem(this.storage_name);
      if (!store) return false;
      return JSON.parse(store);
    };

    FontSwitcherView.prototype.toggle_enabled = function() {
      return sessionStorage.setItem(this.storage_name, JSON.stringify(!this.enabled()));
    };

    FontSwitcherView.prototype.events = {
      "click": "toggle"
    };

    FontSwitcherView.prototype.toggle = function() {
      this.toggle_enabled();
      return this.render();
    };

    return FontSwitcherView;

  })(Backbone.View);

  $(function() {
    var fs;
    fs = new FontSwitcherView;
    return fs.render();
  });

}).call(this);
