export const findAll = () => `
{
  projects {
    id,
    name,
    inthere {
      id,
      name,
    },
    required {
      id,
      name,
      logo
    }
  }
}
`;

export const findOneProject = id => `
{
  project(id: "${id}") {
    id,
    name,
    inthere {
      id,
      name,
    },
    required {
      id,
      name,
      logo
    }
  }
}
`;
