# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'


# Precompile additional assets.
def javascripts_to_precompile(path = nil)
	glob_path = Rails.root.join("app/assets/javascripts/#{path}*.{js,jsx}")
	Dir.glob(glob_path).map do |file|
		File.join(*[path, File.basename(file)].compact)
	end
end

# Precompile all application assets
Rails.application.config.assets.precompile += javascripts_to_precompile

Rails.application.config.assets.precompile += %w( style.css )

Rails.application.config.assets.precompile += %w( .svg .eot .woff .ttf )

Rails.application.config.assets.configure do |env|
  # env.unregister_postprocessor 'application/javascript', Sprockets::SafetyColons
end
