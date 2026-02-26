# JavaScript Final Homework Preparation

## REQUIREMENTS

### 1. Create a welcome to your account component / page
        1.1 If there is a token stored in the localstorage, the app should try to get the user info

	    1.2 If the token is validated by the app, it should display the user acccount form

	    1.3 If the token is not valid or it does not exist, it should display the registration / login form

### 2. Create a Registration component / page
 	    2.1 Create a Registration form

	    2.2 Form should treat errors (invalid email, user already exists)

	    2.3 Successful registration should display the user account form 

	    2.4 Successful registration should store the athentication token in local storage 

### 3. Create an Authentication component / page 
        3.1. Create an Authentication form (email & password)

        3.2. Form should treat errors (invalid email, invalid credentials)

        3.3. Successful authentication should display the user account form 

        3.4. Successful authentication should store the athentication token in local storage

4. Change your account data
	    4.1. The user should be in the "Your account" page / component

	    4.2. The user should have a valid authentication token

	    4.3. The form should contain all the user info (at least name, email, password)

	    4.4. On form submit the errors should be displayed

	    4.5. On sucessful data change, the ui should display a confirmation message


## DEVELOPMENT STAGES

| REQUIREMENT | FRONTEND | BACKEND |
| -------- | -------- | -------- |
| Registration (#2)| Form + Fetch <br> - errors <br> - redirect <br> - save authentication token | json-server / json-server-auth installed / updated <br>  routes.json file set <br> /register route: implemented <br> Postman / Bruno tests |
| Authentication (#3) | Form + Fetch <br> - errors <br> - redirect <br> - save authentication token | json-server / json-server-auth installed / updated <br>  routes.json file set <br> /login route: implemented <br> Postman / Bruno tests |
| My account Success (#4) | Prefill the form fields & PUT <br> - errors <br> - conofirmation on success | json-server / json-server-auth installed / updated <br>  routes.json file set <br> /users/{userID} route: implemented <br> Postman / Bruno tests |
| My account Redirect (#1) | If token exists in local storage <br> - get user info:  <br> - 200 => show my account (4) <br> - 401 => show registration / login <br><br> If token not exist <br> - show / redirect to registration / login | |



## SESSION VIDEO

[Zoom Recording Link](https://scoalainformala.zoom.us/rec/share/K7KJ49mxmO6fHCIEU0dGAaJXM3M9SmhsEUox7enTM6fYBm0VMxIlyG-cvKcjDy22.h_MCH8Zaf00NWCQZ)

**Passcode:**: RvwQ1$wE