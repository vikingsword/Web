import Mock from 'mockjs'

Mock.mock('/product/search', {
    "ret": 0,
    "data": {
        "mtime": "@datetime",
        "score|1-900": 1,
        "rank|1-100": 1,
        "stars|1-5": 1,
        "nicknamee": "@cname",
        "img": "@image('200x100','#ffcc33', '#fff','png','Fast Mock'),"
    }
});



