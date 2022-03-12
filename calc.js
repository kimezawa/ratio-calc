// 小数点第1位未満を四捨五入する
function round01(value) {
    return Math.round(value * 10) / 10;
}

$(() => {
    // 計算ボタン押下時の処理
    $('button#calc').on('click', () => {
        var width = $('#width').val();
        var height = $('#height').val();
        var adjust = $('input[name="adjust"]:checked').val();

        // 横に合わせる場合
        if(adjust == 'adjustWidth') {
            $('#wRatio1, #wRatio2, #wRatio3').text(width);
            // 16:9
            $('#hRatio1').text(round01((width / 16) * 9));
            // 4:3
            $('#hRatio2').text(round01((width / 4) * 3));
            // 黄金比
            $('#hRatio3').text(round01(width * 1.618));
        }
        // 縦に合わせる場合
        if(adjust == 'adjustHeight') {
            $('#hRatio1, #hRatio2, #hRatio3').text(height);
            // 16:9
            $('#wRatio1').text(round01((height / 9) * 16));
            // 4:3
            $('#wRatio2').text(round01((height / 3) * 4));
            // 黄金比
            $('#wRatio3').text(round01(height / 1.618));
        }
    });

    // クリアボタン押下時の処理
    $('button#clear').on('click', () => {
        $('#width, #height').val('');
        $('#wRatio1, #hRatio1, #wRatio2, #hRatio2, #wRatio3, #hRatio3').text('');
    });
});