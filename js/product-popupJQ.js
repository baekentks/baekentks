	var $body = $('body');
	var $product_ul = $('ul.product');
	var $product_ul_li = $('ul.product li');
	var $popup_bg = $('div.popup_bg');
	var $popup_div = $('div.popup');
	var $popup_close_btn = $('button');
	var $popup_img = $('div.popup img')[0];

	function change(_list_idx,type,_arr_name,_arr_eng_name,_arr_desc,_arr_weight,_arr_cup,_arr_time,_arr_spoon){
				var $p_title = $('div.popup p.title');
				var $p_title_sb = $('p.title_sb');
				var $p_title_ls = $('p.title_ls');
				var $span_cup = $('div.popup span.info_how_txt')[1];
				var $span_time = $('div.popup span.info_how_txt')[2];
				var $span_spoon = $('div.popup span.info_how_txt')[3];
				var $p_detail_txt_1 = $('div.popup p.detail_txt')[0];
				var $p_detail_txt_2 = $('div.popup p.detail_txt')[1];
				var $p_detail_txt_3 = $('div.popup p.detail_txt')[2];
				var $p_detail_txt_4 = $('div.popup p.detail_txt')[3];
				var popup_img_src = "images/img_product_"+type+"tea_popup_0"+(_list_idx+1)+".png";
				$p_title.text(_arr_eng_name[_list_idx]);
				$p_title_sb.text(_arr_name[_list_idx]+' '+_arr_weight[_list_idx]);
				$p_title_ls.text(_arr_desc[_list_idx]);
				$span_cup.innerText = _arr_cup[_list_idx]+'ml' ;
				$span_time.innerText = _arr_time[_list_idx]+'min';
				$span_spoon.innerText = _arr_spoon[_list_idx]+'g';
				$p_detail_txt_3.innerText = _arr_name[_list_idx];
				$p_detail_txt_4.innerText = _arr_name[_list_idx];
				$popup_bg.addClass('on');
				$popup_div.addClass('on');
				$popup_img.setAttribute('src',popup_img_src);
		}
	$popup_bg.on('click',function(){
			$popup_bg.removeClass('on');
			$popup_div.removeClass('on');
			$popup_div.scrollTop(0);
			$body.css ('overflow','auto');

	});
	$popup_close_btn.on('click',function(){
			$popup_bg.removeClass('on');
			$popup_div.removeClass('on');
			$popup_div.scrollTop(0);
			$body.css ('overflow','auto');
	});


