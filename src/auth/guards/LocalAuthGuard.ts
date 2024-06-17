import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Call the canActivate method of AuthGuard('local')
    const result = (await super.canActivate(context)) as boolean;
    // Get the request object
    const request = context.switchToHttp().getRequest();
    // Log in the user
    await super.logIn(request);
    return result;
  }
}
