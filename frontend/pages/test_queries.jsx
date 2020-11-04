import {useEffect, useState, useMemo} from 'react';
import axios from 'axios';

const QueryTest = () => {

	const [user, setUser] = useState([]);
	// const disf = useMemo(()=>{
	//   return componentDidMount();
	// }, [setUser]);
	useEffect(() => {
		getUser()
	}, [setUser]);

	async function getUser() {
		let res = await axios({
			url: 'http://localhost:9100/graphql',
			method: 'post',
			data: {
				query: `
             query CurrentQuery {
             current(id:78){
                 id
                 name
                 lastName
                 email
             }
           }
           `
			}
		})
		let usr = res.data;
		setUser(usr);
	}
	const arr = [];
	if (user.data) {
		if (arr.length == 0) {
			arr.push(user.data.current);

		}
		var {
			id,
			name
		} = arr[0]
	}
	console.log(user)
	return (<>{}</>);
}

export default QueryTest;
