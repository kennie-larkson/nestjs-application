import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';

export const sequelizeModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  models: [User],
});
