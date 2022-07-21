"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateOrConnectWithoutProductInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutProductInput");
const MaintenanceCreateWithoutProductInput_1 = require("../inputs/MaintenanceCreateWithoutProductInput");
const MaintenanceScalarWhereInput_1 = require("../inputs/MaintenanceScalarWhereInput");
const MaintenanceUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/MaintenanceUpdateManyWithWhereWithoutProductInput");
const MaintenanceUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/MaintenanceUpdateWithWhereUniqueWithoutProductInput");
const MaintenanceUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/MaintenanceUpsertWithWhereUniqueWithoutProductInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateManyWithoutProductInput = class MaintenanceUpdateManyWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutProductInput_1.MaintenanceCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpsertWithWhereUniqueWithoutProductInput_1.MaintenanceUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateWithWhereUniqueWithoutProductInput_1.MaintenanceUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateManyWithWhereWithoutProductInput_1.MaintenanceUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutProductInput.prototype, "deleteMany", void 0);
MaintenanceUpdateManyWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateManyWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceUpdateManyWithoutProductInput);
exports.MaintenanceUpdateManyWithoutProductInput = MaintenanceUpdateManyWithoutProductInput;
