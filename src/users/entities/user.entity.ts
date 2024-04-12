import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
// Entity that represents a user in the database, create table users
@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'text', unique: true })
  email!: string;

  @Property({ type: 'text' })
  fullName!: string;

  @Property({ type: 'text' })
  password!: string;
}
