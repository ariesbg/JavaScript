// Replace tags
// Write a JavaScript function that replaces in a HTML document given as 
// string all the tags <a href="…">…</a> with corresponding tags [TEXT](URL).
var str = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
var link1 = str.replace(/<a href="(.*?)">/g, '($1)[')
                .replace(/<\/a>/g, ']');
console.log(link1);