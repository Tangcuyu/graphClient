import gql from 'graphql-tag';

export const ALL_CONTACTS = gql`
  query allContacts {
    contacts {
      id
      firstName
      lastName
      email
    }
  }
`;

export const SEARCH_CONTACTS = gql`
  query byId($id: ID) {
    contacts(where: { id: $id }) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const DEL_CONTACT = gql`
  mutation deleteContact($id: ID) {
    deleteContacts(where: { id: $id }) {
      bookmark
      nodesDeleted
      relationshipsDeleted
    }
  }
`;
