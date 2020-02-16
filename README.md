# JavaScript: Password Generator

This application generates a random password based on user-selected criteria. This app runs in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code. The user interface is responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Handled Criteria

```
WHEN I click the button to generate a password
THEN I am prompted to choose a length of at least 8 characters and no more than 128 characters
WHEN My password length entry is illegal ( not a positive interger of 8 to 128 characters)
THEN A wrong entry alert shows up, the password is not generated
WHEN My password length entry is legal
THEN I am prompted for character types to include in the password (1-lowercase, 2-uppercase, 4-numeric, 5-special characters)
WHEN I select less than 3 character types
THEN An alert shows up, the password is not generated 
WHEN I select at least 3 character types
THEN My passport including at least one character for each selected type is generated
WHEN the password is generated
THEN the password is written to the page
```