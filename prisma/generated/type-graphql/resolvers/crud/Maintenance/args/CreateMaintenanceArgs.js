"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateInput_1 = require("../../../inputs/MaintenanceCreateInput");
let CreateMaintenanceArgs = class CreateMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateInput_1.MaintenanceCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateInput_1.MaintenanceCreateInput)
], CreateMaintenanceArgs.prototype, "data", void 0);
CreateMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateMaintenanceArgs);
exports.CreateMaintenanceArgs = CreateMaintenanceArgs;
