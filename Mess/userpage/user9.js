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
                tr='<td style="display: none;">'+data.data[i].userId+'</td>'+'<td>'+data.data[i].userName+'</td>'+'<td>'+data.data[i].sex+'</td>'+'<td>' + data.data[i].userFlag + "</td>"
                $("#tabletest").append('<tr><td style="width: 32px;"><input type="checkbox" name="item"></td>'+tr+'</tr>')
            }
		});
		

		// 增加用户
		$("#adduserbutton").click(function(){
			var input = $("#addusername").val() + "," + $("#addsex").val();
			$.mypost("um.km",{act:6004070000,param:String(input)},function(data){
				// console(data);

			});
			window.location.reload();
		});

		// 删除用户
		$("#button2").click(function(){
			
			// 删除用户（物理）
			// var checkLength = $("input:checkbox[name='item']:checked").length;
            // if(checkLength == 0) {
            //     alert("请至少选择一条记录!");
            //     return;
            // }
            // $("input[type='checkbox']").each(function(){ //遍历checkbox的选择状态
            //     if($(this).prop("checked")){ //如果值为checked表明选中了
            //         var input = $(this).closest('tr').find('td').eq(1).text(); //获取eq为1的那一列数据
			// 		$.mypost("um.km",{act:6004050000,param:String(input)},function(data,status){

			// 		});
            //     }
            // });

			// 删除用户（逻辑）
			var checkLength = $("input:checkbox[name='item']:checked").length;
            if(checkLength == 0) {
                alert("请至少选择一条记录!");
                return;
            }
            $("input[type='checkbox']").each(function(){ //遍历checkbox的选择状态
                if($(this).prop("checked")){ //如果值为checked表明选中了
					//获取eq为1的那一列数据 ---> userid
                    var input = $(this).closest('tr').find('td').eq(1).text(); 
					$.mypost("um.km",{act:6004030000,param:String(input)},function(data,status){

					});
					
                }
            });
            window.location.reload();
		});

		// 修改用户
		$("#button3").click(function(){

			var checkLength = $("input:checkbox[name='item']:checked").length;
            if(checkLength == 0) {
                alert("请选择一条记录!");
                return;
            } else if(checkLength > 1){
				alert("请选择一条记录");
				return;
			}
			document.getElementById('light2').style.display='block';
			document.getElementById('fade2').style.display='block';
			$("input[type='checkbox']").each(function(){ //遍历checkbox的选择状态
				if($(this).prop("checked")){ //如果值为checked表明选中了
					
					var modifyuserid = $(this).closest('tr').find('td').eq(1).text(); //获取eq为1的那一列数据
					var modifyusername = $(this).closest('tr').find('td').eq(2).text();
					var modifysex = $(this).closest('tr').find('td').eq(3).text();
					$("#modifyusername").val(modifyusername);
					$("#modifysex").val(modifysex);
					$("#modifyuserbutton").click(function(){	
			
						var input = modifyuserid + "," + $("#modifyusername").val() + "," + $("#modifysex").val();
						$.mypost("um.km",{act:6004060000,param:String(input)},function(data,status){

						});
						window.location.reload();
					});
					// window.location.reload();
				}
			});
			
            
            
		});


		$(function(){
            sortTable();
        });
		
	}
	
	// 返回对象
	w.PR = um;
	
}(jQuery,window);


