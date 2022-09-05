export const handleApiError = (error:any) => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line
    console.warn("[Axios Error....]", error, error.response);
  }

  // if (!error.response) return error.message || "Something went wrong";
  // console.log(error.response.data)

  const { response } = error;
  const { data } = response;

  switch (response.status) {
    case 400:
      return (
        (data.error && JSON.stringify(data.error)) ||
        data.message ||
        "Something went wrong"
      );
    case 401:
      return "Unauthorized User!";
    case 404:
      return data.message || "Resource not found";
    case 409:
      return "A duplicate already exists";
    default:
      return "Something went wrong";
  }

  if (error.message) return error.message;
};
