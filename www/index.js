async function onDOMContentLoaded() {
  console.log('DOMContentLoaded');

  setTimeout(getAppConfig, 5000);
}

async function getAppConfig() {
  const response = await fetch('preo-api-token', {
    method: 'GET',
    headers: {
      'Authorization': 'preo-api-url',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Origin': 'http://localhost/',
      // 'Access-Control-Allow-Origin': 'https://api-dev.preoday.com',
      // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      // 'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  });

  console.log('response = ', response);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
