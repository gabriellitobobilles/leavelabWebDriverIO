var Page = require('./page')
const assert = require("assert");

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    wholePage: { get: function () { return browser.maximizeWindow(); } },
    ENTER: { get: function () { return browser.keys('Enter'); } },
    username: { get: function () { return browser.$(`[id="email_inp"]`); } },
    password: { get: function () { return browser.$(`[id="pass_inp"]`); } },
    loginbtn: { get: function () { return browser.$(`[id="submit_login"]`); } },
    gmailBtn: { get: function () { return browser.$(`[class="btn btn-red"]`); } },
    userNamegmail: { get: function () { return browser.$(`[id="identifierId"]`); } },
    userPasswordgmail: { get: function () { return browser.$(`[id="identifierId"]`); } },
    gmailNxtbtn: { get: function () { return browser.$(`[class="VfPpkd-vQzf8d"]`); } },
    registerNewComp: { get: function () { return browser.$(`.btn.btn-green`); } },
    leaveRequestBtn: { get: function () { return browser.$(`[id="book_time_off_btn"]`); } },
    

   
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    registration: { value: function(){
        this.gmailBtn.waitForDisplayed({ timeout: 270000 });
        this.registerNewComp.click();
        browser.pause(900000);
        
    }},

    AccountLogin: { value: function(username , password){
        this.gmailBtn.waitForDisplayed({ timeout: 270000 });
        this.username.click();
        this.username.setValue(username);
        this.password.click();
        this.password.setValue(password);
        this.ENTER;
        this.leaveRequestBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(this.leaveRequestBtn.isExisting(), true)
    }},

    
    gmailAccount: { value: function(username , password){
        this.username.waitForDisplayed({ timeout: 270000 });
        this.gmailBtn.click();
        this.userNamegmail.click();
        this.userNamegmail.setValue(username);
        this.ENTER;
        // browser.pause(900000);
        // this.username.setValue(username);
        // this.password.click();
        // this.loginbtn.click();
        // this.errorMsg.waitForDisplayed({ timeout: 270000 });
        // console.log(this.errorMsg.getText())
        // assert.strictEqual(this.errorMsg.isExisting(), true)
        // assert.strictEqual(this.errorMsg.getText() == `The password that you've entered is incorrect. Forgotten password?`,true)
    }},


});

module.exports = LoginPage;