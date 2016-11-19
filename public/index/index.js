/**
 * Created by sarin on 11/17/16.
 */

$(document).ready(function(){
    $("#narrative_title").text("Donald Trump elected president");
    var body = "Donald John Trump was elected the 45th president of the United States on Tuesday in a stunning culmination of an explosive, populist and polarizing campaign that took relentless aim at the institutions and long-held ideals of American democracy."
        +"The surprise outcome, defying late polls that showed Hillary Clinton with a modest but persistent edge, threatened convulsions throughout the country and the world, where skeptics had watched with alarm as Mr. Trump’s unvarnished overtures to disillusioned voters took hold."
    $("#narrative_body").text(body);
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