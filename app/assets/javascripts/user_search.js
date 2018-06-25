$(function(){
  function appendUser(user){
    var html = `<div id="chat-group-user-22" class="chat-group-user clearfix">
                  <input name='chat_group[user_ids][]' type='hidden' value='22'>
                  <p class="chat-group-user__name">${user.name}</p>
                </div>`
    $("#user-search-result").append(html);
  }
  var ajaxSearch = function(input){
    $("#user-search-result").empty();
    if (input != ''){
      $.ajax({
        url: '/users',
        type: 'GET',
        data: { keyword: input },
        dataType: 'json',
      })
      .done(function(data){
        if (data.length !== 0) {
          data.forEach(function(user){
            appendUser(user);
          });
        }
      })
      .fail(function(){
        alert('検索できませんでした。');
      })
    }
  };
  $("#user-search-field").on('keyup', function(){
    var input = $.trim($(this).val());
    setTimeout(function(){ajaxSearch(input)}, 500);
  });
});

