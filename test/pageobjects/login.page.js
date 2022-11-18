

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#EmailTextInput');
    }

    get inputPassword () {
        return $('#PasswordTextInput');
    }

    get passHidden(){
        return $('//img[@alt="Password hidden. Select to show password"]');

    }

    get btnSubmit () {
        return $('//div[@role="button" and @data-testid="SignInButton"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
       await this.passHidden.click();
       await this.btnSubmit.click();
       //await browser.pause(10000);
       
    }

  

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        browser.maximizeWindow()
        return super.open('login');
    }
}

module.exports = new LoginPage();
