class Track < ApplicationRecord
    validates :title, :uploader_id, presence: true

    has_one_attached :track_file
    has_one_attached :photo

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User
end
