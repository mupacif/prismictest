// Import stylesheets
import './style.css';
import * as prismic from '@prismicio/client';

const endpoint = prismic.getEndpoint('presentation');

const accessToken = 'your-access-token';
const routes = [
  { type: 'page', path: '/:uid' },
  { type: 'home', path: '/' },
];

const client = prismic.createClient(endpoint, { routes, accessToken });

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
