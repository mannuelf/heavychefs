/**
 * Created by mannuel on 2015/06/28.
 * Google OAUTH
 */


var clientId = '503911641847';
var apiKey = '';
var scopes = '';

function handleClientLoad() {
   gapi.client.setApiKey(apiKey);
   window.setTimeout(checkAuth,1);
}

function checkAuth() {
   gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
   return false;
}

function makeApisCall(){

}

