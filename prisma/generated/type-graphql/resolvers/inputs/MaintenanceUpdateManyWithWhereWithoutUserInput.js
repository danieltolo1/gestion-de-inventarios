"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceScalarWhereInput_1 = require("../inputs/MaintenanceScalarWhereInput");
const MaintenanceUpdateManyMutationInput_1 = require("../inputs/MaintenanceUpdateManyMutationInput");
let MaintenanceUpdateManyWithWhereWithoutUserInput = class MaintenanceUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput)
], MaintenanceUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateManyMutationInput_1.MaintenanceUpdateManyMutationInput)
], MaintenanceUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
MaintenanceUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceUpdateManyWithWhereWithoutUserInput);
exports.MaintenanceUpdateManyWithWhereWithoutUserInput = MaintenanceUpdateManyWithWhereWithoutUserInput;
