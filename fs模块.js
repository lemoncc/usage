var fs = require("fs");
var data = '';
console.log("����ִ��");

// �����ɶ���
var readerStream = fs.createReadStream('input.txt');

// ���ñ���Ϊ utf8��
readerStream.setEncoding('UTF8');

// �������¼� --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
console.log("����ִ�����");
});

readerStream.on('end',function(){
   console.log(data);
console.log("����ִ�����");
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("����ִ�����");