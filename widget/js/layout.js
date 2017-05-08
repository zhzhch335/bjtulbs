    function pushbutton() {
        var button = api.require('UIButton');
        button.open({
            bg: {
                normal: "widget://image/menu.png"
            },
            rect: {
                x: 20,
                y: api.winHeight - 100,
                w: 50,
                h: 50
            },
            title: {
                size: 40,
                highlight: '',
                active: '',
                normal: '',
                highlightColor: '#000000',
                activeColor: '#000adf',
                normalColor: '#ff0000',
                alignment: 'center'
            },
        }, function(ret, err) {
            if (ret.eventType == "click") {
                pushMenu();
            }
        });
    }

    function pushMenu() {
        var MNStack = api.require('MNStack');
        MNStack.open({
            startCoords: {
                x: 80,
                y: 298,
            },
            styles: {
                bg: 'rgba(0,0,0,0.7)',
                itemHeight: 50,
                titleColor: '#333'
            },
            items: [{
                title: '我的位置',
                bgColor: '#fff',
                icon: "widget://image/bottombtn0101.png"
            }, {
                title: '回到校园',
                bgColor: '#fff',
                icon: "widget://image/bottombtn0102.png"
            }, {
                title: '地点搜索',
                bgColor: '#fff',
                icon: "widget://image/bottombtn0201.png"
            }, {
                title: '流程搜索',
                bgColor: '#fff',
                icon: "widget://image/bottombtn0301.png"
            }]
        }, function(ret, err) {
            switch(ret.index){
                case 0:
                    getLocation();
                    break;
                case 1:
                    returnSchool();
                    break;
            }            
        });
    }
    function pushInputbox(){
        
    }