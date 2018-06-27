if @new_messages.present?
  json.array! @new_messages do |message|
    json.body         message.body
    json.image        message.image
    json.user_name    message.user.name
    json.created_at   message.created_at.to_s
    json.id           message.id
  end
end
