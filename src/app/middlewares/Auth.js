const jwt = require('jsonwebtoken');
const authConfig = process.env.SECRET_AUTHCONFIG;

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(403).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).send({ error: 'Token error' });

    const [ schema, token ] = parts;

    if(!/^Bearer$/i.test(schema)) return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, authConfig, (err, decoded) => {
        if(err) return res.status(401).send({ error: `Token invalid, ${err}` });

        req.userId = decoded.id;

        return next();
    });
};