class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :age, :gender, :email, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password 
    after_initialize :ensure_session_token

    
end
