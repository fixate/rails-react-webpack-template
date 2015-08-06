module ApplicationHelper
  def js_entrypoint(*apps)
    content_for :js_entrypoint do
      apps.map { |app| javascript_include_tag "#{app}-bundle" }.join.html_safe
    end
  end
end
