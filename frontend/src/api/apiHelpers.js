import Cookie from "js-cookie"
//npm install js-cookie

const apiHelpers = { }


//added for authentication
apiHelpers.getCsrfConfig = () => {
  return {
    withCredential: true, //required for sep proj setup
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

apiHelpers.tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data ? response.data : {message: "success"} // does not look like promise but auto converts to a promise due to async function behavior
  }
  catch(e) {
    console.error("--tryCatchFetch ERROR:", e.response ? e.response.data : e)
    return null
  }
}

export default apiHelpers;