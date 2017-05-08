// Parse URL
// Write a script that parses an URL address given in the format: [protocol]:
//[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
let url = 'http://telerikacademy.com/Courses/Courses/Details/239';

for (var i = 0; i < url.length; i++){
    var result1 = url.substr(0, 4);
    var index = url.indexOf('//');
    var endIndex = url.indexOf('.');
    var indexRes = url.indexOf('/', endIndex);

    if (index) { 
        var result2 = url.substr(index + 2, endIndex - 3);
    }
    var result3 = url.substr(indexRes, url.length);
}
console.log('protocol: ' + result1);
console.log('server: ' + result2);
console.log('resource: ' + result3);


