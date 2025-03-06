import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            tasks {
                _id
                title
                description
                status
                userId
                
            }
        }
    }
`;

export const QUERY_TASKS = gql`
    query tasks {
        tasks {
            _id
            title
            description
            status
            userId
        }
    }
`;