

class Asset{

    get playback(){
        return $('[aria-label="Play HBO3."] [alt]');
    }

    get btnLive(){
        return $('//div[contains(text(),"LIVE")]');
    }

    async playbackTheAsset(){
        await this.playback.click();
        
    }
}
module.exports = new Asset();