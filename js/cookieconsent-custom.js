window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#eaf7f7",
        "text": "#5c7291"
      },
      "button": {
        "background": "#00bfd8",
        "text": "#ffffff"
      }
    },
    "theme": "classic",
    "type": "opt-in",
    "content": {
      "message": "Wir nutzen Google Analytics und Google Fonts, um dir die Inhalte auf dieser Seite bereitzustellen. Klick auf \"Akzeptieren\", um unseren Cookie-Richtlinien zuzustimmen.",
      "dismiss": "Ablehnen",
      "allow": "Akzeptieren",
      "link": "Mehr erfahren",
      "href": "https://precelerator.github.io/privacy-policy"
    },
    onStatusChange: function(status) {
        if (this.hasConsented()){
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', 'G-ZEJ45LTFJV', 'auto');
                ga('require', 'displayfeatures');
                ga('require', 'linkid', 'linkid.js');
                ga('set', 'anonymizeIp', true);
                ga('send', 'pageview')
        }
       }
  });