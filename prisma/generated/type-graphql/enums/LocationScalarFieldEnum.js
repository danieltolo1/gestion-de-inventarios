"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LocationScalarFieldEnum;
(function (LocationScalarFieldEnum) {
    LocationScalarFieldEnum["id_location"] = "id_location";
    LocationScalarFieldEnum["city"] = "city";
    LocationScalarFieldEnum["job_name"] = "job_name";
})(LocationScalarFieldEnum = exports.LocationScalarFieldEnum || (exports.LocationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
    name: "LocationScalarFieldEnum",
    description: undefined,
});
