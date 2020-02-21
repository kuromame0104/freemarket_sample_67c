$(document).on('turbolinks:load', ()=> {
  if (document.getElementById("token_submit") != null) { //token_submitというidがnullの場合、下記コードを実行しない
    Payjp.setPublicKey("pk_test_ff391bc547ab6f91061eb220"); //ここに公開鍵を直書き
    $(document).on("click",".card-main__form__button", e => { //ボタンが押されたときに作動します
      e.preventDefault(); //ボタンを一旦無効化します
      let card = {
        number: document.getElementById("card_number").value,
        cvc: document.getElementById("cvc").value,
        exp_month: document.getElementById("exp_month").value,
        exp_year: document.getElementById("exp_year").value
      }; //入力されたデータを取得します。
      Payjp.createToken(card, (status, response) => {
        if (status === 200) { //成功した場合
          console.log(status);
          $("#card_number").removeAttr("name");
          $("#cvc").removeAttr("name");
          $("#exp_month").removeAttr("name");
          $("#exp_year").removeAttr("name"); //データを自サーバにpostしないように削除
          $("#charge-form").append($('<input type="hidden" name="payjp-token">').val(response.id));
          $("#charge-form").get(0).submit();
          alert("登録が完了しました"); //確認用
        } else {
          alert("カード情報が正しくありません。"); //確認用
        }
      });
    });
  }
});