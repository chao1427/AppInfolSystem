function  loadCategoryLevel(pid,cl,categoryLevel){
	$.ajax({
		type:"GET",//璇锋眰绫诲瀷
		url:"categorylevellist.json",//璇锋眰鐨剈rl
		data:{pid:pid},//璇锋眰鍙傛暟
		dataType:"json",//ajax鎺ュ彛锛堣姹倁rl锛夎繑鍥炵殑鏁版嵁绫诲瀷
		success:function(data){//data锛氳繑鍥炴暟鎹紙json瀵硅薄锛�
			
			$("#"+categoryLevel).html("");
			var options = "<option value=\"\">--璇烽�鎷�-</option>";
			for(var i = 0; i < data.length; i++){
				if(cl != null && cl != undefined && data[i].id == cl ){
					options += "<option selected=\"selected\" value=\""+data[i].id+"\" >"+data[i].categoryName+"</option>";
				}else{
					options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
				}
			}
			$("#"+categoryLevel).html(options);
		},
		error:function(data){//褰撹闂椂鍊欙紝404锛�00 绛夐潪200鐨勯敊璇姸鎬佺爜
			alert("");
		}
	});
}   
//鏍规嵁id鍒犻櫎logo鍥剧墖
function delfile(id){
	$.ajax({
		type:"GET",//璇锋眰绫诲瀷
		url:"delfile.json",//璇锋眰鐨剈rl
		data:{id:id,flag:'logo'},//璇锋眰鍙傛暟
		dataType:"json",//ajax鎺ュ彛锛堣姹倁rl锛夎繑鍥炵殑鏁版嵁绫诲瀷failed
		success:function(data){//data锛氳繑鍥炴暟鎹紙json瀵硅薄锛塻uccess
			if(data.result == "success"){
				alert("鍒犻櫎鎴愬姛锛�);
				//灏嗛殣钘忕殑鏍囩鏄剧ず鍑烘潵
				$("#uploadfile").show();
				$("#logoFile").html('');
			}else if(data.result == "failed"){
				alert("鍒犻櫎澶辫触锛�);
			}
		},
		error:function(data){//褰撹闂椂鍊欙紝404锛�00 绛夐潪200鐨勯敊璇姸鎬佺爜
			alert("璇锋眰閿欒锛�);
		}
	});  
}

$(function(){  
	//鍔ㄦ�鍔犺浇鎵�睘骞冲彴鍒楄〃
	$.ajax({
		type:"GET",//璇锋眰绫诲瀷
		url:"datadictionarylist.json",//璇锋眰鐨剈rl
		data:{tcode:"APP_FLATFORM"},//璇锋眰鍙傛暟
		dataType:"json",//ajax鎺ュ彛锛堣姹倁rl锛夎繑鍥炵殑鏁版嵁绫诲瀷
		success:function(data){//data锛氳繑鍥炴暟鎹紙json瀵硅薄锛�
			var fid = $("#fid").val();
			$("#flatformId").html("");
			var options = "<option value=\"\">--璇烽�鎷�-</option>";
			for(var i = 0; i < data.length; i++){
				if(fid != null && fid != undefined && data[i].valueId == fid ){
					options += "<option selected=\"selected\" value=\""+data[i].valueId+"\" >"+data[i].valueName+"</option>";
				}else{
					options += "<option value=\""+data[i].valueId+"\">"+data[i].valueName+"</option>";
				}
			}
			$("#flatformId").html(options);
		},
		error:function(data){//褰撹闂椂鍊欙紝404锛�00 绛夐潪200鐨勯敊璇姸鎬佺爜
			alert("鍔犺浇骞冲彴鍒楄〃澶辫触锛�);
		}
	});  
	
	var cl1 = $("#cl1").val();
	var cl2 = $("#cl2").val();
	var cl3 = $("#cl3").val();
	//鍔ㄦ�鍔犺浇涓�骇鍒嗙被鍒楄〃
	loadCategoryLevel(null,cl1,"categoryLevel1");
	//鍔ㄦ�鍔犺浇浜岀骇鍒嗙被鍒楄〃
	loadCategoryLevel(cl1,cl2,"categoryLevel2");
	//鍔ㄦ�鍔犺浇涓夌骇鍒嗙被鍒楄〃
	loadCategoryLevel(cl2,cl3,"categoryLevel3");
	
	//鑱斿姩鏁堟灉锛氬姩鎬佸姞杞戒簩绾у垎绫诲垪琛�
	$("#categoryLevel1").change(function(){
		var categoryLevel1 = $("#categoryLevel1").val();
		if(categoryLevel1 != '' && categoryLevel1 != null){
			loadCategoryLevel(categoryLevel1,cl2,"categoryLevel2");
		}else{
			$("#categoryLevel2").html("");
			var options = "<option value=\"\">--璇烽�鎷�-</option>";
			$("#categoryLevel2").html(options);
		}
		$("#categoryLevel3").html("");
		var options = "<option value=\"\">--璇烽�鎷�-</option>";
		$("#categoryLevel3").html(options);
	});
	//鑱斿姩鏁堟灉锛氬姩鎬佸姞杞戒笁绾у垎绫诲垪琛�
	$("#categoryLevel2").change(function(){
		var categoryLevel2 = $("#categoryLevel2").val();
		if(categoryLevel2 != '' && categoryLevel2 != null){
			loadCategoryLevel(categoryLevel2,cl3,"categoryLevel3");
		}else{
			$("#categoryLevel3").html("");
			var options = "<option value=\"\">--璇烽�鎷�-</option>";
			$("#categoryLevel3").html(options);
		}
	});
	//杩斿洖鎸夐挳
	$("#back").on("click",function(){
		window.location.href = "list";
	});
	
	
	//LOGO鍥剧墖---------------------
	var logoPicPath = $("#logoPicPath").val();
	var id = $("#id").val();
	if(logoPicPath == null || logoPicPath == "" ){
		$("#uploadfile").show();
	}else{
		$("#logoFile").append("<p><img src=\""+logoPicPath+"?m="+Math.random()+"\" width=\"100px;\"/> &nbsp;&nbsp;"+
							"<a href=\"javascript:;\" onclick=\"delfile('"+id+"');\">鍒犻櫎</a></p>");
	}

});
      
      
      