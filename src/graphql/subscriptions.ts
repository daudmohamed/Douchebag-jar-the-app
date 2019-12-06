// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup($owner: String!) {
  onCreateGroup(owner: $owner) {
    id
    title
    description
    owner
    members
  }
}
`;
export const onUpdateGroup = `subscription OnUpdateGroup($owner: String!) {
  onUpdateGroup(owner: $owner) {
    id
    title
    description
    owner
    members
  }
}
`;
export const onDeleteGroup = `subscription OnDeleteGroup($owner: String!) {
  onDeleteGroup(owner: $owner) {
    id
    title
    description
    owner
    members
  }
}
`;
export const onCreateUserTab = `subscription OnCreateUserTab($owner: String!) {
  onCreateUserTab(owner: $owner) {
    id
    amount
    owner
    groupMembers
  }
}
`;
export const onUpdateUserTab = `subscription OnUpdateUserTab($owner: String!) {
  onUpdateUserTab(owner: $owner) {
    id
    amount
    owner
    groupMembers
  }
}
`;
export const onDeleteUserTab = `subscription OnDeleteUserTab($owner: String!) {
  onDeleteUserTab(owner: $owner) {
    id
    amount
    owner
    groupMembers
  }
}
`;
