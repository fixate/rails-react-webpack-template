SeoHelper.configure do |config|
  config.site_name = AppConfig.site[:name]
	config.site_name_formatter  = lambda { |text, site_name| "#{text} - #{site_name}" }
end
