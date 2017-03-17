/*NodeJS中的事件驱动*/
var s = require("tcp").createServer();
s.addListener("connection",function(c){
  console.log(c);
 // c.send('hello daxiang!');
  //c.close();
});
s.listen(8090,function(){
  console.log("tcp server starting ...");
});