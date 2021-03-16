/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
  ) {
    createUserModel(input: $input) {
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
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
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
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
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
export const createProcessModel = /* GraphQL */ `
  mutation CreateProcessModel(
    $input: CreateProcessModelInput!
    $condition: ModelProcessModelConditionInput
  ) {
    createProcessModel(input: $input, condition: $condition) {
      id
      case_number
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateProcessModel = /* GraphQL */ `
  mutation UpdateProcessModel(
    $input: UpdateProcessModelInput!
    $condition: ModelProcessModelConditionInput
  ) {
    updateProcessModel(input: $input, condition: $condition) {
      id
      case_number
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteProcessModel = /* GraphQL */ `
  mutation DeleteProcessModel(
    $input: DeleteProcessModelInput!
    $condition: ModelProcessModelConditionInput
  ) {
    deleteProcessModel(input: $input, condition: $condition) {
      id
      case_number
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
