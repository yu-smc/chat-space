# README

## データベース設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :members
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- has_many :groups through: :members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false|

### Association
- has_many :members
- has_many :messages
- has_many :users through: :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null:false|
|image|string||
|user|integer|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group



<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
 -->
