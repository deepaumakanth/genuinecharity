/**
 * Created by sarin on 11/21/16.
 */

function openApplyModal(ele){
    var scholarship_id = Number($(ele).parent().parent().find("#scholarship_id").text());
    $('#applyModal').remove("#scholarship_id");
    $('#applyModal').find('.modal-body').append('<div class="hidden" id="scholarship_id" data-scholarship-id='+scholarship_id+'></div>');
    $('#applyModal').modal({
        backdrop: 'static',
        keyboard: false
    })
}

function applyScholarship(){

    $.ajax({
        type: 'POST',
        url: '/applyScholarship',
        data: {
            scholarship_id:Number($('#applyModal').find('#scholarship_id').attr('data-scholarship-id')),
            no_of_children:Number($('#applyModal').find('#noofchildren').val()),
            school_termination:$('#applyModal').find("input[name=termination]:checked").val(),
            parent_marital_status:$('#applyModal').find('#parentsms').val(),
            father_name:$('#applyModal').find('#fathername').val(),
            father_age:Number($('#applyModal').find('#fatherage').val()),
            phone:Number($('#applyModal').find('#phone').val()),
            mother_name:$('#applyModal').find('#mothername').val(),
            mother_age:$('#applyModal').find('#motherage').val(),
            hollowyear:$('#applyModal').find('#hollowyear').val(),
            activities:$('#applyModal').find('#activities').val()

        },
        success: function(data){
            console.log("Apply scholarship successful");
            alertify.set('notifier','position', 'top-right');
            alertify.notify('Applied to scholarship!','success',3,function(){
                window.location.href = '/applyscholarship'
            })
        },
        error: function(xhr, textStatus, error){
            console.log("Error in signup ");
            alertify.set('notifier','position', 'top-right');
            alertify.error('Oops.. an error occured.. ensure all form fields are filled out');
        }
    });
}