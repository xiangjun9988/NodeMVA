Nodejs的实现
单线程 (single-thread)
非组赛式IO （non-blocking）
V8
事件驱动 (event-based)



单线程 ：多个请求占用一个线程
多线程：一个请求占用一个线程

eg:
Nginx单线程
Apache多线程

```
/*阻塞*/
get_a_request();//从队列中获得一个请求
handle_request();//处理这个请求
feedback();//返回处理结果
get_another_request();//从队里中获得下一个请求
```

```
/*非阻塞*/
get_a_request();//从队列中获得一个请求
handle_request(function(){//处理这个请求
  feedback();//等待处理完成后，返回处理结果
});

get_another_request();//从队里中获得下一个请求
```

Javascript语言解释器
V8(google) c++
Spider Monkey(Mozilla) c++
Rhino(Mozilla) java
Javascript Core(Apple) c++

```
/*NodeJS中的事件驱动*/
var s = require("tcp").createServer();
s.addListener("connection",function(c){
  c.send('hello daxiang!');
  c.close();
});
s.listen(8080);

```