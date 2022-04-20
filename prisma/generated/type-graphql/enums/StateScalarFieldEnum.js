"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var StateScalarFieldEnum;
(function (StateScalarFieldEnum) {
    StateScalarFieldEnum["id_state"] = "id_state";
    StateScalarFieldEnum["description"] = "description";
})(StateScalarFieldEnum = exports.StateScalarFieldEnum || (exports.StateScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StateScalarFieldEnum, {
    name: "StateScalarFieldEnum",
    description: undefined,
});
