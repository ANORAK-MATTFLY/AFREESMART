import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
// import {useQuery} from 'react-query';


let apolloClient;

function createIsomorphLink() {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('@apollo/client/link/schema')
        const { schema } = require('../schema/schema')
        return new SchemaLink({ schema })
    } else {
        const { HttpLink } = require('@apollo/client/link/http')
        return new HttpLink({
            uri: 'https://afre-api.herokuapp.com/graphql',
            // credentials: 'same-origin',
        })
    }
}
function creatIsomorphicLink() {
    if (window === 'undefined') {
        // server side
    } else {
        // Client side
        const { HttpLink } = require('@apollo/client/link/http');
        return new HttpLink({ uri: 'http://localhost:9000/graphql' });
    }
}

export function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        //link: creatIsomorphicLink(),
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


// import { useMemo } from 'react'
// import { ApolloClient, InMemoryCache } from '@apollo/client'


// let apolloClient

// function createIsomorphLink() {
//     if (typeof window === 'undefined') {
//         const { SchemaLink } = require('@apollo/client/link/schema')
//         const { schema } = require('../schema/schema')
//         return new SchemaLink({ schema })
//     } else {
//         const { HttpLink } = require('@apollo/client/link/http')
//         return new HttpLink({
//             uri: 'https://afre-api.herokuapp.com/graphql',
//             credentials: 'same-origin',
//         })
//     }
// }

// function createApolloClient() {
//     return new ApolloClient({
//         ssrMode: typeof window === 'undefined',
//         link: createIsomorphLink(),
//         cache: new InMemoryCache(),
//     })
// }

// export function initializeApollo(initialState = null) {
//     const _apolloClient = apolloClient ?? createApolloClient()

//     // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//     // gets hydrated here
//     if (initialState) {
//         _apolloClient.cache.restore(initialState)
//     }
//     // For SSG and SSR always create a new Apollo Client
//     if (typeof window === 'undefined') return _apolloClient
//     // Create the Apollo Client once in the client
//     if (!apolloClient) apolloClient = _apolloClient

//     return _apolloClient
// }

// export function useApollo(initialState) {
//     const store = useMemo(() => initializeApollo(initialState), [initialState])
//     return store
// }
