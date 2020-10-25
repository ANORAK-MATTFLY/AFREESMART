import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';   

let apolloClient;




function createIsomorphLink() {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('@apollo/client/link/schema')
        const { schema } = require('../sechema/schema')
        return new SchemaLink({ schema })
    } else {
        const { HttpLink } = require('@apollo/client/link/http')
        return new HttpLink({
            uri: 'http://localhost:9000/graphql',
            credentials: 'same-origin',
        })
    }
}
// function creatIsomorphicLink() {
//     if (window === 'undefined') {
//         // server side
//     } else {
//         // Client side
//         const { HttpLink } = require('@apollo/client/link/http');
//         return new HttpLink({ uri: 'http://localhost:9000/graphql' });
//     }
// }

export function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        // link: creatIsomorphicLink(),
        link: createIsomorphLink(),
        cache: new InMemoryCache()
    });
};

export function initializedApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    if (typeof window === 'undefined') {
        return _apolloClient;
    }
    apolloClient = apolloClient ?? _apolloClient;
    return apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initializedApollo(initialState), [initialState])
    return store;
};