import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    return loginDto;
  }

  register(registerDto: RegisterDto) {
    return registerDto;
  }
}
