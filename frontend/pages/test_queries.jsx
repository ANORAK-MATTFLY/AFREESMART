import { useQuery, useMutation, gql } from "@apollo/client";
const MyMutation = gql`
mutation{
    register(name:"ben", last_name:"Matt", email:"benmatt@gmail.com", password:"12345" )
}
`;

const QueryTest = () => {
    const { data, error, loading } = useMutation(MyMutation);
    console.log(data);
    if (loading) return <p> {loading} </p>
    if (error) return <p>{error}</p>
    return (
        <pre>
            {JSON.stringify(data)}
        </pre>
    );
}

export default QueryTest;