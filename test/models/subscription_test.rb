# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  subscriber_id :integer          not null
#  channel_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class SubscriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
