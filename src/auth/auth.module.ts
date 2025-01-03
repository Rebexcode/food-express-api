import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'my-secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
