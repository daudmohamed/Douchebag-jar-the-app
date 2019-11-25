// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    id
    title
    description
    owner
    members
  }
}
`;
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    id
    title
    description
    owner
    members
  }
}
`;
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
    id
    title
    description
    owner
    members
  }
}
`;
export const createUserTab = `mutation CreateUserTab($input: CreateUserTabInput!) {
  createUserTab(input: $input) {
    id
    amount
    owner
    groupMembers
  }
}
`;
export const updateUserTab = `mutation UpdateUserTab($input: UpdateUserTabInput!) {
  updateUserTab(input: $input) {
    id
    amount
    owner
    groupMembers
  }
}
`;
export const deleteUserTab = `mutation DeleteUserTab($input: DeleteUserTabInput!) {
  deleteUserTab(input: $input) {
    id
    amount
    owner
    groupMembers
  }
}
`;
