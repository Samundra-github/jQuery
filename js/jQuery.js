
// Syntax of Jquery
// $.('selector').action()

$(document).ready(function () {  // You can also use $ only as a shortcode for this. 
    // document.ready is use to wait the JS code till the html page load.
    // Three types of Selector

    // 1. Element Selector : Selecting HTML elements like h1, p.

    // $('p').click(function () {
    //     console.log("You clicked on ", this)
    //         Using this as a selector 
    //         $(this).hide()
    //         $('p').hide()             
    // })


    // 2. ID Selector : Selecting using ID of that element

    // $('#hideMe').click(function () {
    //     console.log("You Clicked the ID ", this)
    // })


    // 3. Class Selector : Selecting using the class name.

    // $('.hideMe').click(function () {
    //     console.log("You Clicked on Class Name", this)
    // })


    // Other Selectors:

    // Universal Selector : It selects all the HTML 

    // $('*').click( function() {
    //     console.log("You are using Universal Selector.", this)
    // })

    //  Using :first, second in html elements

    // $('p:first').click(function () {
    //     console.log("You Clicked in  ", this)
    // })

    // Events in JQuery:

    // Mouse Events: 

    // 1. onClick = Events after clicking some elements 
    // $('.hideMe').click(function () {
    //     console.log("You Clicked on Class Name", this)
    // })

    // 2. dblClick = Events after double clicking some elements
    // $('p').dblclick(function() {
    //         console.log('you double clicked on p', this)
    // })

    // 3. mouseenter = Events after entering mouse to somewhere in selected elements
    // $('p').mouseenter(function() {
    //             console.log('your mouse enter in p', this)
    // })

    // 4. mouseleave = Events after leaving the selected events
    // $('p').mouseleave(function() {
    //                 console.log('your mouse left from p', this)
    // })

    // 5. Hover = Events after hovering at certain elements. also combination of mouseenter and mouseleave
    // $('p').hover(function() {
    //                 console.log('you are hovering on p', this)
    // }, function() {
    //     console.log("You stoped hovering on ", this)
    // })

    // On method in jquery

    // $('p').on({
    //     click: function () {
    //         alert("Welcome")
    //     },
    //     mouseenter: function () {
    //         console.log("Your mouse enter in ", this)
    //     },
    //     mouseleave: function () {
    //         console.log("Your mouse just left ", this)
    //     }
    // })

    // Hide and show method

    // $('.animate').hide(10000, function() {
    //     console.log("Hidden")
    // })
    // $('.animate').show(10000, function() {
    //     console.log("Shown")
    // })

    // Keyboard Events:

    // 1. keypress = 


    // 2. keydown
    // 3. keyup

    // Form Events:
    // 1. submit
    // 2. change
    // 3. focus
    // 4. blur

    // Document/ Windows Events: 
    // 1. load
    // 2. resize
    // 3. scroll
    // 4. unload

    
    // Using toggle,

    // $('#buttons').click(function() {
    //     $('.animate').fadeOut(1000, function() {
    //         console.log("Fade Out")
    //     }),
    //     $('.animate').fadeIn(1000, function() {
    //         console.log("Fade In")
    //     }),
    //     $('.animate').fadeTo("slow", 0.15) // We can use slow too.
    //     $('.animate').fadeToggle(1000, function() {
    //         console.log("Fade Toggle")
    //     })
    // })

    // Using Slide,

    // $('.animate').slideUp(3000, function() {
    //     console.log("Slide Up Done")
    // })

   // $('.animate').slideDown(3000, function() {
    //     console.log("Slide Down Done")
    // })

    // $('.animate').slideToggle(3000, function() {
    //     console.log("Slide Toggle Done")
    // })


    // Using Animate, 

    // $('.animate').animate({
    //     opacity: 0.31,
    //     height: '350px',
    //     width: '350px'
    // }, 4000)

    // Putting them in queue,

    // $('.animate').animate({opacity: 0}, 4000),
    // $('.animate').animate({opacity: 0.9}, 3000),

    // $('.animate').animate({height: '150px'}, 2000),
    // $('.animate').animate({opacity: 0.2}, 3000),
    
    // $('.animate').animate({width: '900px'}, 4000),
    // $('.animate').animate({opacity: 0.7}, 3000),

    // $('.animate').animate({width: '350px'}, 3000),
    // $('.animate').animate({opacity: 0}, 4000)

    // stop method = it is used to stop the animate 

    // changing html,
    // .text can change the value inside html tag
    // .html also can change value inside of html elements
    // $('p').html("Hello now im new paragraph") 
    
    // accessing form,
    // using val() to change value inside form 
    // $('#ta').val("Don't Tell Us about What you feel")

    // $('.animate').empty() // To remove the text inside of html element

    // $('div').remove() // To remove the selected html element

    // $('div').addClass('myClass') // To add class to the html elements
    // $('div').removeClass('animate') // To remove class from the html elements
    // $('.animate').css('background-color', 'black') // Adding CSS in html elements
    // $('.animate').css('color', 'white') 
    // $('.animate').css('background-color') // To get the property of css.

    // Ajax using jQuery

    // Ajax Get Function

    // $.get('https://www.chelseafc.com/en/news', function(data, status){
    //     alert(data)
    // })

    // Ajax Post Function

    // $.post('https://www.chelseafc.com/en/news', {
    //     name: 'Samundra', address: 'Kathmandu'
    // }, 
    // function(data, status) {
    //     alert(status)
    // }
    // )


})