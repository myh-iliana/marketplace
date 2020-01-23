import { types as t } from 'mobx-state-tree';

export const UserModel = t.model('UserModel', {
  id: t.identifierNumber,
  fullName: t.string,
  location: t.maybeNull(t.string),
  avatar: t.maybeNull(t.string),
  phone: t.maybeNull(t.string),
  createdAt: t.string,
  updatedAt: t.string,
  email: t.maybe(t.string),
});
