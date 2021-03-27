window.addEventListener( "load", function () {
    
    $("#new-email-submit-message").hide();
    $("#new-email-submit-error").hide();
    document.getElementById('emailform').addEventListener( "submit", function ( event ) {
        event.preventDefault();        
        console.log('email form submit');
        $.ajax({
            url: 'https://simple-documents.herokuapp.com/pilot/api/register',
            crossDomain: true,
            type: "GET", /* or type:"GET" or type:"PUT" */
            data: $('#emailform').serialize(),
            success: function (result) {
                $("#new-email-submit-message").show();
                console.log(result);
            },
            error: function () {
                $("#new-email-submit-error").show();
                console.log("error");
            }
        });
    });

    $("#new-contact-message-submit-message").hide();
    $("#new-contact-message-submit-error").hide();
    document.getElementById('contactform').addEventListener( "submit", function ( event ) {
        event.preventDefault();        
        console.log('contact form submit');
        $.ajax({
            url: 'https://simple-documents.herokuapp.com/pilot/api/contact',
            crossDomain: true,
            type: "GET", /* or type:"GET" or type:"PUT" */
            data: $('#contactform').serialize(),
            success: function (result) {
                $("#new-contact-message-submit-message").show();
                console.log(result);
            },
            error: function () {
                $("#new-contact-message-submit-error").show();
                console.log("error");
            }
        });
    });
});