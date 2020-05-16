
> 本文摘自 [https://github.com/mishe/blog/issues/129](https://github.com/mishe/blog/issues/129) ，并根据实际项目情况有做了一些微调。
整体规范建议采用`RESTful `方式来实施。

## API 路径规则
目前建议是通过Nginx来转发前端页面和后端接口
后端如果只有一个服务时，直接用 `/api/v1` 来转发后端接口
如果有多个服务，则需要再加一层服务名
同时，接口的版本号放到服务后一层，如下例子：
>/api/dataserver/v1
/api/metadata/v1


## HTTP请求方法规则

对于资源的具体操作类型，由HTTP动词表示。
常用的HTTP动词有下面四个（括号里是对应的SQL命令）。
>GET（SELECT）：从服务器取出资源（一项或多项）。
POST（CREATE）：在服务器新建一个资源。
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
DELETE（DELETE）：从服务器删除资源。
PATCH(UPDATE): 部分更新资源

下面是一些例子。
>GET /product：列出所有商品
POST /product：新建一个商品
GET /product/ID：获取某个指定商品的信息
PUT /product/ID：更新某个指定商品的信息
DELETE /product/ID：删除某个商品
GET /product/ID/purchase ：列出某个指定商品的所有投资者
GET /product/ID/purchase/ID：获取某个指定商品的指定投资者信息

## 请求参数规则

如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。

下面是一些常见的参数。
>?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?producy_type=1：指定筛选条件

## 返回数据约定

为了保障前后端的数据交互的顺畅，建议规范数据的返回，并采用固定的数据格式封装。

```
{
    "meta":{
        "code": 0, // code 是业务状态码 0是正常的，非0是业务异常
        "msg": "", // 错误的提示文案
        "error": "", // 当服务端出现问题时，具体的错误描述，用于调试
        "request_uri": "" // 返回请求的URL，其实没有什么用，只是沿用之前PHP的约定
    },
    "response": { // 返回具体的业务数据
	}
}
```

## HTTP状态码约定
Code | Meaning。
--------------------------|----------------------------
200 OK | 请求成功。
201 Created | 请求成功并且服务器创建了新的资源。
400 Bad Request | 服务器不理解请求的语法(例如传参错误)。
401 Unauthorized | 授权信息非法或未送达。
403 Forbidden | 已授权登陆的用户无权限访问该接口。
404 Not Found | 资源未找到。
500&nbsp;Internal&nbsp;Server&nbsp;Error | 服务器内部错误。
