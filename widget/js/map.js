 //打开地图
 function pushMap() {
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
         zoomLevel: 17,
         //fixedOn:"frame0"
     }, function(ret) {
         if (ret.status) {
             //alert("success!");
         }
     });
 }
 //将地图中心移至自身位置
 function getLocation() {
     var map = api.require('bMap');
     map.getLocation({
         accuracy: '1m',
         autoStop: true,
         filter: 1
     }, function(ret, err) {
         if (ret.status) {
            if(ret.lon<116.34||ret.lon>116.36){
                popupAlert("您正处在校外，可能无法规划路线！");
            }            
             map.setCenter({
                 coords: {
                     lon: ret.lon,
                     lat: ret.lat
                 }
             });
         } else {
             alert(err.code);
         }
     });
 }
 //回到校园
 function returnSchool(){
    var map=api.require("bMap");
    map.setCenter({
                 coords: {
                     lon: 116.3476888946,
                     lat: 39.9565857139
                 }
             });
 }