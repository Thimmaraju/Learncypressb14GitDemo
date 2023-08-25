Feature: Verify Add Employee functionality

    Background: Navigate add employee page
        Given User launch the Application
        When User enter username "Admin" and password "admin123"
        And User clicks on login button
        Then User should be navigated to dasboard page
        And User clicks on PIM
        And  User clicks on Add employee

    Scenario Outline: Verify Add employee with valid inputs
        And User enter firstname "<firstname>" and lastname "<lastname>"
        And  User click on save button
        Then User should get successfull message
        Examples:
            | firstname | lastname |
            | Raju      | G        |
            | Arpitha   | G        |
            | kishore   | k        |
            | Murali    | SR       |

    Scenario: Verify Add employee mandotory fields
        And  User click on save button
        # Then User should see required message