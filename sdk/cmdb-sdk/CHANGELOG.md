# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.7.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.7.0...@next-sdk/cmdb-sdk@3.7.1) (2024-04-24)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [3.7.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.6.0...@next-sdk/cmdb-sdk@3.7.0) (2024-04-24)

### Features

- add apis: InstanceApi_exportInstanceExcelBatch, InstanceApi_exportInstanceExcelBatchV2, InstanceApi_instanceRelationsCountV2, InstanceBaselineApi_batchCreateInstanceBaseline, InstanceBaselineApi_getInstanceBaseline, InstanceBaselineApi_index, InstanceBaselineApi_listInstanceBaseline, InstanceRelationApi_relationExist, PermissionApi_buildInstanceAuthorizerQuery, TopoViewApi_createTopoAdjustStrategy, TopoViewApi_createTopoView, TopoViewApi_createTopoViewVersion, TopoViewApi_genTopoDataByVersion, TopoViewApi_index, TopoViewApi_listTopoViewVersion, TopoViewApi_updateTopoAdjustStrategy ([aa8c8ea](https://github.com/easyops-cn/next-providers/commit/aa8c8ea85e6dbd8abeb9af4d436b6913c2c6ff4f))

# [3.6.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.5.1...@next-sdk/cmdb-sdk@3.6.0) (2023-12-12)

### Features

- add apis: BusinessInstanceApi_getBusinessTreeListV2, CmdbObjectApi_batchListChildObject, CmdbObjectApi_exportExcel, CmdbObjectApi_exportExcelExample, CmdbObjectApi_getObjectRelationRelatedPath, CmdbObjectApi_parseExcel, ColumnInstanceApi_columnInstanceCount, ColumnInstanceApi_index, HistoryApi_listChangeHistory, InstanceApi_autoDiscoveryV2, InstanceApi_getListDisplayView, InstanceApi_getPropertyValueDetail, InstanceApi_olapV2, InstanceApi_updateListDisplayView ([723ab73](https://github.com/easyops-cn/next-providers/commit/723ab730f36f517f42b3d7a993d4c445e74c650b))

## 3.5.1 (2023-06-08)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [3.5.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.4.0...@next-sdk/cmdb-sdk@3.5.0) (2023-05-04)

### Features

- add apis: InstanceApi_getInstanceQueryStrategyView, InstanceApi_setInstanceQueryStrategyView, InstanceGraphApi_traverseGraphV3 ([8875a5e](https://github.com/easyops-cn/next-providers/commit/8875a5e250babdc3e9bd67475f19b1b2c9744b56))

# [3.4.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.3.1...@next-sdk/cmdb-sdk@3.4.0) (2023-02-07)

### Features

- add apis: CmdbObjectApi_importV3 ([66c36ca](https://github.com/easyops-cn/next-providers/commit/66c36cab8058c2b8063e8ba3bc561252da54ddee))

## [3.3.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.3.0...@next-sdk/cmdb-sdk@3.3.1) (2022-12-28)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [3.3.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.2.0...@next-sdk/cmdb-sdk@3.3.0) (2022-12-28)

### Features

- add apis: HistoryApi_batchRollbackInstanceEdit, InstanceApi_batchInstanceCount, InstanceRelationApi_deleteInstanceRelationV2, InstanceRelationApi_updateInstanceRelation ([9515af0](https://github.com/easyops-cn/next-providers/commit/9515af0864c54616133132980967db4ccda03544))

# [3.2.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.1.0...@next-sdk/cmdb-sdk@3.2.0) (2022-09-13)

### Features

- add apis: CmdbObjectApi_collect, CmdbObjectApi_searchCollect ([a4b01c0](https://github.com/easyops-cn/next-providers/commit/a4b01c01e2f4d06b3d601988d2621a5e49f17fda))

# [3.1.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.0.2...@next-sdk/cmdb-sdk@3.1.0) (2022-08-25)

### Features

- add apis: CmdbObjectApi_updateObjectView, InstanceRelationApi_groupInstanceByRelation, InstanceRelationApi_searchInstanceByRelation ([c113d5a](https://github.com/easyops-cn/next-providers/commit/c113d5a4588cb73d38317d4e75d199d0bf670e6e))

## [3.0.2](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.0.1...@next-sdk/cmdb-sdk@3.0.2) (2022-08-08)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [3.0.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@3.0.0...@next-sdk/cmdb-sdk@3.0.1) (2022-06-24)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [3.0.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.4.0...@next-sdk/cmdb-sdk@3.0.0) (2022-06-24)

### Features

- add apis: DatabaseApi_index, DatabaseApi_listV1, InstanceApi_parseSearchQueryStrategy, InstanceApi_validateInstancesWithExcel, InstanceRelationApi_list, ObjectRelationApi_createProperty, ObjectRelationApi_deleteProperty, ObjectRelationApi_updateProperty ([27418ed](https://github.com/easyops-cn/next-providers/commit/27418ed3a3c2ca541b101694fe3900aef6869523))

### BREAKING CHANGES

- remove apis: InstanceApi_importMultiplyInstancesWithExcel

INFRA-0

# [2.4.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.3.2...@next-sdk/cmdb-sdk@2.4.0) (2022-04-24)

### Features

- add apis: InstanceApi_importMultiplyInstancesWithExcel, InstanceApi_upsertInstance, ServiceNodeApi_discoverService, ServiceNodeApi_discoverServiceNode, ServiceNodeApi_index ([cc41bf1](https://github.com/easyops-cn/next-providers/commit/cc41bf1d5d4e02ada9b8cd4a1fe9f1889bc870af))

## [2.3.2](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.3.1...@next-sdk/cmdb-sdk@2.3.2) (2022-02-11)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.3.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.3.0...@next-sdk/cmdb-sdk@2.3.1) (2022-01-21)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [2.3.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.2.1...@next-sdk/cmdb-sdk@2.3.0) (2022-01-20)

### Features

- add apis: PermissionApi_getRoleCmdbPermission, PermissionApi_index, PermissionApi_updateRoleCmdbPermission ([93430f1](https://github.com/easyops-cn/next-providers/commit/93430f1ee16138e4a940731a8e6a91ed24b299a6))

## [2.2.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.2.0...@next-sdk/cmdb-sdk@2.2.1) (2022-01-19)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [2.2.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.20...@next-sdk/cmdb-sdk@2.2.0) (2022-01-19)

### Features

- add apis: CmdbObjectApi_listObjectCategoryV2 ([86b2756](https://github.com/easyops-cn/next-providers/commit/86b27561af74fbb393289f964ec1714545dc427a))

## [2.1.20](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.19...@next-sdk/cmdb-sdk@2.1.20) (2022-01-07)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.19](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.18...@next-sdk/cmdb-sdk@2.1.19) (2021-12-30)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.18](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.17...@next-sdk/cmdb-sdk@2.1.18) (2021-12-28)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.17](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.16...@next-sdk/cmdb-sdk@2.1.17) (2021-12-23)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.16](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.15...@next-sdk/cmdb-sdk@2.1.16) (2021-12-21)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.15](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.14...@next-sdk/cmdb-sdk@2.1.15) (2021-12-21)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.14](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.13...@next-sdk/cmdb-sdk@2.1.14) (2021-12-16)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.13](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.12...@next-sdk/cmdb-sdk@2.1.13) (2021-08-04)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.12](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.11...@next-sdk/cmdb-sdk@2.1.12) (2021-08-02)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.11](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.10...@next-sdk/cmdb-sdk@2.1.11) (2021-07-29)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.10](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.9...@next-sdk/cmdb-sdk@2.1.10) (2021-07-28)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.9](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.8...@next-sdk/cmdb-sdk@2.1.9) (2021-07-28)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.8](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.7...@next-sdk/cmdb-sdk@2.1.8) (2021-07-21)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.7](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.6...@next-sdk/cmdb-sdk@2.1.7) (2021-07-16)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.6](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.5...@next-sdk/cmdb-sdk@2.1.6) (2021-06-29)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.5](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.4...@next-sdk/cmdb-sdk@2.1.5) (2021-06-09)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.4](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.3...@next-sdk/cmdb-sdk@2.1.4) (2021-05-21)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.3](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.2...@next-sdk/cmdb-sdk@2.1.3) (2021-05-08)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.2](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.1...@next-sdk/cmdb-sdk@2.1.2) (2021-04-25)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [2.1.1](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@2.1.0...@next-sdk/cmdb-sdk@2.1.1) (2021-04-16)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

# [2.1.0](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.15...@next-sdk/cmdb-sdk@2.1.0) (2021-04-16)

### Features

- refactor sdk exports to make tree-shaking possible ([7dcb63b](https://github.com/easyops-cn/next-providers/commit/7dcb63bad6a7e6357c1c14ce9cf3ff9152c0c632))

## [1.0.15](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.14...@next-sdk/cmdb-sdk@1.0.15) (2021-04-14)

### Bug Fixes

- add contract as comment in sdk ([4a47a99](https://github.com/easyops-cn/next-providers/commit/4a47a99b3ed7f3a366ba64121b71d9f27d07148d))

## [1.0.14](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.13...@next-sdk/cmdb-sdk@1.0.14) (2021-04-07)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.13](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.12...@next-sdk/cmdb-sdk@1.0.13) (2021-04-07)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.12](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.11...@next-sdk/cmdb-sdk@1.0.12) (2021-03-29)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.11](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.10...@next-sdk/cmdb-sdk@1.0.11) (2021-03-18)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.10](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.9...@next-sdk/cmdb-sdk@1.0.10) (2021-03-09)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.9](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.8...@next-sdk/cmdb-sdk@1.0.9) (2021-03-09)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.8](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.7...@next-sdk/cmdb-sdk@1.0.8) (2021-02-23)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.7](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.6...@next-sdk/cmdb-sdk@1.0.7) (2021-02-09)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.6](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.5...@next-sdk/cmdb-sdk@1.0.6) (2021-02-07)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.5](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.4...@next-sdk/cmdb-sdk@1.0.5) (2021-02-06)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.4](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.3...@next-sdk/cmdb-sdk@1.0.4) (2021-02-02)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.3](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.2...@next-sdk/cmdb-sdk@1.0.3) (2021-02-01)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## [1.0.2](https://github.com/easyops-cn/next-providers/compare/@next-sdk/cmdb-sdk@1.0.1...@next-sdk/cmdb-sdk@1.0.2) (2021-01-30)

**Note:** Version bump only for package @next-sdk/cmdb-sdk

## 1.0.1 (2021-01-26)

**Note:** Version bump only for package @next-sdk/cmdb-sdk
