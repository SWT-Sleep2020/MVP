// import i18next from 'i18next';
// import LngDetector from 'i18next-browser-languagedetector';
// import XHR from 'i18nextXHRBackend';

function langFunction() {
  var lang = $('html').attr('lang');
  /**
  * start
  */
  // use plugins and options as needed, for options, detail see
  // http://i18next.com/docs/
  i18next
  .use(window.i18nextXHRBackend)
  .init({
    lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
    // backend: {
    //   loadPath: '../../locales/{{lng}}/{{ns}}.json'
    // }
    resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
      en: {
        translation: {
          nav: {
            home: 'Home',
            page1: 'Page One',
            page2: 'Page Two'
          }
        }
      },
      ja: {
        translation: {
          nav: {
            home: 'Home日本語',
            page1: 'Page One日本語',
            page2: 'Page Two日本語'
          }
        }
      }
    }
  }, function(err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $, {
      selectorAttr: 'data-key', // selector for translating elements
    });

    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('.nav').localize();
  });
  /**
  * end
  */
}

$(function() {
  langFunction();

  $('.mjs-lang-en').click(function() {
    $('.mjs-html').attr('lang', 'en');
    langFunction();
  });
  $('.mjs-lang-jp').click(function() {
    $('.mjs-html').attr('lang', 'ja');
    langFunction();
  });
})

  


  



