import gql from 'graphql-tag';

export default gql`
{
	projects {
    id
    name,
    required {
      id,
      name
    },
    inthere {
      id,
      name
    }
  },
  employees {
    id,
    name,
    stack {
      id,
      name
    },
  },
  technologies {
    id,
    name,
  }
}
`;
