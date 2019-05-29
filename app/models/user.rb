class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :age, :gender, :email, :profile_url, presence: true
    validates :username, :session_token, :email, :profile_url, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates_email_format_of :email

    attr_reader :password 
    after_initialize :ensure_session_token, :ensure_profile_url

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.generate_profile_url
        'floatingnote.herokuapp/user-' + rand.to_s[2..18]
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def ensure_profile_url
        self.profile_url ||= self.class.generate_profile_url
    end
end
