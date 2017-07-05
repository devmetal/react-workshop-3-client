export const findAll = () => `
{
  technologies {
    id,
    name,
    logo,
    usedIn {
      id,
      name,
    },
    usedBy {
      id,
      name,
    }
  }
}
`;

export const findOneTechnology = (id) => `
{
  technology(id: "${id}") {
    id,
    name,
    logo,
    usedIn {
      id,
      name,
    },
    usedBy {
      id,
      name,
    }
  }
}
`;
