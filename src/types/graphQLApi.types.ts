/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  title: string,
  description: string,
  owner?: string | null,
  members?: Array< string | null > | null,
};

export type UpdateGroupInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  owner?: string | null,
  members?: Array< string | null > | null,
};

export type DeleteGroupInput = {
  id?: string | null,
};

export type CreateUserTabInput = {
  id?: string | null,
  amount: number,
  owner?: string | null,
  groupMembers?: Array< string | null > | null,
};

export type UpdateUserTabInput = {
  id: string,
  amount?: number | null,
  owner?: string | null,
  groupMembers?: Array< string | null > | null,
};

export type DeleteUserTabInput = {
  id?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  members?: ModelStringFilterInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUserTabFilterInput = {
  id?: ModelIDFilterInput | null,
  amount?: ModelIntFilterInput | null,
  owner?: ModelStringFilterInput | null,
  groupMembers?: ModelStringFilterInput | null,
  and?: Array< ModelUserTabFilterInput | null > | null,
  or?: Array< ModelUserTabFilterInput | null > | null,
  not?: ModelUserTabFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
};

export type CreateGroupMutation = {
  createGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
};

export type UpdateGroupMutation = {
  updateGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
};

export type DeleteGroupMutation = {
  deleteGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type CreateUserTabMutationVariables = {
  input: CreateUserTabInput,
};

export type CreateUserTabMutation = {
  createUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type UpdateUserTabMutationVariables = {
  input: UpdateUserTabInput,
};

export type UpdateUserTabMutation = {
  updateUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type DeleteUserTabMutationVariables = {
  input: DeleteUserTabInput,
};

export type DeleteUserTabMutation = {
  deleteUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      title: string,
      description: string,
      owner: string | null,
      members: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserTabQueryVariables = {
  id: string,
};

export type GetUserTabQuery = {
  getUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type ListUserTabsQueryVariables = {
  filter?: ModelUserTabFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTabsQuery = {
  listUserTabs:  {
    __typename: "ModelUserTabConnection",
    items:  Array< {
      __typename: "UserTab",
      id: string,
      amount: number,
      owner: string | null,
      groupMembers: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  owner: string,
};

export type OnCreateGroupSubscription = {
  onCreateGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  owner: string,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  owner: string,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup:  {
    __typename: "Group",
    id: string,
    title: string,
    description: string,
    owner: string | null,
    members: Array< string | null > | null,
  } | null,
};

export type OnCreateUserTabSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserTabSubscription = {
  onCreateUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type OnUpdateUserTabSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserTabSubscription = {
  onUpdateUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};

export type OnDeleteUserTabSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserTabSubscription = {
  onDeleteUserTab:  {
    __typename: "UserTab",
    id: string,
    amount: number,
    owner: string | null,
    groupMembers: Array< string | null > | null,
  } | null,
};
