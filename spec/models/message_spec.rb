require 'rails_helper'

  RSpec.describe Message, type: :model do
    describe '#create' do
      context 'can save' do
        it "is valid with body and image" do
          message = build(:message)
          expect(message).to be_valid
        end

        it "is valid with a body" do
          message = build(:message, image: nil)
          expect(message).to be_valid
        end

        it "is valid with a image" do
          message = build(:message, body: nil)
          expect(message).to be_valid
        end
      end

    context 'cannot save' do
      it "is invalid without body and image" do
        message = build(:message, body: nil, image: nil)
        message.valid?
        expect(message.errors[:body]).to include('を入力してください')
      end

      it "is invalid without group_id" do
        message = build(:message, group: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end

      it "is valid with a image" do
        message = build(:message, user: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end
  end
end


