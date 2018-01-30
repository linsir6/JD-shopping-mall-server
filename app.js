"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = async (app) => {
    app.beforeStart(async () => {
        const connection = await typeorm_1.createConnection(app.config.typeorm);
        // app.typeorm
        Object.defineProperty(app, 'model', {
            value: connection,
            writable: false,
            configurable: false,
        });
        app.coreLogger.info('egg-typeorm: connection created.');
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXFEO0FBT3JELGtCQUFlLEtBQUssRUFBRSxHQUFnQixFQUFFLEVBQUU7SUFFdEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2QixNQUFNLFVBQVUsR0FBZSxNQUFNLDBCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUUsY0FBYztRQUNkLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUNoQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsS0FBSztZQUNmLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFFM0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==