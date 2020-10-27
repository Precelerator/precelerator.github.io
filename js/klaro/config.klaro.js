
//setTimeout(function(){
//klaroLoadScript('klaroJsName');
//}, 1000);
langDE='de_DE';
langEN='en_EN';
var pathName=window.location.pathname;
var domainName=window.location.hostname;
if(domainName.indexOf('www')!= '-1'){
	domainName=domainName.replace('www.', '')
}

function clearCookie(e,n,t){try{if(function(e){var n=document.cookie.split(';'),t='',o='',c=!1;for(i=0;i<n.length;i++){if((t=n[i].split('='))[0].replace(/^\s+|\s+$/g,'')==e)return c=!0,t.length>1&&(o=unescape(t[1].replace(/^\s+|\s+$/g,''))),o;t=null}if(!c)return null}(e)){n=n||document.domain,t=t||'/';document.cookie=e+'=; expires='+new Date+'; domain='+n+'; path='+t}}catch(e){}}
function zzglCookieTextDe(){setTimeout(function(){let isactive = document.querySelector('div.klarodesc');if(!isactive){let parentklaro = document.querySelector('div#app-item-klaro-description');if(parentklaro){var klarozzgltext = document.createElement('div');klarozzgltext.className='klarodesc';klarozzgltext.innerHTML="<div class='klaro-moreinfo'>Mehr Infos</div><table style='display: none;'><tbody><tr><td><strong><small>Cookie Name</small></strong></td><td><small>klaro</small></td></tr><tr><td><strong><small>Host(s)</small></strong></td><td><small>."+domainName+"</small></td></tr><tr><td><strong><small>Aufbewahrung</small></strong></td><td><small>7 Tage</small></td></tr><tr><td><strong><small>Funktion</small></strong></td><td><small>Speichert Ihre Einwilligung zur Verwendung von Cookies.</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr></tbody></table>";parentklaro.appendChild(klarozzgltext);}let parentgoogleanalytics = document.querySelector('div#app-item-googleanalytics-description');if(parentgoogleanalytics){var klarozzgltext = document.createElement('div');klarozzgltext.className='klarodesc';klarozzgltext.innerHTML="<div class='klaro-moreinfo'>Mehr Infos</div><table style='display: none;'><tbody><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_ga</small></td></tr><tr><td><strong><small>Anbieter</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Aufbewahrung</small></strong></td><td><small>2 Jahre</small></td></tr><tr><td><strong><small>Funktion</small></strong></td><td><small>Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_gid</small></td></tr><tr><td><strong><small>Anbieter</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Aufbewahrung</small></strong></td><td><small>1 Tag</small></td></tr><tr><td><strong><small>Funktion</small></strong></td><td><small>Zählt und verfolgt Seitenaufrufe</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_gat</small></td></tr><tr><td><strong><small>Anbieter</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Aufbewahrung</small></strong></td><td><small>1 Min</small></td></tr><tr><td><strong><small>Funktion</small></strong></td><td><small>Anfragen von Bots filtern</small></td></tr><tr><td colspan='2'><small><p>Weitere Informationen finden Sie unter&nbsp;<a href='https://policies.google.com/privacy' target='_blank'>https://policies.google.com/privacy</a></p></small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr></tbody></table>";parentgoogleanalytics.appendChild(klarozzgltext);}}
    var privacyLinkText = 'Datenschutz';
    var imprintLinkText = 'Impressum';
    var agbLinkText = 'AGB';
    var privacyLink = 'https:\/\/precelerator.github.io\/privacy-policy';
    var imprintLink = 'https:\/\/precelerator.github.io\/impressum';
    var agbLink = '';
    if(privacyLink!=''){
        footerlink="<a href='"+privacyLink+"' title='"+privacyLinkText+"'>"+privacyLinkText+"</a>";
    }
    if(imprintLink!=''){
        footerlink=footerlink+"<a href='"+imprintLink+"' title='"+imprintLinkText+"'>"+imprintLinkText+"</a>";
    }
    if(agbLink!=''){
        footerlink=footerlink+"<a href='"+agbLink+"' title='"+agbLinkText+"'>"+agbLinkText+"</a>";
    }
    let parentFooterText = document.getElementsByClassName('cm-powered-by');
    if(parentFooterText[0]){
        var klarozzgltext = document.createElement('div');
        klarozzgltext.className='klarodesc';
        klarozzgltext.innerHTML=footerlink;
        parentFooterText[0].appendChild(klarozzgltext);
    }    
}, 500);}function zzglCookieTextEn(){setTimeout(function(){let isactive = document.querySelector('div.klarodesc');if(!isactive){let parentklaro = document.querySelector('div#app-item-klaro-description');if(parentklaro){var klarozzgltext = document.createElement('div');klarozzgltext.className='klarodesc';klarozzgltext.innerHTML="<div class='klaro-moreinfo'>Mehr Infos</div><table style='display: none;'><tbody><tr><td><strong><small>Cookie Name</small></strong></td><td><small>klaro</small></td></tr><tr><td><strong><small>Host(s)</small></strong></td><td><small>."+domainName+"</small></td></tr><tr><td><strong><small>Retention</small></strong></td><td><small>7 Days</small></td></tr><tr><td><strong><small>Function</small></strong></td><td><small>Saves your consent to the use of cookies.</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr></tbody></table>";parentklaro.appendChild(klarozzgltext);}let parentgoogleanalytics = document.querySelector('div#app-item-googleanalytics-description');if(parentgoogleanalytics){var klarozzgltext = document.createElement('div');klarozzgltext.className='klarodesc';klarozzgltext.innerHTML="<div class='klaro-moreinfo'>Mehr Infos</div><table style='display: none;'><tbody><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_ga</small></td></tr><tr><td><strong><small>Provider</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Retention</small></strong></td><td><small>2 Years</small></td></tr><tr><td><strong><small>Function</small></strong></td><td><small>Cookie from Google for website analysis. Generates statistical data about how visitors use the website.</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_gid</small></td></tr><tr><td><strong><small>Provider</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Retention</small></strong></td><td><small>1 Day</small></td></tr><tr><td><strong><small>Function</small></strong></td><td><small>Counts and tracks page views</small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr><tr><td><strong><small>Cookie Name</small></strong></td><td><small>_gat</small></td></tr><tr><td><strong><small>Provider</small></strong></td><td><small>Google LLC</small></td></tr><tr><td><strong><small>Retention</small></strong></td><td><small>1 Min</small></td></tr><tr><td><strong><small>Function</small></strong></td><td><small>Filter requests from bots</small></td></tr><tr><td colspan='2'><small><p>Further information can be found at&nbsp;<a href='https://policies.google.com/privacy' target='_blank'>https://policies.google.com/privacy</a></p></small></td></tr><tr class='klaro-hr'><td colspan='2'></td></tr></tbody></table>";parentgoogleanalytics.appendChild(klarozzgltext);}}
    var privacyLinkText = 'Privacy Policy';
    var imprintLinkText = 'Imprint';
    var agbLinkText = 'Terms Conditions';
    var privacyLink = 'https:\/\/precelerator.github.io\/privacy-policy';
    var imprintLink = 'https:\/\/precelerator.github.io\/impressum';
    var agbLink = '';
    if(privacyLink!=''){
        footerlink="<a href='"+privacyLink+"' title='"+privacyLinkText+"'>"+privacyLinkText+"</a>";
    }
    if(imprintLink!=''){
        footerlink=footerlink+"<a href='"+imprintLink+"' title='"+imprintLinkText+"'>"+imprintLinkText+"</a>";
    }
    if(agbLink!=''){
        footerlink=footerlink+"<a href='"+agbLink+"' title='"+agbLinkText+"'>"+agbLinkText+"</a>";
    }
   
    let parentFooterText = document.getElementsByClassName('cm-powered-by');
    if(parentFooterText[0]){
        var klarozzgltext = document.createElement('div');
        klarozzgltext.className='klarodesc';
        klarozzgltext.innerHTML=footerlink;
        parentFooterText[0].appendChild(klarozzgltext);
    }    
}, 500);}
var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
var selectLang='de';
switch (lang) {
    case langDE:
        var selectLang='de';
        var buttonText='Cookie Einstellungen';
    break;
    case langEN:
        var selectLang='en';
        var buttonText='Cookie settings';
    break;
    default:
        var selectLang='de';
        var buttonText='Cookie Einstellungen';
}
function clickOpenKlaroEvent(){
klaro.show(); 
	switch (lang) {
		case langDE:
			zzglCookieTextDe();
		break;
		case langEN:
			zzglCookieTextEn();
		break;
		default:
			zzglCookieTextDe();
	}
}
function clickKlaroEvent(){
	klaro.show();
	switch (lang) {
		case langDE:
			zzglCookieTextDe();
		break;
		case langEN:
			zzglCookieTextEn();
		break;
		default:
			zzglCookieTextDe();
	}
}
function klaroLoadScript(elementName){
     var klaroScript=document.querySelectorAll("[data-name='"+elementName+"']");
     if(klaroScript.length){
        var klaroJS = document.createElement('script');
        klaroJS.type = 'text/javascript';
        klaroJS.src = klaroScript[0].getAttribute('data-src');
        document.getElementsByTagName('head')[0].appendChild(klaroJS);
        klaroScript[0].remove();
     }
}
function toggleDocs(event) {
    if (event.target && event.target.className == 'klaro-moreinfo') {
        var next = event.target.nextElementSibling;
        if (next.style.display == 'none') {
            next.style.display = 'block';
        } else {
            next.style.display = 'none';
        }
    }
}
document.addEventListener('click', toggleDocs, true);

