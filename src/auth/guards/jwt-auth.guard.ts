import { Injectable, ExecutionContext, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    this.logger.log(`Authorization Header: ${request.headers.authorization}`);
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context) {
    console.log(JSON.stringify(info));
    
    if (err || !user) {
      this.logger.error(`JWT validation failed: ${info?.message}`);
      throw err || new UnauthorizedException();
    }
    this.logger.log(`JWT validated for user: ${JSON.stringify(user)}`);
    return user;
  }
}
