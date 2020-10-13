Feature: Book travel to custom planet in Space & Beyond
  Scenario: Book travel to Sant Cugat Del Valles without login or send pay
    Given I open page
    When Select init travel
      And Select finish travel
      And Select 1 adults
      And Select 1 children
      And Select a Sant Cugat Del Valles planet