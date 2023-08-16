/* eslint-disable */

export interface User {
  Id: string;
  name: string;
  username: string;
  password: string;
  permissions: Permissions[];
}

export interface Permissions {
  type: string;
  Id: string;
  perms: Permission | undefined;
}

export interface Permission {
  light: boolean;
  thermostat: boolean;
  camera: boolean;
}

export const USER_PACKAGE_NAME = 'user';
