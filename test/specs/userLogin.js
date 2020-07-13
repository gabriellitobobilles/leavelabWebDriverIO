var RocksPage = require('../../PageObjects/rocks.page');
const access= require('../../testdata/testdata.js')

describe("Demo",  function() {


    before(function() {
        // runs before all tests in this file regardless where this line is defined.
        RocksPage.open();
        RocksPage.wholePage

    });

    it("User Login using User Account",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDepartment();
    });

    xit("User Login using Google Account",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.gmailAccount(access.GmailAccount.Email, access.GmailAccount.Password);
    });





    after(function() {
        // runs after all tests in this file
        browser.closeWindow()
    });
});
