import React from 'react';
import { renderToString } from 'react-dom/server';

import Welcome from './Welcome';

export default ({ routeName, requiredScripts, requiredStyles }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>hello-world</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${requiredStyles}
      </head>
      <body>
        <div id="app">${renderToString(<Welcome page={routeName} />)}</div>
        ${requiredScripts}
      </body>
    </html>
  `;
};
