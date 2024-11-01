	var $body = document.querySelector('body');
	var $product_ul = document.querySelector('ul.product');
	var $product_ul_li = $product_ul.querySelectorAll('li');
	var $popup_bg = document.querySelector('div.popup_bg');
	var $popup_div = document.querySelector('div.popup');
	var $popup_close_btn = $popup_div.querySelector('button');
	var $popup_img = $popup_div.querySelectorAll('img')[1];

	function change(_list_idx,type,_arr_name,_arr_eng_name,_arr_desc,_arr_weight,_arr_cup,_arr_time,_arr_spoon){
				var $p_title = $popup_div.querySelector('p.title');
				var $p_title_sb = document.querySelector('p.title_sb');
				var $p_title_ls = document.querySelector('p.title_ls');
				var $span_cup = $popup_div.querySelectorAll('span.info_how_txt')[1];
				var $span_time = $popup_div.querySelectorAll('span.info_how_txt')[2];
				var $span_spoon = $popup_div.querySelectorAll('span.info_how_txt')[3];
				var $p_detail_txt_1 = $popup_div.querySelectorAll('p.detail_txt')[0];
				var $p_detail_txt_2 = $popup_div.querySelectorAll('p.detail_txt')[1];
				var $p_detail_txt_3 = $popup_div.querySelectorAll('p.detail_txt')[2];
				var $p_detail_txt_4 = $popup_div.querySelectorAll('p.detail_txt')[3];
				var popup_img_src = "images/img_product_"+type+"tea_popup_0"+(_list_idx+1)+".png";
				$p_title.innerText = _arr_eng_name[_list_idx];
				$p_title_sb.innerText = _arr_name[_list_idx]+' '+_arr_weight[_list_idx];
				$p_title_ls.innerText = _arr_desc[_list_idx];
				$span_cup.innerText = _arr_cup[_list_idx]+'ml';
				$span_time.innerText = _arr_time[_list_idx]+'min';
				$span_spoon.innerText = _arr_spoon[_list_idx]+'g';
				$p_detail_txt_3.innerText = _arr_name[_list_idx];
				$p_detail_txt_4.innerText = _arr_name[_list_idx];
				$popup_bg.classList.add('on');
				$popup_div.classList.add('on');
				$popup_img.setAttribute('src',popup_img_src);
		}
	$popup_bg.addEventListener('click',function(){
			$popup_bg.classList.remove('on');
			$popup_div.classList.remove('on');
			$body.style.cssText = 'overflow: auto;';

	});
	$popup_close_btn.addEventListener('click',function(){
			$popup_bg.classList.remove('on');
			$popup_div.classList.remove('on');
			$body.style.cssText = 'overflow: auto;';
	});


