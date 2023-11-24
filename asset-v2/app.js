/* amogus sussy baka deez nuts kofitezed */
var app = new function() {
    this.name = "Pop Zey", this.version = "Unreleased v2", this.date = "2024", this.folder = "asset-v2/", this.looptime = 8000, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0b252b", this.col0 = "#a5d7c6", this.col1 = "#6dafa3", this.col2 = "#2f6c6a", this.col3 = "#235052", this.col4 = "#18373d", this.animearray = [{
        name: "01tshkuh",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "02kick",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "03clap",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "04dist",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "06kickbass",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "10longbass",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "11pluck",
        color: "981e25",
        uniqsnd: !0
    }, {
        name: "12hmmpad",
        color: "981e25",
        uniqsnd: !0
    }, {
        name: "13toungtu",
        color: "981e25",
        uniqsnd: !0
    }, {
        name: "14tutuarp",
        color: "981e25",
        uniqsnd: !0
    }, {
        name: "15siffle",
        color: "981e25",
        uniqsnd: !1
    }, {
        name: "16weywe",
        color: "17191e",
        uniqsnd: !0
    }, {
        name: "17eager",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }, {
        name: "05clics",
        color: "17363c",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Pop Zey",
        src: "v1-b1-thelastday-hb.mp4",
        code: "2,3,5,6,15",
        sound: "bonus-thelastday",
        aspire: "aspire-thelastday"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
