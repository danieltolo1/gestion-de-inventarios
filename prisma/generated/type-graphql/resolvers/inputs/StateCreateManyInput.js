"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateCreateManyInput = class StateCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCreateManyInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateCreateManyInput.prototype, "description", void 0);
StateCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateManyInput", {
        isAbstract: true
    })
], StateCreateManyInput);
exports.StateCreateManyInput = StateCreateManyInput;
