
const LoginPage = require('../pageobjects/login.page');
const ProfilesPage = require('../pageobjects/profiles.page');
const SearchPage = require('../pageobjects/search.page');
const HomePage = require('../pageobjects/home.page');
const Asset = require('../pageobjects/asset.page');


describe('Testing liveSoccer with override located in Poland.', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('hbm.eu.test.pl+010@hbo.com', 'Gaingun&667');
            
    });

    it('Select a profile', async() => {
        await ProfilesPage.mainProfile();
        
    });


    it('Go to multiverse with Override', async() => {
        await SearchPage.clickOnSearch();
        await SearchPage.writeOverride('Overrid3 PL');
        await SearchPage.clickOnMultiverse();
        await ProfilesPage.mainProfile();
       
    });


    it('Playback the live asset in HBO3', async () =>
     {
        await HomePage.selectLiveAsset();
        await Asset.playbackTheAsset();
        await browser.pause(10000);
        browser.keys('\uE007');
        await browser.pause(15000);
        expect(Asset.btnLive).toBeDisplayed();
    });

   
});


