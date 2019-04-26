var body = document.body;

//list of the possible number
var num_arr; 

var ans_arr;

//make the number_pick as a function to make code short.
function pickNum(){
    num_arr= [1,2,3,4,5,6,7,8,9];
    ans_arr= []; // this array will have 4 random number from the list.
    for(var i=0; i< 4; i+=1){
        var sele = num_arr.splice(Math.floor(Math.random()*(9 - i)),1)[0];
        ans_arr.push(sele);
    }
}
pickNum();
console.log(ans_arr);
//its for result
var w_result = document.getElementById('resultHeader');
//body.append(w_result);
//create the form of it.
var w_form = document.getElementById('form1');
//document.body.append(w_form);
//about the textbox to input the number
//var text_input = document.getElementById('ans');

//text_input.type='text';
//text_input.maxLength=4;  // set the max entered number -> 4
//add the text box.
//w_form.append(text_input);
/*
//add the button 

//enter the text inside the button.
w_button.textContent = 'Enter';

w_form.append(w_button);
*/
var w_button = document.getElementById('yas');
var w_tryNum =0;
var w_image = document.getElementById('homerunImage');
var flag = 0;

function checkAns(){
    var text_input = document.getElementById('ans');
    

    w_tryNum+=1;
    
    var ans = text_input.value;
    console.log("try time: " + w_tryNum)
    console.log(ans,ans_arr,ans==ans_arr.join(''));
    if( ans == ans_arr.join('')){
        w_result.textContent='Home Run!!! Your attempts : ' + w_tryNum; // Fix1
        // w_image.src = "homerun.jpg";
        flag = 1;
        text_input.value='';
        text_input.focus();
        pickNum();
        w_tryNum=0;
    }else{
        
        var user_ansArr = ans.split('');
        var strike =0;
        var ball =0;
        var out =0;
        
        console.log('wrong answer!', user_ansArr);
        if(w_tryNum>10){
            w_result.textContent='You failed over 10 times! answer is : '+ans_arr.join(',');
            w_trynum =0;
            
            pickNum();

        }else{
            for( var i = 0 ; i< 4; i+=1){

                if(Number(user_ansArr[i]) == ans_arr[i]){
                    strike +=1;
                }else if(ans_arr.indexOf(Number(user_ansArr[i]))>-1){
                    ball+=1;
                }else{
                    out+=1;
                }
                w_result.textContent = strike+' strike & '+ball + ' ball & ' + out +' out';
                text_input.value='';
                text_input.focus();
            }
        }
        
    }
    w_image.src = "homerun.jpg";
    text_input = document.getElementById('ans');

    //you tried over 10 times. Please enter anyting 
    // to play again.
    
}

// add the event & event.preventDefault() = > prevent the reset all things.
// 'submit' -> default works is refresh the page.
/*
w_form.addEventListener('submit', function call_back(event){
    w_tryNum+=1;
    event.preventDefault();
    var ans = text_input.value;
    console.log(ans,ans_arr,ans==ans_arr.join(''));
    if( ans == ans_arr.join('')){
        w_result.textContent='HomeRun!!! you tried';
        text_input.value='';
        text_input.focus();
        pickNum();
        w_tryNum=0;
    }else{
        //w_tryNum+=1;
        // if user didn't get the answer, then 
        // show the hints to the user.
        var user_ansArr = ans.split('');
        var strike =0;
        var ball =0;
        var out =0;
      
       console.log('wrong answer!', user_ansArr);
       if(w_tryNum>10){
            w_result.textContent='You failed over 10 times! answer is : '+ans_arr.join(',');
            w_trynum =0;
            text_input.value='';
            text_input.focus();
            pickNum();

       }else{
        for( var i = 0 ; i< 4; i+=1){

            if(Number(user_ansArr[i]) == ans_arr[i]){
                strike +=1;
            }else if(ans_arr.indexOf(Number(user_ansArr[i]))>-1){
                ball+=1;
            }else{
                out+=1;
            }
            w_result.textContent = strike+'strike & '+ball + 'ball ' + out +' out';
            text_input.value='';
            text_input.focus();
        }
       }
        
    }
});
*/


