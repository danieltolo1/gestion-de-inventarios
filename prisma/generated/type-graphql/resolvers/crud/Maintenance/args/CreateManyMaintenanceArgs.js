"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyInput_1 = require("../../../inputs/MaintenanceCreateManyInput");
let CreateManyMaintenanceArgs = class CreateManyMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateManyInput_1.MaintenanceCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyMaintenanceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyMaintenanceArgs.prototype, "skipDuplicates", void 0);
CreateManyMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyMaintenanceArgs);
exports.CreateManyMaintenanceArgs = CreateManyMaintenanceArgs;
