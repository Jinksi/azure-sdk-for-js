let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/certificates/recoverCertificateName-cangetadeletedcertificateNonExisting-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '7fc33e14-f71f-4138-a619-3579f359239a',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:37:27 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '6a3a599d-3a45-4057-94eb-7b0dad488f00',
  'x-ms-ests-server',
  '2.1.9338.12 - SCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AgRQV_V3kY9GhWqw9SDl30A_aSJHAQAAAAevCNUOAAAA; expires=Wed, 09-Oct-2019 20:37:27 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Mon, 09 Sep 2019 20:37:27 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/certificates/recoverCertificateName-cangetadeletedcertificateNonExisting-')
  .query(true)
  .reply(404, {"error":{"code":"CertificateNotFound","message":"Certificate not found: recoverCertificateName-cangetadeletedcertificateNonExisting-"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '152',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '2813d8ce-b4c9-4be1-905e-87997cc4ea21',
  'x-ms-keyvault-service-version',
  '1.1.0.878',
  'x-ms-keyvault-network-info',
  'addr=40.85.182.188;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 09 Sep 2019 20:37:27 GMT',
  'Connection',
  'close' ]);
