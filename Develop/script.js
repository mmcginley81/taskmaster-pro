/* 
Psuedo Logic 
1.) Highlight the past time as grey
2.) I want to highlight the current time as red
3.) highlight the future time as green
4.) input text into the textarea  done 
5.) when I add on.click to button I save my text to local storage Key value pair would be the button that corresponds with time and text (time, value) done
6.) When refreshing I want to pull text from my local storage DO THIS NEXT done
7.) Change the highlighted section as time changes
*/

$(document).ready(function(){

    // question - can I load items by id to put them in the right spots or by an array?
    // let taskList = []

    // let savedTask = function below   
$('.saveBtn').on('click', function(){
    const time = $(this).attr('id')
    const value = $(this).siblings('.description').val()
    console.log(time, value)
    localStorage.setItem(time,value)
    
});


// loads the index for div hour classes to return the text value on the page load
for (let i=9; i<18; i++){
$(`#${i}`).siblings('textarea').val(localStorage.getItem(i))
}

const currentHour = moment().hours();

console.log(currentHour)

// Grab the current day to go at the top of the sheet 
$('#currentDay').text(moment().format('LL'))

$('.row').each(function(){
    const rowHour = parseInt($(this).children('button').attr('id'))
    //console.log(`rowHour: ${rowHour}`)

    if(rowHour < currentHour ){
        $(this).addClass('past')
    }
    else if(rowHour === currentHour){
        $(this).removeClass('past')
        $(this).addClass('present')
    }
    else{
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
})






})