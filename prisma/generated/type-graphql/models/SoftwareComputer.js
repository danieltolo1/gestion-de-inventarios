"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_Architecture_1 = require("../enums/Enum_Architecture");
const Enum_Operatigsystem_1 = require("../enums/Enum_Operatigsystem");
const SoftwareComputerCount_1 = require("../resolvers/outputs/SoftwareComputerCount");
let SoftwareComputer = class SoftwareComputer {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputer.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputer.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCount_1.SoftwareComputerCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCount_1.SoftwareComputerCount)
], SoftwareComputer.prototype, "_count", void 0);
SoftwareComputer = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputer", {
        isAbstract: true
    })
], SoftwareComputer);
exports.SoftwareComputer = SoftwareComputer;
