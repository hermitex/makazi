function useCloudinary() {
  const apiUrl = process.env.REACT_APP_CLOUD_BASE_URL;
  async function uploadImage(data) {
    let payload = {
      method: "POST",
      body: data,
    };
    try {
      let response = await fetch(apiUrl, payload);
      let data = await response.json();
      return data.url;
    } catch (err) {
      console.log(err);
    }
  }

  return [uploadImage];
}

export default useCloudinary;
