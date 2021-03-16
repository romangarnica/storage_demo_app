/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      name
      lastname
      address
      cellphone
      role
      image
      createdAt
      updatedAt
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastname
        address
        cellphone
        role
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProcessModel = /* GraphQL */ `
  query GetProcessModel($id: ID!) {
    getProcessModel(id: $id) {
      id
      case_number
      description
      createdAt
      updatedAt
    }
  }
`;
export const listProcessModels = /* GraphQL */ `
  query ListProcessModels(
    $filter: ModelProcessModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProcessModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        case_number
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