window.onload = function(){ 
	switch (lang) {
		case langDE:
			zzglCookieTextDe();
		break;
		case langEN:
			zzglCookieTextEn();
		break;
		default:
			zzglCookieTextDe();
	}

    var tokenIsPage=false;
    var strPageToHidden = 'agb,terms_conditions,impressum,imprint,datenschutz,privacy_policy,privacy-policy';
    var arrPageToHidden = strPageToHidden.split(',');
    arrPageToHidden.forEach(function(element) {
        if(pathName.indexOf(element)!= '-1'){
            tokenIsPage=true;
            var klaroContent=document.getElementsByClassName('cookie-modal');
            if(klaroContent.length){
                klaroContent[0].remove();
            }
        }
    });
    
var styleCss = document.createElement('link');
styleCss.type = 'text/css';
styleCss.rel = 'stylesheet';
styleCss.media = 'all';
styleCss.href = '/js/klaro/style.css';
document.getElementsByTagName('head')[0].appendChild(styleCss);
	var showbutton = document.createElement('div');
	showbutton.setAttribute('class','btn-cookie');
	//showbutton.innerHTML = '<a class=\'btn klaro-btn\' onclick=\'return klaro.show();\'>'+buttonText+'</a>';
	showbutton.innerHTML = '<a class=\'btn klaro-btn\'>'+buttonText+'</a>';
	showbutton.onclick = clickKlaroEvent;
	document.body.appendChild(showbutton);
}
var klaroConfig = {
    lang: selectLang,
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'klaro',
    htmlTexts: true,
    cookieDomain: '.'+domainName,
    cookieExpiresAfterDays: 7,
    privacyPolicy: 'https:\/\/precelerator.github.io\/privacy-policy',
    default: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: true,
    translations: {
        de: {
            consentModal: {
                title: 'Ihre Cookie-Präferenzen – entscheiden Sie, was Sie mit uns teilen',
                description:
                    'Diese Website verwendet Cookies. Einige davon sind unbedingt erforderlich, zum Beispiel [klaro]. Andere dienen dazu, Ihre Präferenzen auf unserer Homepage zu erkennen, sodass wir diese weiter für Sie optimieren können. ',
            },
            poweredBy: ' ',
            privacyPolicy: {
                text:
                    'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
                name: 'Datenschutzerklärung (Name)',
            },
			klaro: {
				description: 'Speichert Ihre Einwilligung zur Verwendung von Cookies.',
			},

            googleanalytics: {
                description: 'Sammeln von Besucherstatistiken',
            },
  
            purposes: {
                essenziell: 'Technisch Notwendig',
                analytics: 'Analytics',
                security: 'Sicherheit',
                marketing: 'Marketing',
                statistics: 'Statistiken',
                functional: 'Funktionelle',
                externalmedia: 'Externe Medien',
                livechat: 'Livechat',
                advertising: 'Anzeigen von Werbung',
            },
        },
        en: {
            consentModal: {
                title: 'Your cookie preferences - decide what you share with us',
                description:
                    'This website uses cookies. Some of them are absolutely necessary, for example [klaro]. Others serve to recognize your preferences on our homepage so that we can further optimize them for you. ',
            },
            poweredBy: ' ',
            privacyPolicy: {
                text:
                    'To learn more, please read our {privacyPolicy}.',
                name: 'privacy policy (Name)',
            },
			klaro: {
				description: 'Saves your consent to the use of cookies.',
			},

            googleanalytics: {
                description: 'Collecting visitor statistics',
            },
  
            purposes: {
                essenziell: 'Essenziell',
                analytics: 'Analytics',
                security: 'Security',
                marketing: 'Marketing',
                statistics: 'Statistics',
                functional: 'Funktionelle',
                externalmedia: 'Externalmedia',
                livechat: 'Livechat',
                advertising: 'Advertising',
            },
        },
    },
    apps: [
		{
			name: 'klaro',
			title: 'Klaro',
			purposes: ['essenziell'],
			cookies: ['inline-tracker'],
			required: true,
		},

		{
            name: 'googleanalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            default: false,
            cookies : [/^ga/i],
            callback: function(consent, app) {
                    if(consent !== false && app.name=='googleanalytics'){
                        var googlaAnalyticsJS = document.createElement('script');
                        googlaAnalyticsJS.type = 'text/javascript';
                        googlaAnalyticsJS.src = '/klaro/google-analytics.js';
                        document.getElementsByTagName('head')[0].appendChild(googlaAnalyticsJS);
                    }else{
                  clearCookie('_gat','.'+domainName,'/');
            clearCookie('_gid','.'+domainName,'/');
            clearCookie('_ga','.'+domainName,'/');
            clearCookie('_gali','.'+domainName,'/');
                    }
            },
            optOut: false,
            onlyOnce: false,
        },
  
    ],
    callback: function(consent, app) {
//	.klaro-btn
    },
};
