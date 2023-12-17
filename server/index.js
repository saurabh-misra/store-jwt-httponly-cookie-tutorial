const express = require( 'express' );
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};
app.use( cors(corsOptions) );
app.use(cookieParser());

app.get( "/", ( req, res ) => {
    // Our `token` cookie should be parsed into `req.cookies.token`
    console.log( "🍪", req.cookies );
    
    // Configure the `token` HTTPOnly cookie
    let options = {
        maxAge: 1000 * 60 * 15, // expire after 15 minutes
        httpOnly: true, // Cookie will not be exposed to client side code
        sameSite: "none", // If client and server origins are different
        secure: true // use with HTTPS only
    }

    const token = "abcd.123456.xyz"; // dummy JWT token
    res.cookie( "token", token, options );
    res.send( "🍪 has been set!" );
});

app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );