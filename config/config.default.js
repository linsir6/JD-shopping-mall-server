"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = (appInfo) => {
    const config = exports = {};
    config.keys = appInfo.name + 'linsir';
    config.logger = {
        level: 'NONE',
        consoleLevel: 'INFO',
        disableConsoleAfterReady: false,
    };
    config.security = {
        csrf: false,
        xframe: false,
    };
    config.typeorm = {
        type: 'mysql',
        host: '127.0.0.1',
        database: 'JD-shopping-mall-DB',
        username: 'root',
        password: 'root',
        logging: true,
        charset: 'UTF8MB4_UNICODE_CI',
        synchronize: false,
        dropSchema: false,
        entities: [
            path_1.join(appInfo.baseDir, 'app/model/*.js')
        ],
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUEwQjtBQU0xQixrQkFBZSxDQUFDLE9BQXFCLEVBQUUsRUFBRTtJQUNyQyxNQUFNLE1BQU0sR0FBUSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRWpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFFdEMsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNaLEtBQUssRUFBRSxNQUFNO1FBQ2IsWUFBWSxFQUFFLE1BQU07UUFDcEIsd0JBQXdCLEVBQUUsS0FBSztLQUNsQyxDQUFDO0lBRUYsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRTtZQUNOLFdBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO1NBQzFDO0tBRUosQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIn0=