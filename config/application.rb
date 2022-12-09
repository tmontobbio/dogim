require_relative "boot"

require "rails/all"
# require "rails"
# require "active_model/railtie"
# require "active_job/railtie"
# require "active_record/railtie"
# require "active_storage/engine"
# require "action_controller/railtie"
# require "action_mailer/railtie"
# require "action_mailbox/engine"
# require "action_text/engine"
# require "action_view/railtie"
# require "action_cable/engine"
Bundler.require(*Rails.groups)

module Dogim
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict
    config.secret_key_base = "somesecretkey"
  end
end
