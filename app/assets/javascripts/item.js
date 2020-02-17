$(document).on('turbolinks:load', function(){
  $(function(){
    $('.content-sell__formbox__group__input__box').on('input', function(){ 
      var data = $('.content-sell__formbox__group__input__box').val(); 
      var profit = Math.ceil(data * 0.9)
      var fee = (data - profit)
      $('.content-sell__formbox__tax__right').html(fee) 
      $('.content-sell__formbox__tax__right').prepend('¥ ') 
      $('.content-sell__formbox__benefit__right').html(profit)
      $('.content-sell__formbox__benefit__right').prepend('¥ ')
      $('content-sell__formbox__group__input__box').val(profit) 
      if(profit == '') {
      $('.content-sell__formbox__benefit__right').html('-');
      $('.content-sell__formbox__tax__right').html('-');
      }
    })
  })
})

$(document).on('turbolinks:load', function(){
  $(function() {
    $('input:submit[id="btn_submit"]').click(function() {
      $(button).prop('disabled', false);
    });
  });
})
// $(function(){
// 	$('input:submit[id="btn_submit"]').click(function(){
// 		$(this).prop('disabled',false);//ボタンを有効化する
// 		$(this).closest('form').submit();//フォームを送信する
// 	});
// });