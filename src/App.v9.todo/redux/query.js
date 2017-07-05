export default`
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
    usedBy {
      id,
      name
    }
  }
}
`;
