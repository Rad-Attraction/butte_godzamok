/*
Browser bookmarklet version.
in the browser, make a new bookmark,
and for the url, put the following:
javascript:Game.LoadMod("https://rad-attraction.github.io/butte_godzamok/buttegoszamok.js");
Now, whenever in the cookie clicker browser game, open that bookmarklet, and the mod will load.
*/
javascript:( function () {
    function Press(e) {
        var l = String.fromCharCode(e.which).toLowerCase();
        if (l == 'g')
        {
            Game.Objects.Farm.sell(-1,1);
            Game.Objects.Farm.buy(100);
            /*
            helpful spritesheet:
            https://www.spriters-resource.com/browser_games/cookieclicker/sheet/79015/
            godzamok: [23,18]
            neverclick: [12,0]
            */
            var titles=["GRRR", "SCREEONK", "GAOOOWWWW", "CHEEREEE", "TCHEEERRR", "ROAR", "RAWR"]
            var descs=["Roar!","Rawr!","Screeonk!","Screeonk!","Screeonk!","Screeonk!", "There he goes!", "Uh-oh!", "There goes the town.", "I hope he steps on my office.", "-100 farms","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!","-100 Farms!", "100 farms destroyed.", "There goes your farms.", "Oh no, not the farms!", "\">.==.<\"","-100 Fractal Engines! Nah, just kidding.","-100 Chancemakers! Nah, just kidding.","-100 Antimatter Condensers! Nah, just kidding.", "Some lizards just wanna watch the world burn.", "Nobody needed those farms.", "Nooooo, my automatic sugar cane farm!", "Wheat farms destroyed.", "Cocoa plantations annihilated.", "Macadamia orchards obliterated.", "Cookie farms crumbled.","If you got Click Frenzy, congratulations.","If you got Elder Frenzy, congratulations.","If you got Dragonflight, congratulations.","If you got Dragon Harvest, congratulations.", "Congratulations, you have triggered Godzamok more times than any other player! A special gift is being shipped directly to your address, my treat. ;3"]
            Game.Notify(choose(titles),choose(descs),[23,18]);

        }
    }
    var name = "Godzamok Roar loaded!";
    var desc = "Mash g to trigger Godzamok by selling all farms and immediately buying 100.";
    document.onkeypress = Press;
    Game.Notify(name,desc,[23,18]);

}());
