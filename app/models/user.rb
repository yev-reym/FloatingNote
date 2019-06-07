class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :age, :gender, :email, :profile_url, presence: true
    validates :session_token, :email, :profile_url, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
  

    attr_reader :password 
    after_initialize :ensure_session_token, :ensure_profile_url_and_username

    has_one_attached :photo
    has_many :tracks,
        foreign_key: :uploader_id,
        class_name: :Track

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(info, password)
        user = User.find_by(email: info) || User.find_by(profile_url: info)
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

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def ensure_profile_url_and_username
        rand_num = rand.to_s[2..18]
        self.username ||= 'user-' + rand_num
        self.profile_url ||= 'user-' + rand_num
    end
end
