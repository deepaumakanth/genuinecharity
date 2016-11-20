/**
 * Created by sarin on 11/20/16.
 */
function signupSubmit()
{
    $.ajax({
        type: 'POST',
        url: '/register',
        data: {
            email:$("#email").val(),
            password:$("#password").val(),
            firstname:$("#firstname").val(),
            lastname:$("#lastname").val(),
            address:$("#address").val(),
            phone:$("#phone").val(),
            gender:$("#gender").val(),
            marital_status:$("#marital_status").val(),
            occupation:$("#occupation").val()
        },
        success: function(data){
            console.log("Inside register success");
            alertify.notify('Signup successfull!','success',3,function(){
                window.location.href = '/'
            })
        },
        error: function(xhr, textStatus, error){
            console.log("Error in signup "+xhr.responseJSON.error.message);
            alertify.error('Signup Error: '+xhr.responseJSON.error.message);
        }
    });
}