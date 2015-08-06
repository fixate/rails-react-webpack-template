source 'https://rubygems.org'
ruby "2.2.0"

gem 'rails', '4.2.3'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Templating engine
gem 'slim-rails'

# SEO
gem 'seo_helper', '~> 1.0.2'
gem 'sitemap_generator', '~> 5.0.5'

# Instrumentation
gem 'newrelic_rpm', '~> 3.12.1'
gem 'le', '~> 2.6.1'

# Health check endpoint
gem 'rack-health', '~> 0.1.2'

# JSON
gem 'oj', '~> 2.7'

# Use puma as the app server
gem 'puma', '~> 2.10.2'

# Process start
gem 'foreman', '~> 0.63'

# Development and Debugging
group :development do
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
end

# Testing
gem 'simplecov', require: false, group: :test
group :development, :test do
  gem 'rspec-rails'

  # Guard
  gem 'guard-rails'
	gem 'listen', '~>2.7.12' # https://github.com/guard/listen/wiki/Duplicate-directory-errors
  gem 'guard-rspec'
  gem 'guard-bundler'

  # Notifications
  gem 'rb-inotify', require:  false
  gem 'rb-fsevent', require:  false
  gem 'rb-fchange', require:  false

	# gem 'terminal-notifier', require: false
  gem 'libnotify' if RUBY_PLATFORM =~ /linux/i
end

group :development, :test do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production, :staging do
	gem 'rails_12factor', '~> 0.0.2'
	gem 'rails_stdout_logging', '~> 0.0.3'
end

