function popupAlert(content) {
    var dialogBox = api.require('dialogBox');
    dialogBox.popupAlert({
        tapClose: false,        
        msg: {
            content: content,
            okBtnTitle: '确定',            
        },
        styles: {
            bg: '#fff',            
            maskBg: 'rgba(0,0,0,0.5)',
            h: 180,
            msg: {
                color: '#000000',
                size: 18,
                maginLR: 10,
                maginT: 15
            },
            border: {                
                top: '5 #7777FE',                
            },
            okBtn: {
                bg: "#3E00FF",
                highlightBg:"#9C98FF",
                color: '#FFFFFF',
                size: 20,
                maginLR: 10,
                maginB: 10
            }
        }
    }, function(ret) {
         if(ret.eventType=='ok'){
             dialogBox.close({dialogName: 'popupAlert'});
         }
    });
}