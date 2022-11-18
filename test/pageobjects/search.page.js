


class SearchPage{

    get btnSearch(){
        return $('[href="/search"]');

    }

    get inputAsset(){
        return $('[placeholder="What are you looking for?"]');
    }

    get btnMultiverse(){
        return $('//div[contains(text(),"CONFIRM")]');
    }

    async clickOnSearch(){

        await this.btnSearch.click();
    }

    async writeOverride(override){
        await browser.pause(2000);
        await this.inputAsset.setValue(override);
    }

    async clickOnMultiverse(){
        await browser.pause(3000);
        await this.btnMultiverse.click();
        
    }

}

module.exports = new SearchPage();

