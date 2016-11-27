/**
 * Created by sarin on 11/17/16.
 */

$(document).ready(function(){
    $("#narrative_title").text("Donald Trump elected president");
    var body = "Donald John Trump was elected the 45th president of the United States on Tuesday in a stunning culmination of an explosive, populist and polarizing campaign that took relentless aim at the institutions and long-held ideals of American democracy."
        +"The surprise outcome, defying late polls that showed Hillary Clinton with a modest but persistent edge, threatened convulsions throughout the country and the world, where skeptics had watched with alarm as Mr. Trump’s unvarnished overtures to disillusioned voters took hold."
    $("#narrative_body").text(body);

    if(signedIn == "false")
    {
        alertify.set('notifier','position', 'top-right');
        alertify.error("Please sign in or sign up to navigate to "+attemptedURL);
        $.ajax({
            type: 'POST',
            url: '/setsigninSession',
            success: function(data){
                console.log("Inside set signin success");
            },
            error: function(xhr, textStatus, error){
                console.log('setSignin Error: '+xhr.responseJSON);
            }
        });
    }
})
$('#myCarousel').bind('slid.bs.carousel', function (e) {
    var slide = $(this).find('.item.active')[0]
    if(slide.id=="trump")
    {
        $("#narrative_title").text("Donald Trump elected president");
        var narrative_body = "Donald John Trump was elected the 45th president of the United States on Tuesday in a stunning culmination of an explosive, populist and polarizing campaign that took relentless aim at the institutions and long-held ideals of American democracy."
            +"The surprise outcome, defying late polls that showed Hillary Clinton with a modest but persistent edge, threatened convulsions throughout the country and the world, where skeptics had watched with alarm as Mr. Trump’s unvarnished overtures to disillusioned voters took hold."
        $("#narrative_body").text(narrative_body);
    }
    else if(slide.id=="syria")
    {
        $("#narrative_title").text("Syrian forces recapture Aleppo");
        var narrative_body = "Syrian government forces have recaptured parts of Aleppo city which were lost to rebels last month, placing rebel-held districts in the city's east once again under siege, monitors said."
        $("#narrative_body").text(narrative_body);
    }
    else if(slide.id=="james")
    {
        $("#narrative_title").text("James Clapper resigns");
        var narrative_body = "US Director of National Intelligence James Clapper has submitted his letter of resignation, he has told a congressional panel."
        +"He told the House Intelligence Committee that it 'felt pretty good'."
        +"The 75-year-old top American spy had been expected to step aside, as President-elect Donald Trump prepares to appoint his own officials."
        $("#narrative_body").text(narrative_body);
    }
});

function signinSubmit()
{
    $.ajax({
        type: 'POST',
        url: '/signin',
        data: {
            email:$("#emailsignup").val(),
            password:$("#passwordsignup").val(),
        },
        success: function(data){
            console.log("Inside signin success");
            alertify.set('notifier','position', 'top-right');
            alertify.notify('Signin successfull!','success',3,function(){
                window.location.href = '/'
            });
        },
        error: function(xhr, textStatus, error){
            console.log("Error in signup "+JSON.parse(xhr.responseText).error);
            alertify.set('notifier','position', 'top-right');
            alertify.error('Signin Error: '+JSON.parse(xhr.responseText).error);
        }
    });
}