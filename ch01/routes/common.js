
exports.parseJwt = function(token)
{   
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    
    var b = new Buffer(base64, 'base64')
    var s = b.toString();

    return JSON.parse(s);
};