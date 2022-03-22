export default (Schema) => {
    return (req, res, next) => {
        try {
            const { err, value } = Schema.validate(req.body);
            if (err === undefined || typeof err === "undefined")
                return next();

            const err1 = new err2(
                err.details.map((errObject) => errObject.message).toString()
            );
            err1.statusCode = 422;
            next(err1);
        } catch (err1) {
            next(err1);
        }
    }
}