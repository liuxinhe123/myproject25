var Mock = require('mockjs');
Mock.setup({ timeout: '500' });


Mock.mock("check.php","post",function(options){
    let data=JSON.parse(options.body);
    let userName=data.userName;
    let password=data.password;
    if(userName=="tom" && password==123){
        return Mock.mock({"code":"10001","msg":"ok"});
    }else{
        return Mock.mock({"code":"20001","msg":"用户名或密码错误！"});
    }
})

