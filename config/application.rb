require_relative 'boot'

require 'rails/all'

require 'statsd'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CodeTriage
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    Chewy.root_strategy = :atomic

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.active_job.queue_adapter = :sidekiq
    config.encoding = "utf-8"
    # Enable the asset pipeline
    config.assets.enabled = true
    config.assets.initialize_on_precompile = false
    # Set i18n.enforce_available_locales to true
    config.i18n.enforce_available_locales = true

    config.force_ssl = ENV["APPLICATION_HOST"]
    config.middleware.insert_after ActionDispatch::SSL, Rack::CanonicalHost, ENV["APPLICATION_HOST"] if ENV["APPLICATION_HOST"]
    config.middleware.insert_after ActionDispatch::Static, Rack::Deflater
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    #StanfordCoreNLP.jar_path = Rails.root.join("config/nlp/stanford-nlp/")
    #StanfordCoreNLP.model_path = Rails.root.join("config/nlp/stanford-nlp/models")

    #StanfordCoreNLP.use :english
    #StanfordCoreNLP.model_files = {}
    #StanfordCoreNLP.default_jars = [
    #  'joda-time.jar',
    #  'xom.jar',
    #  'stanford-corenlp-3.9.1.jar',
    #  'stanford-corenlp-3.9.1-models.jar',
    #  'jollyday.jar',
    #  'bridge.jar'
    #]

  end
end
