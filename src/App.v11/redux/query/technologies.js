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

export const queryAssignTechToEmp = (techId, empId) => `
mutation {
  assignTechnology(employeeId: "${empId}", technologyId: "${techId}") {
    id
  }
}
`;

export const queryUnassignTechFromEmp = (techId, empId) => `
mutation {
  unassignTechnology(employeeId: "${empId}", technologyId: "${techId}") {
    id
  }
}
`;
