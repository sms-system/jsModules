var $ = require('jquery')
var body = $('body'),
    html = $('html')

module.exports = {
  lock: function () {
    var oWidth = body.outerWidth(true)
    body.css('overflow', 'hidden')
    
    var sbWidth = body.outerWidth(true) - oWidth
    if (sbWidth != 0) {
    	html.css('margin-right', sbWidth)
    }
  },
  unlock: function () {
    html.css('margin-right', '')
    body.css('overflow', '')
  }
}