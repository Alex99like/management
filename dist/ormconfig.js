"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '.env'),
});
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
exports.default = {
    type: 'postgres',
    cache: false,
    url: 'postgres://alex99like:g1cRAOO4cA0wrTmwLpnU093wchot9hot@dpg-cdm2fv82i3mrtiv6t2ug-a.oregon-postgres.render.com/management_n927',
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: ['src/resources/**/**.entity{.ts,.js}'],
    migrations: ['./migrations/*.ts'],
};
