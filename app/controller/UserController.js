"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class UserController extends egg_1.Controller {
    async login(ctx) {
        const user = ctx.request.body;
        ctx.body = ctx.service.userService.login(user);
        ctx.status = 200;
    }
    async register(ctx) {
        const user = ctx.request.body;
        ctx.body = ctx.service.userService.register(user);
        ctx.status = 200;
    }
}
exports.default = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUF3QztBQUl4QyxvQkFBb0MsU0FBUSxnQkFBVTtJQUdsRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQVk7UUFDcEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFZLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQVksQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0NBR0o7QUFoQkQsaUNBZ0JDIn0=