module.exports = () => {
    return (req, res, next) => {
        let x = Math.pow(10, 12);
        req.n = Math.floor(new Date().getTime() + Math.random() * x - (x / 2)) / x;
        next();
    }
};
