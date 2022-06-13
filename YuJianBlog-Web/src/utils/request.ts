const request = async (endpoint: string) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`)
    .then(async (response) => {
      const result = await response.json();
      if (response.ok) return result.data;
      else return Promise.reject(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default request;
