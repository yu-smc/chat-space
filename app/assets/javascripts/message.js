$(function scrollToNewest(){

});


$(function() {
  function buildHTML(message){
    var insertBody = '';
    var insertImage = '';
    if (message.body) {
      insertBody = `<p>${message.body}</p>`;
    }
    if (message.image.url) {
      insertImage = `<img src="${message.image.url}" class="message-image">`;
    }
    var html = `<div class="message">
                  <div class="message-info">
                    <p class="message-info__user">
                      ${message.user_name}
                    </p>
                    <p class="message-info__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <div class="message-text">
                    ${insertBody}
                    ${insertImage}
                  </div>
                </div>`
    return html;
  }
  $("#new_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var $messages = $('.main-wrapperForContents');
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form-items__input-inner').reset();
      $messages.animate({ scrollTop: $messages.get(0).scrollHeight },'fast');
    })
    .fail(function(){
      alert('エラーが発生しました。入力内容をご確認ください。');
    })
  return false;
  })
});

