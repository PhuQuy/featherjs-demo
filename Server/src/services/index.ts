import { Application } from '../declarations';
import job from './job/job.service';
import user from './user/user.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(job);
  app.configure(user);
}
