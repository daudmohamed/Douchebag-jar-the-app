// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    title
    description
    owner
    members
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      owner
      members
    }
    nextToken
  }
}
`;
export const getUserTab = `query GetUserTab($id: ID!) {
  getUserTab(id: $id) {
    id
    amount
    owner
    groupMembers
  }
}
`;
export const listUserTabs = `query ListUserTabs(
  $filter: ModelUserTabFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserTabs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      owner
      groupMembers
    }
    nextToken
  }
}
`;
