(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
  // Extends lang for print plugin.
  $.extend(true, $.summernote.lang, {
    'en-US': {
      print: {
        print: 'Print'
      }
    },
    'ko-KR': {
      print: {
        print: '인쇄'
      }
    },
    'pt-BR': {
      print: {
        print: 'Imprimir'
      }
    }
  });

  // Extends plugins for print plugin.
  $.extend($.summernote.plugins, {
    /**
     * @param {Object} context - context object has status of editor.
     */
    'print': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;
      var $editor = context.layoutInfo.editor;
      var options = context.options;
      var lang = options.langInfo;

      var getPrintframe = function ($container) {
        var $frame = $(
          '<iframe class="printFrame" name="summernotePrintFrame"' +
          'width="0" height="0" frameborder="0" src="about:blank" style="visibility:hidden">' +
          '</iframe>');
        $frame.appendTo($editor.parent());

        var $head = $frame.contents().find('head');
        if (options.print && options.print.stylesheetUrl) {
          // Use dedicated styles
          var css = document.createElement('link');
          css.href = options.print.stylesheetUrl;
          css.rel = 'stylesheet';
          css.type = 'text/css';
          $head.append(css);
        } else {
          // Inherit styles from document
          $('style, link[rel=stylesheet]', document).each(function () {
            $head.append($(this).clone());
          });
        }

        return $frame;
      };

      // add print button
      context.memo('button.print', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-print"/> ' + lang.print.print,
          tooltip: lang.print.print,
          click: function () {
            $frame = getPrintframe();
            $frame.contents().find('body').html(context.invoke('code'));

            setTimeout(function () {
              $frame[0].contentWindow.focus();
              $frame[0].contentWindow.print();
              $frame.remove();
              $frame = null;
            }, 250);
          }
        });
        // create jQuery object from button instance.
        var $print = button.render();
        return $print;
      });
    }
  });
}));
