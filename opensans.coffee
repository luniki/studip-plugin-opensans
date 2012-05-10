# alias jQuery to $
$ = jQuery

class FontSwitcherView extends Backbone.View

  tagName: "li"
  className: "opensans-plugin"

  storage_name: "opensans-plugin"

  render: ->
    $("#layout_footer ul").append @el

    if @enabled()
      $("body").addClass "opensans"
    else
      $("body").removeClass "opensans"
    @

  enabled: ->
    store = sessionStorage.getItem @storage_name
    return false unless store
    JSON.parse(store)

  toggle_enabled: ->
    sessionStorage.setItem @storage_name, JSON.stringify !@enabled()

  events:
    "click": "toggle"

  toggle: =>
    @toggle_enabled()
    @render()


$ ->
  fs = new FontSwitcherView
  fs.render()