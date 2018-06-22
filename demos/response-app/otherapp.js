module.exports = function (req,res) {
    res.json({
        appID : res.app.get('id')
    });
};
