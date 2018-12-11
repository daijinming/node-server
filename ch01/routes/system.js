/*系统服务*/
module.exports = app => {

    app.get('/login', function (req, res) {
        res.render("login");
    });

    app.post('/login', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        res.cookie('jwt', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xLmJhY2suYXBwbGluemkuY29tXC8iLCJhdWQiOiJyZWZpbmUuY29tIiwiaWF0IjoxNTQ0NDMxNDQ0LCJuYmYiOjE1NDQ0MzE0NDQsImV4cCI6MTU0NDQzODY0NCwiZGF0YSI6eyJ1c2VyaWQiOiIxMTIzMTIzMTIzNCIsInVzZXJuYW1lIjoiZGFpamlubWluZyIsIm5pY2tuYW1lIjoiXHU2NzRlXHU1YzBmXHU5Zjk5In19.g7LsxJ5pHndI8jMOf4flPK7BTfDCcxXwy1PracygxFo')

        res.send({ success: true, message: "返回成功" });
    });


    app.get('/logout', function (req, res) {

        res.clearCookie('jwt');
        res.redirect('/login');
    });

    app.post("/app", function (req, res) {

        var data = {
            "success": true,
            "message": "获取应用列表成功",
            "data": [
                {
                    "title": "用户中心",
                    "url": "usercenter/",
                    "id": "usercenter"
                },
                {
                    "title": "财务管理",
                    "url": "finance/",
                    "id": "finance"
                },
                {
                    "title": "数据报表",
                    "url": "report/",
                    "id": "report"
                },
                {
                    "title": "系统管理",
                    "url": "system/",
                    "id": "system"
                }
            ]
        };
        res.send(data);
    });

    app.post("/appmenu", function (req, res) {

        var appid = req.body.appid;

        var data = {
            "success": true,
            "message": "获取应用菜单列表成功",
            "data": [
                {
                    "title": "一级菜单",
                    "icon": "fa fa-th-large",
                    "items": [
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        }
                    ]
                },
                {
                    "title": "一级菜单",
                    "icon": "fa fa-th-large",
                    "items": [
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        },
                        {
                            "url": "url-2.html",
                            "title": "二级菜单"
                        }
                    ]
                }
            ]
        };

        res.send(data);
    });
}