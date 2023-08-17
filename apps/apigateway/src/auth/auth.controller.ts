import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('auth')
@UseInterceptors(GrpcToHttpInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseInterceptors(GrpcToHttpInterceptor)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @UseInterceptors(GrpcToHttpInterceptor)
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
