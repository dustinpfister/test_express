let express = require('express'),
renderApp = express();

module.exports = function (req, res) {

    let app = res.app;

    // copy over settings from main app
    // including views path, and engine
    Object.keys(app.locals.settings).forEach(function (key) {
        renderApp.set(key, app.get(key));
    });

    // preserve id
    renderApp.set('id', 'render');

    res.render('index', {

        settings: {

            app: app.locals.settings,
            renderApp: renderApp.locals.settings

        }

    });
};
