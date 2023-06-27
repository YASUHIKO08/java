//ボタンの変数指定
const startButton = $('#start');
const stopButton = $('#stop'); 
const resetButton = $('#reset');
const timer = $('#timer');
let cnt = 0;

function count(){
  timer.textContent(cnt);
  cnt++;
}
  

startButton.on('click',function(){
  startButton.prop('disabled',true);
  stopButton.prop('disabled',false);
  resetButton.prop('disabled',false);
  alert("OK!");
  timer.setInterval(count,1000);
});

stopButton.on('click',function(){
  startButton.prop('disabled',false);
  stopButton.prop('disabled',true);
  resetButton.prop('disabled',false);
  alert("OK!");
});

resetButton.on('click',function(){
  timer.text("00:00:00");
  startButton.prop('disabled',false);
  stopButton.prop('disabled',true);
  resetButton.prop('disabled',true);
  alert("OK!");
})