"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Producto: crudResolvers.ProductoCrudResolver,
    Inventario: crudResolvers.InventarioCrudResolver,
    MovimientoInventario: crudResolvers.MovimientoInventarioCrudResolver,
    Usuario: crudResolvers.UsuarioCrudResolver
};
const actionResolversMap = {
    Producto: {
        producto: actionResolvers.FindUniqueProductoResolver,
        findFirstProducto: actionResolvers.FindFirstProductoResolver,
        productos: actionResolvers.FindManyProductoResolver,
        createProducto: actionResolvers.CreateProductoResolver,
        createManyProducto: actionResolvers.CreateManyProductoResolver,
        deleteProducto: actionResolvers.DeleteProductoResolver,
        updateProducto: actionResolvers.UpdateProductoResolver,
        deleteManyProducto: actionResolvers.DeleteManyProductoResolver,
        updateManyProducto: actionResolvers.UpdateManyProductoResolver,
        upsertProducto: actionResolvers.UpsertProductoResolver,
        aggregateProducto: actionResolvers.AggregateProductoResolver,
        groupByProducto: actionResolvers.GroupByProductoResolver
    },
    Inventario: {
        inventario: actionResolvers.FindUniqueInventarioResolver,
        findFirstInventario: actionResolvers.FindFirstInventarioResolver,
        inventarios: actionResolvers.FindManyInventarioResolver,
        createInventario: actionResolvers.CreateInventarioResolver,
        createManyInventario: actionResolvers.CreateManyInventarioResolver,
        deleteInventario: actionResolvers.DeleteInventarioResolver,
        updateInventario: actionResolvers.UpdateInventarioResolver,
        deleteManyInventario: actionResolvers.DeleteManyInventarioResolver,
        updateManyInventario: actionResolvers.UpdateManyInventarioResolver,
        upsertInventario: actionResolvers.UpsertInventarioResolver,
        aggregateInventario: actionResolvers.AggregateInventarioResolver,
        groupByInventario: actionResolvers.GroupByInventarioResolver
    },
    MovimientoInventario: {
        movimientoInventario: actionResolvers.FindUniqueMovimientoInventarioResolver,
        findFirstMovimientoInventario: actionResolvers.FindFirstMovimientoInventarioResolver,
        movimientoInventarios: actionResolvers.FindManyMovimientoInventarioResolver,
        createMovimientoInventario: actionResolvers.CreateMovimientoInventarioResolver,
        createManyMovimientoInventario: actionResolvers.CreateManyMovimientoInventarioResolver,
        deleteMovimientoInventario: actionResolvers.DeleteMovimientoInventarioResolver,
        updateMovimientoInventario: actionResolvers.UpdateMovimientoInventarioResolver,
        deleteManyMovimientoInventario: actionResolvers.DeleteManyMovimientoInventarioResolver,
        updateManyMovimientoInventario: actionResolvers.UpdateManyMovimientoInventarioResolver,
        upsertMovimientoInventario: actionResolvers.UpsertMovimientoInventarioResolver,
        aggregateMovimientoInventario: actionResolvers.AggregateMovimientoInventarioResolver,
        groupByMovimientoInventario: actionResolvers.GroupByMovimientoInventarioResolver
    },
    Usuario: {
        usuario: actionResolvers.FindUniqueUsuarioResolver,
        findFirstUsuario: actionResolvers.FindFirstUsuarioResolver,
        usuarios: actionResolvers.FindManyUsuarioResolver,
        createUsuario: actionResolvers.CreateUsuarioResolver,
        createManyUsuario: actionResolvers.CreateManyUsuarioResolver,
        deleteUsuario: actionResolvers.DeleteUsuarioResolver,
        updateUsuario: actionResolvers.UpdateUsuarioResolver,
        deleteManyUsuario: actionResolvers.DeleteManyUsuarioResolver,
        updateManyUsuario: actionResolvers.UpdateManyUsuarioResolver,
        upsertUsuario: actionResolvers.UpsertUsuarioResolver,
        aggregateUsuario: actionResolvers.AggregateUsuarioResolver,
        groupByUsuario: actionResolvers.GroupByUsuarioResolver
    }
};
const crudResolversInfo = {
    Producto: ["producto", "findFirstProducto", "productos", "createProducto", "createManyProducto", "deleteProducto", "updateProducto", "deleteManyProducto", "updateManyProducto", "upsertProducto", "aggregateProducto", "groupByProducto"],
    Inventario: ["inventario", "findFirstInventario", "inventarios", "createInventario", "createManyInventario", "deleteInventario", "updateInventario", "deleteManyInventario", "updateManyInventario", "upsertInventario", "aggregateInventario", "groupByInventario"],
    MovimientoInventario: ["movimientoInventario", "findFirstMovimientoInventario", "movimientoInventarios", "createMovimientoInventario", "createManyMovimientoInventario", "deleteMovimientoInventario", "updateMovimientoInventario", "deleteManyMovimientoInventario", "updateManyMovimientoInventario", "upsertMovimientoInventario", "aggregateMovimientoInventario", "groupByMovimientoInventario"],
    Usuario: ["usuario", "findFirstUsuario", "usuarios", "createUsuario", "createManyUsuario", "deleteUsuario", "updateUsuario", "deleteManyUsuario", "updateManyUsuario", "upsertUsuario", "aggregateUsuario", "groupByUsuario"]
};
const argsInfo = {
    FindUniqueProductoArgs: ["where"],
    FindFirstProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProductoArgs: ["data"],
    CreateManyProductoArgs: ["data", "skipDuplicates"],
    DeleteProductoArgs: ["where"],
    UpdateProductoArgs: ["data", "where"],
    DeleteManyProductoArgs: ["where"],
    UpdateManyProductoArgs: ["data", "where"],
    UpsertProductoArgs: ["where", "create", "update"],
    AggregateProductoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProductoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueInventarioArgs: ["where"],
    FindFirstInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInventarioArgs: ["data"],
    CreateManyInventarioArgs: ["data", "skipDuplicates"],
    DeleteInventarioArgs: ["where"],
    UpdateInventarioArgs: ["data", "where"],
    DeleteManyInventarioArgs: ["where"],
    UpdateManyInventarioArgs: ["data", "where"],
    UpsertInventarioArgs: ["where", "create", "update"],
    AggregateInventarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByInventarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMovimientoInventarioArgs: ["where"],
    FindFirstMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMovimientoInventarioArgs: ["data"],
    CreateManyMovimientoInventarioArgs: ["data", "skipDuplicates"],
    DeleteMovimientoInventarioArgs: ["where"],
    UpdateMovimientoInventarioArgs: ["data", "where"],
    DeleteManyMovimientoInventarioArgs: ["where"],
    UpdateManyMovimientoInventarioArgs: ["data", "where"],
    UpsertMovimientoInventarioArgs: ["where", "create", "update"],
    AggregateMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMovimientoInventarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUsuarioArgs: ["where"],
    FindFirstUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUsuarioArgs: ["data"],
    CreateManyUsuarioArgs: ["data", "skipDuplicates"],
    DeleteUsuarioArgs: ["where"],
    UpdateUsuarioArgs: ["data", "where"],
    DeleteManyUsuarioArgs: ["where"],
    UpdateManyUsuarioArgs: ["data", "where"],
    UpsertUsuarioArgs: ["where", "create", "update"],
    AggregateUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Producto: relationResolvers.ProductoRelationsResolver,
    Inventario: relationResolvers.InventarioRelationsResolver,
    MovimientoInventario: relationResolvers.MovimientoInventarioRelationsResolver,
    Usuario: relationResolvers.UsuarioRelationsResolver
};
const relationResolversInfo = {
    Producto: ["inventario"],
    Inventario: ["producto", "movimientoInventario"],
    MovimientoInventario: ["inventario", "usuario"],
    Usuario: ["movimientos"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Producto: ["id", "nombre", "foto"],
    Inventario: ["id", "cantidad", "productoId"],
    MovimientoInventario: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    Usuario: ["id", "nombre", "correo"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProducto: ["_count", "_min", "_max"],
    ProductoGroupBy: ["id", "nombre", "foto", "_count", "_min", "_max"],
    AggregateInventario: ["_count", "_avg", "_sum", "_min", "_max"],
    InventarioGroupBy: ["id", "cantidad", "productoId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateMovimientoInventario: ["_count", "_avg", "_sum", "_min", "_max"],
    MovimientoInventarioGroupBy: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUsuario: ["_count", "_min", "_max"],
    UsuarioGroupBy: ["id", "nombre", "correo", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProductoCountAggregate: ["id", "nombre", "foto", "_all"],
    ProductoMinAggregate: ["id", "nombre", "foto"],
    ProductoMaxAggregate: ["id", "nombre", "foto"],
    InventarioCount: ["movimientoInventario"],
    InventarioCountAggregate: ["id", "cantidad", "productoId", "_all"],
    InventarioAvgAggregate: ["cantidad"],
    InventarioSumAggregate: ["cantidad"],
    InventarioMinAggregate: ["id", "cantidad", "productoId"],
    InventarioMaxAggregate: ["id", "cantidad", "productoId"],
    MovimientoInventarioCountAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_all"],
    MovimientoInventarioAvgAggregate: ["cantidad"],
    MovimientoInventarioSumAggregate: ["cantidad"],
    MovimientoInventarioMinAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioMaxAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    UsuarioCount: ["movimientos"],
    UsuarioCountAggregate: ["id", "nombre", "correo", "_all"],
    UsuarioMinAggregate: ["id", "nombre", "correo"],
    UsuarioMaxAggregate: ["id", "nombre", "correo"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProductoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "foto", "inventario"],
    ProductoOrderByWithRelationInput: ["id", "nombre", "foto", "inventario"],
    ProductoWhereUniqueInput: ["id"],
    ProductoOrderByWithAggregationInput: ["id", "nombre", "foto", "_count", "_max", "_min"],
    ProductoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "foto"],
    InventarioWhereInput: ["AND", "OR", "NOT", "id", "cantidad", "producto", "productoId", "movimientoInventario"],
    InventarioOrderByWithRelationInput: ["id", "cantidad", "producto", "productoId", "movimientoInventario"],
    InventarioWhereUniqueInput: ["id", "productoId"],
    InventarioOrderByWithAggregationInput: ["id", "cantidad", "productoId", "_count", "_avg", "_max", "_min", "_sum"],
    InventarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cantidad", "productoId"],
    MovimientoInventarioWhereInput: ["AND", "OR", "NOT", "id", "inventario", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuario", "usuarioId"],
    MovimientoInventarioOrderByWithRelationInput: ["id", "inventario", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuario", "usuarioId"],
    MovimientoInventarioWhereUniqueInput: ["id"],
    MovimientoInventarioOrderByWithAggregationInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_count", "_avg", "_max", "_min", "_sum"],
    MovimientoInventarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    UsuarioWhereInput: ["AND", "OR", "NOT", "id", "nombre", "correo", "movimientos"],
    UsuarioOrderByWithRelationInput: ["id", "nombre", "correo", "movimientos"],
    UsuarioWhereUniqueInput: ["id", "correo"],
    UsuarioOrderByWithAggregationInput: ["id", "nombre", "correo", "_count", "_max", "_min"],
    UsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "correo"],
    ProductoCreateInput: ["id", "nombre", "foto", "inventario"],
    ProductoUpdateInput: ["id", "nombre", "foto", "inventario"],
    ProductoCreateManyInput: ["id", "nombre", "foto"],
    ProductoUpdateManyMutationInput: ["id", "nombre", "foto"],
    InventarioCreateInput: ["id", "cantidad", "producto", "movimientoInventario"],
    InventarioUpdateInput: ["id", "cantidad", "producto", "movimientoInventario"],
    InventarioCreateManyInput: ["id", "cantidad", "productoId"],
    InventarioUpdateManyMutationInput: ["id", "cantidad"],
    MovimientoInventarioCreateInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario", "usuario"],
    MovimientoInventarioUpdateInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario", "usuario"],
    MovimientoInventarioCreateManyInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioUpdateManyMutationInput: ["id", "cantidad", "tipoMovimiento", "fecha"],
    UsuarioCreateInput: ["id", "nombre", "correo", "movimientos"],
    UsuarioUpdateInput: ["id", "nombre", "correo", "movimientos"],
    UsuarioCreateManyInput: ["id", "nombre", "correo"],
    UsuarioUpdateManyMutationInput: ["id", "nombre", "correo"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    InventarioRelationFilter: ["is", "isNot"],
    ProductoCountOrderByAggregateInput: ["id", "nombre", "foto"],
    ProductoMaxOrderByAggregateInput: ["id", "nombre", "foto"],
    ProductoMinOrderByAggregateInput: ["id", "nombre", "foto"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProductoRelationFilter: ["is", "isNot"],
    MovimientoInventarioListRelationFilter: ["every", "some", "none"],
    MovimientoInventarioOrderByRelationAggregateInput: ["_count"],
    InventarioCountOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioAvgOrderByAggregateInput: ["cantidad"],
    InventarioMaxOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioMinOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioSumOrderByAggregateInput: ["cantidad"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumEnum_TipoMovimientoFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UsuarioRelationFilter: ["is", "isNot"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    MovimientoInventarioCountOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioAvgOrderByAggregateInput: ["cantidad"],
    MovimientoInventarioMaxOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioMinOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioSumOrderByAggregateInput: ["cantidad"],
    EnumEnum_TipoMovimientoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    UsuarioCountOrderByAggregateInput: ["id", "nombre", "correo"],
    UsuarioMaxOrderByAggregateInput: ["id", "nombre", "correo"],
    UsuarioMinOrderByAggregateInput: ["id", "nombre", "correo"],
    InventarioCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    InventarioUpdateOneWithoutProductoInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ProductoCreateNestedOneWithoutInventarioInput: ["create", "connectOrCreate", "connect"],
    MovimientoInventarioCreateNestedManyWithoutInventarioInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    ProductoUpdateOneRequiredWithoutInventarioInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    MovimientoInventarioUpdateManyWithoutInventarioInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InventarioCreateNestedOneWithoutMovimientoInventarioInput: ["create", "connectOrCreate", "connect"],
    UsuarioCreateNestedOneWithoutMovimientosInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_TipoMovimientoFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    InventarioUpdateOneRequiredWithoutMovimientoInventarioInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UsuarioUpdateOneWithoutMovimientosInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    MovimientoInventarioCreateNestedManyWithoutUsuarioInput: ["create", "connectOrCreate", "createMany", "connect"],
    MovimientoInventarioUpdateManyWithoutUsuarioInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_TipoMovimientoFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_TipoMovimientoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    InventarioCreateWithoutProductoInput: ["id", "cantidad", "movimientoInventario"],
    InventarioCreateOrConnectWithoutProductoInput: ["where", "create"],
    InventarioUpsertWithoutProductoInput: ["update", "create"],
    InventarioUpdateWithoutProductoInput: ["id", "cantidad", "movimientoInventario"],
    ProductoCreateWithoutInventarioInput: ["id", "nombre", "foto"],
    ProductoCreateOrConnectWithoutInventarioInput: ["where", "create"],
    MovimientoInventarioCreateWithoutInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuario"],
    MovimientoInventarioCreateOrConnectWithoutInventarioInput: ["where", "create"],
    MovimientoInventarioCreateManyInventarioInputEnvelope: ["data", "skipDuplicates"],
    ProductoUpsertWithoutInventarioInput: ["update", "create"],
    ProductoUpdateWithoutInventarioInput: ["id", "nombre", "foto"],
    MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput: ["where", "update", "create"],
    MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput: ["where", "data"],
    MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput: ["where", "data"],
    MovimientoInventarioScalarWhereInput: ["AND", "OR", "NOT", "id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    InventarioCreateWithoutMovimientoInventarioInput: ["id", "cantidad", "producto"],
    InventarioCreateOrConnectWithoutMovimientoInventarioInput: ["where", "create"],
    UsuarioCreateWithoutMovimientosInput: ["id", "nombre", "correo"],
    UsuarioCreateOrConnectWithoutMovimientosInput: ["where", "create"],
    InventarioUpsertWithoutMovimientoInventarioInput: ["update", "create"],
    InventarioUpdateWithoutMovimientoInventarioInput: ["id", "cantidad", "producto"],
    UsuarioUpsertWithoutMovimientosInput: ["update", "create"],
    UsuarioUpdateWithoutMovimientosInput: ["id", "nombre", "correo"],
    MovimientoInventarioCreateWithoutUsuarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario"],
    MovimientoInventarioCreateOrConnectWithoutUsuarioInput: ["where", "create"],
    MovimientoInventarioCreateManyUsuarioInputEnvelope: ["data", "skipDuplicates"],
    MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput: ["where", "update", "create"],
    MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput: ["where", "data"],
    MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput: ["where", "data"],
    MovimientoInventarioCreateManyInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioUpdateWithoutInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuario"],
    MovimientoInventarioCreateManyUsuarioInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha"],
    MovimientoInventarioUpdateWithoutUsuarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
