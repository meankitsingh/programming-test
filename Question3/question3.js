function isEmpty (str) {
  if (typeof str === 'undefined' || str.length <= 0) return false

  return str
}

function generateUrl(domain, queryStringObj){      
  if (!domain) {
    throw Error('domain is required');
  }  
  
  let str = `${domain}/?`;

  for (let key in queryStringObj) {
    let value = isEmpty(queryStringObj[key])
    if (key && value) {
      str += `${key}=${value}&`
    }
  }

  return str.endsWith('&') ? str.substring(0, str.length - 1) : str
}

let domain = 'http://test.com';

let queryStringObj = {
  height: 300,
  interval: '3h',
  locale: 'en',
  pair: 'BTC_USD',
  toolbar_bg: '',
  width: 360
};

let URL=generateUrl(domain,queryStringObj);

console.log(URL)