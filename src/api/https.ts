import axios from "axios";

// Here you can config the interceptors

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		throw error;
	},
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
