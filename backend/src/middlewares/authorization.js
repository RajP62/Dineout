module.exports = (permissions)=>{
    return (req, res, next)=>{
        if(permissions.includes(req?.user?.role)){
            next();
        }
        else{
            return res.status(401).send({error: true, message: "unauthorized request"});
        }
    }
}