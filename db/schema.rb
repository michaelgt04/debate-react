# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161024221236) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courses", force: :cascade do |t|
    t.integer  "grade",       null: false
    t.string   "subject",     null: false
    t.integer  "school_year", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "teacher_id"
    t.index ["teacher_id"], name: "index_courses_on_teacher_id", using: :btree
  end

  create_table "debates", force: :cascade do |t|
    t.string   "topic",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "course_id"
    t.index ["course_id"], name: "index_debates_on_course_id", using: :btree
  end

  create_table "registrations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "student_id"
    t.integer  "course_id"
    t.index ["course_id"], name: "index_registrations_on_course_id", using: :btree
    t.index ["student_id"], name: "index_registrations_on_student_id", using: :btree
  end

  create_table "students", force: :cascade do |t|
    t.string   "username",                    null: false
    t.string   "password_digest",             null: false
    t.string   "first_name",                  null: false
    t.string   "last_name",                   null: false
    t.integer  "sign_in_count",   default: 0
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string  "username",                    null: false
    t.string  "password_digest",             null: false
    t.string  "first_name",                  null: false
    t.string  "last_name",                   null: false
    t.integer "sign_in_count",   default: 0
  end

end
