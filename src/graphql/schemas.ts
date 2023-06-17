import gql from 'graphql-tag';

const CONTACT_FRAGMENT = gql`
  fragment name on Contact {
    firstName
    lastName
  }
`;

export const ALL_CONTACTS = gql`
  ${CONTACT_FRAGMENT}
  query {
    contacts {
      id
      ...name
      email
    }
  }
`;

export const SEARCH_CONTACTS = gql`
  ${CONTACT_FRAGMENT}

  query ($id: ID) {
    contacts(where: { id: $id }) {
      id
      ...name
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
