// var Page = require('./page')
var Page = require('./page')
var Name = require('./name')
const assert = require("assert");

var LoginPage = Object.create(Page,{
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
    firstName: { get: function () { return browser.$(`[id="name_inp"]`); } },
    lastName: { get: function () { return browser.$(`[id="lastname_inp"]`); } },
    compEmail: { get: function () { return browser.$(`[id="email_inp"]`); } },
    compPass: { get: function () { return browser.$(`[id="pass_inp"]`); } },
    compConfirmPass: { get: function () { return browser.$(`[id="confirmed_pass_inp"]`); } },
    companyName: { get: function () { return browser.$(`[id="company_name_inp"]`); } },
    countrySelect: { get: function () { return browser.$(`[id="country_inp"]`); } },
    timezoneSelect: { get: function () { return browser.$(`[id="timezone_inp"]`); } },
    createBtn: { get: function () { return browser.$(`[id="submit_registration"]`); } },
    leaveRequestBtn: { get: function () { return browser.$(`[id="book_time_off_btn"]`); } },
    blockoutDateBtn: { get: function () { return browser.$(`[class="btn btn-white btn-lg blackout-btn"]`); } },
    
    
    
    
   
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },


    registration: { value: function(){
        this.gmailBtn.waitForDisplayed({ timeout: 270000 });
        this.registerNewComp.click();
        this.firstName.click();
        this.firstName.setValue(Name.generateName());
        this.lastName.click();
        this.lastName.setValue(Name.generateName());
        this.compEmail.click();
        this.compEmail.setValue(Page.EmailGenerator());
        this.compPass.click();
        this.compPass.setValue(`qwerasdf`);
        this.compConfirmPass.click();
        this.compConfirmPass.setValue(`qwerasdf`);
        this.ENTER;
        this.companyName.click();
        this.companyName.setValue(Page.CompanyNameGenerator());
        this.countrySelect.selectByVisibleText('US: United States of America')
        this.timezoneSelect.selectByVisibleText('America/Los_Angeles')
        this.createBtn.click();
        expect(this.leaveRequestBtn).toBeDisplayed();
        assert.strictEqual(this.blockoutDateBtn.isExisting(), true)
        
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