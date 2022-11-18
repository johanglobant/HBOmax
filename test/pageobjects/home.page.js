


class HomePage{

    get liveAsset(){
        return $('[aria-label="HBO3. HBO3"] .r-8akbws');
    }

    async selectLiveAsset(){
        await this.liveAsset.click();
    }

}

module.exports = new HomePage();