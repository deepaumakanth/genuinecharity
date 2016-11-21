/**
 * Created by sarin on 11/21/16.
 */

function applyScholarship(ele){
    var scholarship_id = Number($(ele).parent().parent().find("#scholarship_id").text());
    $.ajax({
        type: 'POST',
        url: '/applyScholarship',
        data: {
            scholarship_id:scholarship_id
        },
        success: function(data){
            console.log("Apply scholarship successful");
            alertify.notify('Applied to scholarship!','success',3,function(){
                window.location.href = '/applyscholarship'
            })
        },
        error: function(xhr, textStatus, error){
            console.log("Error in signup ");
            alertify.error('Oops.. an error occured.. please try again later');
        }
    });

}