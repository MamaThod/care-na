function numberWithCommas(num) {
     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   }

function average(value) {

     
     
     if (value > 1000){

          let numbercommas = numberWithCommas(value);
          let average = value/30 ;

          document.getElementById("show").innerHTML = "เงินเดือนของคุณคือ : " +numbercommas+ " บาท";
          document.getElementById("show_average").innerHTML = " คุณควรจะใช้เงินวันละ ";
          document.getElementById("show_box").style.border = "1px solid #fff";
          document.getElementById("show_box").style.display = "flex";
          document.getElementById("buffet").style.display = "none";

          if (average <= 300){
               document.getElementById("average_money").innerHTML = numberWithCommas(average.toFixed(0))+" บาท";
               document.getElementById("describe").innerHTML = " (โห.. คุณก็ใช้ประหยัด ๆ หน่อยนะ) ";
          } else if (average < 1000) {
               document.getElementById("average_money").innerHTML = numberWithCommas(average.toFixed(0))+" บาท";
               document.getElementById("describe").innerHTML = " (แบบสามารถมีเงินเก็บได้นะ) ";
               document.getElementById("buffet").style.display = "none";
          } else if (average <= 3000) {
               document.getElementById("average_money").innerHTML = numberWithCommas(average.toFixed(0))+" บาท";
               document.getElementById("describe").innerHTML = " (ว้าว!! คุณก็รวยเหมือนกันนะเนี้ย) <br> เรามีร้านบุฟเฟ่ต์อร่อย ๆ แนะนำเยอะเลย ";
               document.getElementById("buffet").style.display = "flex";
          }
          else {
               document.getElementById("average_money").innerHTML = numberWithCommas(average.toFixed(0))+" บาท";
               document.getElementById("describe").innerHTML = " (!!WOW!! จะรวยเกินปุยมุ้ย) <br> โอนมาแบ่งเราบ้างก็ได้นะ อิๆ <br> กรสิกร : 1234567890";
               document.getElementById("buffet").style.display = "none";
          }
          
     } else if (value == ""){
          document.getElementById("show").innerHTML = "ถ้าไม่พิมพ์แล้วจะกดทำไม!??"
          document.getElementById("show_box").style.display = "none";
          document.getElementById("buffet").style.display = "none";
     }else if (value <= 0) {
          document.getElementById("show").innerHTML = "ใส่มาแบบนี้จะให้ คำนวณยังไง ห๊ะ!??"
          document.getElementById("show_box").style.display = "none";
     }
     
     else if(value <= 1000){
          document.getElementById("show").innerHTML = "เงินเดือน "+numberWithCommas(value)+" บาทเนี่ยนะ เราว่าคุณเริ่มกวนเราละ! หรือไม่เจ้านายก็โกงเงินคุณล่ะ สู้ ๆ นะ<br> กรอกใหม่เอาดี ๆ";
          document.getElementById("show_box").style.display = "none";

     } 
     else {
          document.getElementById("show").innerHTML = "ใส่มาแบบนี้จะให้ คำนวณยังไง ห๊ะ!??"
          document.getElementById("show_box").style.display = "none";
          document.getElementById("buffet").style.display = "none";
     }
     
}

function averagemoney(value){
     average(value)
     
}

function savingmoney(value) {

     
     
     if (value > 1000){

          let numbercommas = numberWithCommas(value);
          let average = ((value/30)-((value/30)/10)) ;
          let save = (value/30)/10;
          let money_within_year = save*365;

          document.getElementById("show").innerHTML = "เงินเดือนของคุณคือ : " +numbercommas+ " บาท";
          document.getElementById("show_average").innerHTML = " คุณควรจะใช้เงินวันละ ";
          document.getElementById("show_box").style.border = "1px solid #fff";
          document.getElementById("show_box").style.display = "flex";
          document.getElementById("average_money").innerHTML = numberWithCommas(average.toFixed(0))+" บาท";
          document.getElementById("show_save").innerHTML = " และเก็บเงินวันละ ";
          document.getElementById("save_money").innerHTML = numberWithCommas(save.toFixed(0))+" บาท";
          document.getElementById("describe").innerHTML = " ภายใน 1 ปีคุณจะมีเงินเก็บทั้งหมด <br>"
          document.getElementById("money_year").innerHTML = numberWithCommas(money_within_year.toFixed(0))+" บาท";
          
     } else if (value == ""){
          document.getElementById("show").innerHTML = "ถ้าไม่พิมพ์แล้วจะกดทำไม!??"
          document.getElementById("show_box").style.display = "none";
     }
     else if (value <= 0) {
          document.getElementById("show").innerHTML = "ใส่มาแบบนี้จะให้ คำนวณยังไง ห๊ะ!??"
          document.getElementById("show_box").style.display = "none";
     }
     else if(value <= 1000){
          document.getElementById("show").innerHTML = "เงินเดือน "+numberWithCommas(value)+" บาทเนี่ยนะ เราว่าคุณเริ่มกวนเราละ! หรือไม่เจ้านายก็โกงเงินคุณล่ะ สู้ ๆ นะ<br> กรอกใหม่เอาดี ๆ";
          document.getElementById("show_box").style.display = "none";

     } 

     else {
          document.getElementById("show").innerHTML = "ใส่มาแบบนี้จะให้ คำนวณยังไง ห๊ะ!??"
          document.getElementById("show_box").style.display = "none";
     }
     
}

function save(value){
     savingmoney(value)
     
}
