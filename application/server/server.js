const express = require('express');
const { clientId, clientSecret, redirectUri, discordLoginUri } = require('../../config.json');
const { redirect } = require('express/lib/response');
const fetch = require('node-fetch');
const { url } = require('inspector');
const { URLSearchParams } = require('url');
const app = express();
const port = 3000;
const discordTokenUrl = 'https://discord.com/api/oauth2/token';

const params = new URLSearchParams();

async function getAccessToken(code) {

    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('scope', 'bot');

    fetch(discordTokenUrl, {
        method: 'post',
        body: params,
        header: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
}

app.get('/', (req, res) => {
	res.redirect(discordLoginUri);
});

app.get('/login', (req, res) => {
    let code = req.query.code;
    getAccessToken(code);
    res.send("logged in!!");
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});