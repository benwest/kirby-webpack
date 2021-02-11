// This is a client-side script.
// Don't use node.js methods nor advanced javascript features

(function (bs) {
  if (inPanel()) {
    var log = (console && console.debug) ? console.debug : console.log
    log('[Kirby] In the panel, changes from /www/content don\'t trigger livereload')
  }

  bs.socket.on('kirby:contentupdate', function () {
    if (!inPanel()) window.location.reload()
  })

  // since the panel can be accessible from another route than /panel
  // we rely on the specific script used on the panel (panel.min.js)
  function inPanel () {
    return typeof window.panel !== 'undefined'
  }
})(window.___browserSync___)
