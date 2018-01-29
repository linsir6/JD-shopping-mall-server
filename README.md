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

----

4. 获取商品详情

``method`` : ``get``

``url`` : ``/goods/detail``

```
入参:
{
  goodsId : 1111111111
}
```

```
出参:
{
    "code" : 0,
    "msg" : "success",
    "data" : {
      "details" :
          {
            "name" : "xxx",
            "price" : 100,
            "count" : 100,
            "describe" : ""
          }
    }
}
```

----

5. 分类页面数据展示

``method`` : ``get``

``url`` : ``/sort/index``

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
            "describe" : "",
            "type" : 1
            },
          {},
          {}    
      ]
    }
}
```

----

6. 购物车列表

``method`` : ``get``

``url`` : ``/shopping/index``

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
            "describe" : "",
            "type" : 1
            },
          {},
          {}    
      ]
    }
}
```

----

7. 加入购物车

``method`` : ``post``

``url`` : ``/shopping/add``

```
入参:
{
  "goods": [
    {
      "name" : "xxx",
      "price" : 100,
      "count" : 100,
      "describe" : "",
      "type" : 1 //1.添加 2.删除
    },
    {},
    {}    
  ]
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


8. 结算商品

``method`` : ``post``

``url`` : ``/shopping/pay``

```
入参:
{
  "goods": [
    {
      "name" : "xxx",
      "price" : 100,
      "count" : 100,
      "describe" : "",
      "type" : 1 //1.添加 2.删除
    },
    {},
    {}    
  ],
  "total" : 100.0
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
