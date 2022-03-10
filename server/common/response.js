const responseSuccess = (res, resultCode, message, data = null) => {
    return res.status(200).json({
        success: true,
        status: resultCode,
        message: message,
        data: data
    });
}