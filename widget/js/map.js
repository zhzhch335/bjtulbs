 //打开地图
 apiready = function() {
     var map = api.require('bMap');
     map.open({
         rect: {
             x: 0,
             y: 0,
             w: api.winWidth,
             h: api.winHeight
         },
         center: {
             lon: 116.3476888946,
             lat: 39.9565857139
         },
         zoomLevel:17,
         //fixedOn:"frame0"
     }, function(ret) {
         if (ret.status) {
             //alert("success!");
         }
     });
 };    