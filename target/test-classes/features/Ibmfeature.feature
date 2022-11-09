Feature: Registration

  Scenario Outline: Create a New User
    Given user on the homepage
    And user click on Sign in
    When user enters "<firstname>" firstname, "<lastname>" lastname , "<e-mail>" email, "<username>" username , "<pass>" pass and "<confirmpass>" confirmpass following datas
    And user clicks register button
    Then user is created

    Examples: 
      | firstname | lastname | e-mail        | username    | pass | confirmpass |
      | test11    | Indhu    | test@test.com | testindhu12 | test | test        |

  Scenario Outline: Login User
    Given user on the homepage
    When user enter "<username>" username and "<password>" password
    And user clicks on login button
    And user click on Inbox button
    And user click on compose email
    When user user enters email datas
    And user clicks on send message button
    Then Email is sent successfully

    Examples: 
      | username  | password |
      | testindhu | test     |
