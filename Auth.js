const localStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('./Model/User')

passport.use(new localStrategy(async (username,password,done)=>{
    try{
    const finding =await User.findOne({username: username})
    if(!finding){
        return done(null,false,{message: 'Incorrect Username'})
    }
    const isPasswordOk = finding.password === password? true : false

    if(isPasswordOk) done(null,finding)
    else done(null,false,{message: `Incorrect Message`})    
}
catch(e){
   return done(e);
}

}))

module.exports = passport