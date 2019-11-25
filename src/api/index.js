import request from '../utils/request';

export const fetchData = (query) => {
//	return request({
//		url: '/ms/table/list',
//		method: 'post',
//		data: query
//	})
	return request.fetchPost('/ms/table/list', query).then((data) => {
	console.log(data);
	}).catch(err => {
		console.log(err)
	});
}