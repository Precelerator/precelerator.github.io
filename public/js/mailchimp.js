(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[2] = 'LNAME';
  ftypes[2] = 'text';
  fnames[1] = 'FNAME';
  ftypes[1] = 'text';
  /*
   * Translated default messages for the $ validation plugin.
   * Locale: DE
   */
  $.extend($.validator.messages, {
    required: 'Dieses Feld ist ein Pflichtfeld.',
    maxlength: $.validator.format('Geben Sie bitte maximal {0} Zeichen ein.'),
    minlength: $.validator.format(
      'Geben Sie bitte mindestens {0} Zeichen ein.',
    ),
    rangelength: $.validator.format(
      'Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein.',
    ),
    email: 'Geben Sie bitte eine gültige E-Mail Adresse ein.',
    url: 'Geben Sie bitte eine gültige URL ein.',
    date: 'Bitte geben Sie ein gültiges Datum ein.',
    number: 'Geben Sie bitte eine Nummer ein.',
    digits: 'Geben Sie bitte nur Ziffern ein.',
    equalTo: 'Bitte denselben Wert wiederholen.',
    range: $.validator.format(
      'Geben Sie bitten einen Wert zwischen {0} und {1}.',
    ),
    max: $.validator.format(
      'Geben Sie bitte einen Wert kleiner oder gleich {0} ein.',
    ),
    min: $.validator.format(
      'Geben Sie bitte einen Wert größer oder gleich {0} ein.',
    ),
    creditcard: 'Geben Sie bitte ein gültige Kreditkarten-Nummer ein.',
  });
})(jQuery);
var $mcj = jQuery.noConflict(true);
