console.log('Hi Noemi')

$('#button1').click(() => {
    console.log('Yeah, you clicked me')
});

//When the user clicks on the second button change the first button's text
/*$('button').text({
    if (button2.click) {
        
    }
})*/

$('#button3').click (() => {
    $('button').css("background-color","blue")
});