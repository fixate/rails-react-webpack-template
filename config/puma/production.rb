#!/usr/bin/env puma

HOME=ENV['APP_HOME'] || ENV['HOME']
ROOT=File.dirname(__FILE__)

workers Integer(ENV['PUMA_WORKERS'] || 3)
threads Integer(ENV['MIN_THREADS']  || 1), Integer(ENV['MAX_THREADS'] || 16)

preload_app!

port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'

on_worker_boot do
  # ActiveSupport.on_load(:active_record) do
  #   ActiveRecord::Base.establish_connection
  # end
end

