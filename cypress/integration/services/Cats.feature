@feature-tag
Feature: I want to validate cat api
  @tag-to-include
  Scenario: Validate correct status of enpoint response
    Given The enpoint for search cat gifs
    Then The response can not be null or different of 200