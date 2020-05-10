//iframe层-多媒体
function(id){
$('#player').click(function () {
        vUrl = id;  //获取到播放的url
        var loadstr = '<video width="100%" height="100%"  controls="controls" autobuffer="autobuffer"  preload="metadata" controls muted >' +
                '<source src='+vUrl+' type="video/mp4"></source></video>';
        layer.open({
            type: 1,
            title: false,
            area: ['730px', '500px'],
            shade: [0.8, 'rgb(14, 16, 22)'],
            skin: 'demo-class',
            content: loadstr
        });
    });
}