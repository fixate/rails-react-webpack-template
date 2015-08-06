require 'yaml'
require 'erb'

module AppConfig
	@@_CONFIGS = {}

	def self.load_config(path)
		config = YAML.load(ERB.new(File.read(path)).result)
		data = if config.try(:has_key?, Rails.env)
						 config[Rails.env]
					 else
						 config || {}
					 end

		data.try(:with_indifferent_access) || data
	end


	config_dir = Rails.root.join('config/app/*.yml')

  Dir[config_dir].each do |path|
		c = File.basename(path, '.yml').underscore.to_sym
		@@_CONFIGS[c] = load_config(path)
		define_singleton_method(c) do
			@@_CONFIGS[c]
		end
  end
end
