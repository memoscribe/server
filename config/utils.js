module.exports = {
  createResponseJson: (status, msg, details, error) => {
    details = Object.assign({}, details);
    
    if (error) {
      details.err = error;
    }
    return {
      status,
      msg,
      details
    }
  }
}
