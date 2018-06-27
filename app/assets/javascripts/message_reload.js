$(document).on('turbolinks:load', function() {
  function buildHTML(message) {
    var insertImage = '';
    if (message.image.url){
      insertImage = `<img src="${message.image.url}">`;
    }
    var html =  `
      <div class="message" data-message-id="${message.id}">
        <div class="message-info">
          <p class="message-info__user">
            ${message.user_name}
          </p>
          <p class="message-info__date">
            ${message.created_at}
          </p>
        </div>
        <div class="message-text">
          ${message.body}
          ${insertImage}
        </div>
      </div>`
    return html;
  }
  var id = $('.messages .message:last-child').data('messageId');
  var interval = setInterval(function(){
    var insertHTML = '';
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        dataType: 'json',
      })
      .done(function(data){
        data.forEach(function(message){
          if (message.id > id) {
            insertHTML += buildHTML(message);
          }
        });
        $('.messages').append(insertHTML);
        scrollToNewest();
      })
      .fail(function(data){
        alert('自動更新できません。更新するにはページを再度読み込んでください。');
      });
    } else {
      clearInterval(interval);
    }
    id = $('.messages .message:last-child').data('messageId');
  }, 5000);
})

function scrollToNewest(){
 $('.main-wrapperForContents').animate({ scrollTop: $('.main-wrapperForContents').get(0).scrollHeight },'fast');
};
