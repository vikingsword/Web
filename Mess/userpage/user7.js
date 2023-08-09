 //@ sourceURL=usermanager.js
/**
 * 用户管理操作
 * */
 ;!function($,w){
	// 模块变量
	var um = {};
	
	um.init = function(){
		
		// 查询用户
		$.mypost('um.km', {act:6004010000}, function(data){
            for(i in data.data) {
                var tr;
                tr='<td>'+data.data[i].userId+'</td>'+'<td>'+data.data[i].userName+'</td>'+'<td>'+data.data[i].sex+'</td>'+'<td>' + data.data[i].userFlag + "</td>"
                $("#tabletest").append('<tr><td style="width: 32px;"><input type="checkbox" name="item"></td>'+tr+'</tr>')
            }
		});
		

		// 增加用户
		$("#adduserbutton").click(function(){
			var input = $("#adduserid").val() + "," + $("#addusername").val() + "," + $("#addsex").val();
			$.mypost("um.km",{act:6004070000,param:String(input)},function(data){
				// console(data);

			});
		});

		// 删除用户（物理）
		$("#deleteuserbutton").click(function(){
			var input = $("#deleteuserid").val();
			$.mypost("um.km",{act:6004050000,param:String(input)},function(data,status){

			});
		});

		// 修改用户
		$("#modifyuserbutton").click(function(){
			var input = $("#modifyuserid").val() + "," + $("#modifyusername").val() + "," + $("#modifysex").val();
			$.mypost("um.km",{act:6004060000,param:String(input)},function(data){
					
			});
		});
		
		
	}
	
	// 返回对象
	w.PR = um;
	
}(jQuery,window);


