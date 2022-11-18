
class ProfilesPage{

    get selectMainProfile(){
        return $('//div[contains(text(),"EMEA Poland 01")]');

    }

    async mainProfile(){
        await browser.pause(5000);
        await this.selectMainProfile.click();
    }
    
}

module.exports = new ProfilesPage();