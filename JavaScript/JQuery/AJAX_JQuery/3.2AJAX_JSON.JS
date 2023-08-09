 //@ sourceURL=usermanager.js
/**
 * 用户管理操作
 * */
 ;!function($,w){
	// 模块变量
	var um = {};
	
	um.init = function(){
		
		$.mypost('um.km', {act:6004010000}, function(data){
			
			
            for(i in data.list) 
            {
                var tr;
                tr='<td>'+data.list[i].userId+'</td>'+'<td>'+data.list[i].userName+'</td>'+'<td>'+data.list[i].sex+'</td>'+'<td>' + data.list[i].userFlag + "</td>"
                $("#tabletest").append('<tr>'+tr+'</tr>')
            }
		});
		
	}

    um.act = function(){
        $("#button1").click(function(){
			
			$.mypost('um.km',{act:6004020000,param : "1,2"},function(data){
			
				for(i in data.data) {
	                var tr;
	                tr='<td>'+data.data[i].userId+'</td>'+'<td>'+data.data[i].userName+'</td>'+'<td>'+data.data[i].sex+'</td>'+'<td>' + data.data[i].userFlag + "</td>"
	                $("#tabletest").append('<tr>'+tr+'</tr>')
	            }
			});
		})
    }
	
	// 返回对象
	w.PR = um;
	
}(jQuery,window);



