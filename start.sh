#!/usr/bin/env bash
trap 'bundle exec rake db:migrate' SIGTERM
bin/puma -C config/puma.rb