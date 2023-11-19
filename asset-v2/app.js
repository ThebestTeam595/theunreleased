/* amogus sussy baka deez nuts kofitezed */
var app = new function() {
    this.name = "Pop Zey", this.version = "Unreleased v2", this.date = "2024", this.folder = "asset-v2/", this.looptime = 8000, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0b252b", this.col0 = "#a5d7c6", this.col1 = "#6dafa3", this.col2 = "#2f6c6a", this.col3 = "#235052", this.col4 = "#18373d", this.animearray = [{
        name: "01kick",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "02snare",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "03clic",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "04klop",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "05tombreak",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "06bass",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "07mmmhah",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "08tututoung",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "09boowop",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "10woah",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "11nugununugu",
        color: "fe0849",
        uniqsnd: !0
    }, {
        name: "12string",
        color: "fe0849",
        uniqsnd: !0
    }, {
        name: "13lowarp",
        color: "fe0849",
        uniqsnd: !1
    }, {
        name: "14settoarp",
        color: "fe0849",
        uniqsnd: !0
    }, {
        name: "15duuduuduu",
        color: "fe0849",
        uniqsnd: !0
    }, {
        name: "16somuch",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "17casting",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "18ahwoo",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "20mind",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !0
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "The Last Day",
        src: "v1-b1-thelastday-hb.mp4",
        code: "4,6,9,11,19",
        sound: "bonus-thelastday",
        aspire: "aspire-thelastday"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
