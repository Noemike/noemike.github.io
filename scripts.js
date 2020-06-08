console.log('Hi Noemi')

$('#button1').click(() => {
    console.log('Yeah, you clicked me')
});

$('#button2').on('click', function () {
    $('#button1').html('Shine')
})

$('#button3').click (() => {
    $('button').css("background-color","blue")
});

// 8.Add some fun feature to your Event Listeners

let colors = ['blue', 'red', 'yellow', 'green']