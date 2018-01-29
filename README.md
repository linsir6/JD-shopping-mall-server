# JD-shopping-mall-server

一款高仿京东商城的安卓项目的后台系统，目前采用 ``typescript + node + egg(koa2) + typeORM``

## Api接口:

``baseUrl`` : ``xxxx``

1. 注册:

``method`` : ``post``

``url`` : ``/user/register``

```
入参:
{
    "phone" : 17645168888,
    "password" : "qwe123"
}
```

```
出参:
{
    "code" : 0,
    "msg" : "success",
    "data" : {}
}
```

----

2. 登录

``method`` : ``post``

``url`` : ``/user/login``


```
入参:
{
    "phone" : 17645168888,
    "password" : "qwe123"
}
```

```
出参:
{
    "code" : 0,
    "msg" : "success",
    "data" : {
      "userInfo" : {
          "img" : "xxx",
          "name" : "xxx",
          "token" : "xxx"
      }
    }
}
```

----

3. 获取首页数据

``method`` : ``get``

``url`` : ``/home/index``

```
入参:
{

}
```

```
出参:
{
    "code" : 0,
    "msg" : "success",
    "data" : {
      "goods" : [
          {
            "name" : "xxx",
            "price" : 100,
            "count" : 100,
            "describe" : ""
            },
          {},
          {}    
      ]
    }
}
```
