//ボタンの変数指定
const startButton = $('#start');
const stopButton = $('#stop'); 
const resetButton = $('#reset');

let hour = 0;//時
let minute= 0;//分
let second = 0;//秒
let ms = 0;//ミリ秒
let timer = $('#timer');//表示時間
let stopWatch;//カウント管理

//経過時間を計測
function countUp() {
    ms++;
      if(ms % 10 === 0){//10msで1秒
        second ++;
        ms = 0;
      if(second % 60 === 0){//60秒で1分
        minute ++;
        second = 0;
      if(minute % 60 === 0){//60分で1時間
        hour ++;
        minute = 0;
      }
    }
  }
  timer.text(hour+':'+minute+':'+second+':'+ms);//表示時間のテキスト表示
}

//スタートボタン
startButton.on('click',function(){
  stopWatch = setInterval(countUp, 100);//セットインターバルを変数指定
  startButton.prop('disabled',true);
  stopButton.prop('disabled',false);
  resetButton.prop('disabled',false);
});

//ストップボタン
stopButton.on('click',function(){
  clearInterval(stopWatch);//指定したセットインターバル変数をクリア
  startButton.prop('disabled',false);
  stopButton.prop('disabled',true);
  resetButton.prop('disabled',false);
});

//リセットボタン
resetButton.on('click',function(){
  timer.text("0:0:0:0");//表示時間を初期表示に
  hour= 0;
  minute = 0;
  second = 0;
  ms = 0;
  clearInterval(stopWatch);//指定したセットインターバル変数をクリア
  startButton.prop('disabled',false);
  stopButton.prop('disabled',true);
  resetButton.prop('disabled',true);
})