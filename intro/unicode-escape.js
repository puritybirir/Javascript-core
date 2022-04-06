// Unicode characters in Javascript
// Escape sequences in Javascript
// http://www.unicode.org/charts/
// Strong.fronCharCode(num [, num, num])
// myString.charCodeAt(index);
// \u0434
// \0 \' \" \\ \n \r \t

let yesRu = '\u0434\u0430'; // Russian, yes
let milkDK = 'm\u00E6lk'; //milk
let breadNO = 'br\u00F8d'; //bread
let tomorrowES = 'ma\u00F1ana'; //tomorrow
let emojiJP = '\u3047\u3028\u3058'; // Hiragana-emoji

let log = console.log
log(yesRu);
log(milkDK);
log(breadNO);
log(tomorrowES);
log(emojiJP);

log(milkDK.charCodeAt(0));

let s = String.fromCharCode(0*0434);
log(s);

let n = String.fromCharCode(0*453);
log(n);
