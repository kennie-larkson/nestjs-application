import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  gender: string;

  //   @Column({ defaultValue: true })
  //   isActive: Boolean;
}
