javascript:( function () {
     function Press(e) {
         var l = String.fromCharCode(e.which).toLowerCase();
        if (l == 'g')
        {
            Game.Objects.Farm.sell(100,1);
            Game.Objects.Farm.buy(100);
        }
     }
     var name = 'Holy shit stb is so fucking fat';
     var desc = 'press g to trigger godzamok by selling and immediately buying 100 farms';
     document.onkeypress = Press;
     Game.Notify(name,desc,'b','c','d');
 }());