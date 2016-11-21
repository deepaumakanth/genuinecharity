/**
 * Created by sarin on 11/20/16.
 */
exports.checksignedin = function(req, res,next) {
    if(!req.user){
        req.session.signedIn = "false"
        req.session.attemptedURL = req.url.replace("/","")
        res.redirect("/");
        //res.redirect('/?signedIn=false&url='+req.url.replace("/",""))
    }
    else{
        next()
    }
};