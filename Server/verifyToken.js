// module.exports = function(req, res, next) {

//     const bearerHeader = req.headers['authorization'];
//     if (bearerHeader) {
//         req.token = bearerHeader.split(' ')[1];
//         next();
//     } else {
//         res.send('your are not login');
     
//     }

// }
 

module.exports = function(req, res, next) {
   
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send('your are not login')
    }

}





