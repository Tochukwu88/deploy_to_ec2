
 export const internalResponse=(status = true, data, statusCode = 200, message = "success") => {
  return {
      status,
      statusCode,
      message,
      data
  }
}
export const successRes = (res, data, message = 'success', status = 200) => {
  return res.status(status).json({
      status: true,
      data,
      message,
      error: false
  })
}


export const errorResponse = (res, message = 'unsuccessful', status = 400) => {
  return res.status(status).json({
      status: false,
      message,
      error: true
  })
}

