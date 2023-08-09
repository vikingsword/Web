 //@ sourceURL=usermanager.js
/**
 * 用户管理操作
 * */
 ;!function($,w){
	// 模块变量
	var um = {};
	
	um.init = function(){
		
		$.mypost('um.km', {act:6004010000}, function(data){
            for(i in data.data) {
                var tr;
                tr='<td>'+data.data[i].userId+'</td>'+'<td>'+data.data[i].userName+'</td>'+'<td>'+data.data[i].sex+'</td>'+'<td>' + data.data[i].userFlag + "</td>"
                $("#tabletest").append('<tr>'+tr+'</tr>')
            }
		});
		
		
		$("#button1").click(function(){
			var input = $("#input1").val();
			var str = String(input);
	        $.mypost("um.km",{act:6004020000,param:str},function(data){
				for(i in data.data) {
	                var tr;
	                tr='<td>'+data.data[i].userId+'</td>'+'<td>'+data.data[i].userName+'</td>'+'<td>'+data.data[i].sex+'</td>'+'<td>' + data.data[i].userFlag + "</td>"
	                $("#tabletest").append('<tr>'+tr+'</tr>')
	            }
			});
		});

		$("#adduserbutton").click(function(){
			var input = $("#userid").val() + "," + $("#username").val() + "," + $("#sex").val();
			$.mypost("um.km",{act:6004070000,param:String(input)},function(data){
				// console(data);

			});
		});
		
		
	}
	
	// 返回对象
	w.PR = um;
	
}(jQuery,window);


