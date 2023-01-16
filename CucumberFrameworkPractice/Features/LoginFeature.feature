Feature:Login


Scenario: Successful Login with valid data

Given User launch chrome browser
When User open URL "https://www.flipkart.com/"
And User enter userId "9170482534" and password as "Manish@2001"
And Click on the Login
Then Page title should be "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
When User logout the page 
Then Page title should be "Welcome My Bank"
And Close browser
18001801290
18601801290
39020202
