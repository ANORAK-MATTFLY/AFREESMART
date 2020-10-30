import { useQuery, useMutation, gql } from "@apollo/client";
const MyQuery = gql`
query{
current{
    id
	name
	lastName
}
}
`;


axios({
    url: 'http://localhost:3000/api/graphql',
    method: 'post',
    data: {
        query: `
      query CurrentQuery {
        current{
            id
            name
            lastName
        }
      }
      `
    }
}).then((result) => {
    console.log(result.data)
});

const QueryTest = () => {
    const { data, loading } = useQuery(MyQuery);
    console.log(data);
    return (
        <pre>
            {JSON.stringify(data)}
        </pre>
    );
}

export default QueryTest;
