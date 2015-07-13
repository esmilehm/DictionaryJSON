$(window).load(function () {
// $(function(){
	//HTMLを初期化
	var dif1 = $('table.tbl tbody').html("");

   //csvをJSONに変換
	var dif2 = "csv/hoge.csv".toObjects();
	//HTMLを生成
	for (var i = 0; i < dif2.length; i++) {
	  $('<tr>'+
	    '<td>'+dif2[i].id+'</td>'+
		 '<td>'+dif2[i].name+'</td>'+
		 '<td>'+dif2[i].age+'</td>'+
		 '</tr>').appendTo('table.tbl tbody').trigger('create');
   }
  

	//quicksearchの設定 - 上のdif1とdif2の関数が終わってから読み込む -
	$.when(dif1,dif2)
	.done( function(){$('input#id_search').quicksearch('table tbody tr');} )
	//これだけでは、ダメ見たい$('input#id_search').quicksearch('table tbody tr');
	
   //アラート表示
   alert("sampleCsvJson.jsヨリ読み込み終了");
});