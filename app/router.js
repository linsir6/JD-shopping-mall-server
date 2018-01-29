'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { controller: { userController } } = app;
    /**
     * 关注回复相关
     */
    app.get('/login', userController.login);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFZYixrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEVBQ0YsVUFBVSxFQUFFLEVBQ1IsY0FBYyxFQUNqQixFQUNKLEdBQUcsR0FBRyxDQUFDO0lBRVI7O09BRUc7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFHNUMsQ0FBQyxDQUFDIn0=