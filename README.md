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
             "id": 1,
             "name": "书1",
             "price": 100,
             "count": 199,
             "type": 1,
             "describe": "书"
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

``url`` : ``/goods/details`

```
入参:

query: ?goodId=2

```

```
出参:
{
    "code": 0,
    "msg": "",
    "data": {
        "details": {
            "id": 2,
            "name": "书2",
            "price": 100,
            "count": 199,
            "type": 1,
            "describe": "书"
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
query : ?userId=1
```
出参:
{
    "code": 0,
    "msg": "",
    "data": {
        "goods": [
            {
                "id": 1,
                "userId": 1,
                "goodsId": 1,
                "count": 2,
                "goodsDetails": {
                    "id": 1,
                    "name": "书1",
                    "price": 100,
                    "count": 199,
                    "type": 1,
                    "describe": "书"
                }
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


8. 从购物车删除

``method`` : ``post``

``url`` : ``/shopping/delete``

```
入参:
{
  "id" : 12345
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


9. 结算商品

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
