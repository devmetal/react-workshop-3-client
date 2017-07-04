export const findAll = () => `
{
  employees {
    id,
    name,
    stack {
      id,
      name,
      logo
    },
    projects {
      id,
      name
    }
  }
}
`;

export const findOneEmployee = id => `
{
  employee(id: "${id}") {
    id,
    name,
    stack {
      id,
      name,
      logo
    },
    projects {
      id,
      name
    }
  }
}
`;
