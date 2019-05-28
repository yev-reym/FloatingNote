class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :age, :gender, :email, presence: true
    validates :username, :session_token, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates_email_format_of :email
    # validate :valid_email?

    attr_reader :password 
    after_initialize :ensure_session_token

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

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    # def valid_email?
    #     email_split = self.email.split('@')
    #     if email_split.length != 2 && email_split[0].count{ |el| el == '.'} < 1 && email_split[1].count{ |el| el == '.'} == 1 && email.split[1].none?{|char| '123456789'.includes?(char)}
    #         return true 
    #     else 
    #         errors.add(:email, "Must put valid email!")
    #     end
    # end
end
