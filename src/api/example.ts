import axios from './https';

// GET and POST examples

export const GetExample = async () => {
	const url = 'https://jsonplaceholder.typicode.com/todos';
	const data = await axios.get(url);
	return data;
};

type PostParamsType = {
	title: string;
	body: string;
	userId: number;
};

let params: PostParamsType = {
	title: 'foo',
	body: 'bar',
	userId: 1,
};

export const PostExample = async () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const data = await axios.post(url, params);
	return data;
};
