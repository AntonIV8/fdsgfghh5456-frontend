import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import DataLinefdsgfghh5456cardinality_typeLForm from './forms/data-line-fdsgfghh5456-cardinality-type-l';
import DataLinefdsgfghh5456catalogLForm from './forms/data-line-fdsgfghh5456-catalog-l';
import DataLinefdsgfghh5456characteristic_typeLForm from './forms/data-line-fdsgfghh5456-characteristic-type-l';
import DataLinefdsgfghh5456contragentLForm from './forms/data-line-fdsgfghh5456-contragent-l';
import DataLinefdsgfghh5456customer_aclLForm from './forms/data-line-fdsgfghh5456-customer-acl-l';
import DataLinefdsgfghh5456customerLForm from './forms/data-line-fdsgfghh5456-customer-l';
import DataLinefdsgfghh5456dbaLForm from './forms/data-line-fdsgfghh5456-dba-l';
import DataLinefdsgfghh5456dictionaryLForm from './forms/data-line-fdsgfghh5456-dictionary-l';
import DataLinefdsgfghh5456dictionary_valueLForm from './forms/data-line-fdsgfghh5456-dictionary-value-l';
import DataLinefdsgfghh5456grpLForm from './forms/data-line-fdsgfghh5456-grp-l';
import DataLinefdsgfghh5456order_itemLForm from './forms/data-line-fdsgfghh5456-order-item-l';
import DataLinefdsgfghh5456order_stateLForm from './forms/data-line-fdsgfghh5456-order-state-l';
import DataLinefdsgfghh5456product_catalogLForm from './forms/data-line-fdsgfghh5456-product-catalog-l';
import DataLinefdsgfghh5456resource_characteristicLForm from './forms/data-line-fdsgfghh5456-resource-characteristic-l';
import DataLinefdsgfghh5456resource_characteristic_logLForm from './forms/data-line-fdsgfghh5456-resource-characteristic-log-l';
import DataLinefdsgfghh5456resource_commonLForm from './forms/data-line-fdsgfghh5456-resource-common-l';
import DataLinefdsgfghh5456resourceLForm from './forms/data-line-fdsgfghh5456-resource-l';
import DataLinefdsgfghh5456resource_logLForm from './forms/data-line-fdsgfghh5456-resource-log-l';
import DataLinefdsgfghh5456resource_sharedLForm from './forms/data-line-fdsgfghh5456-resource-shared-l';
import DataLinefdsgfghh5456resource_spec_characteristicLForm from './forms/data-line-fdsgfghh5456-resource-spec-characteristic-l';
import DataLinefdsgfghh5456resource_specLForm from './forms/data-line-fdsgfghh5456-resource-spec-l';
import DataLinefdsgfghh5456resource_usage_specLForm from './forms/data-line-fdsgfghh5456-resource-usage-spec-l';
import DataLinefdsgfghh5456roleLForm from './forms/data-line-fdsgfghh5456-role-l';
import DataLinefdsgfghh5456service_characteristicLForm from './forms/data-line-fdsgfghh5456-service-characteristic-l';
import DataLinefdsgfghh5456service_characteristic_logLForm from './forms/data-line-fdsgfghh5456-service-characteristic-log-l';
import DataLinefdsgfghh5456serviceLForm from './forms/data-line-fdsgfghh5456-service-l';
import DataLinefdsgfghh5456service_logLForm from './forms/data-line-fdsgfghh5456-service-log-l';
import DataLinefdsgfghh5456service_orderLForm from './forms/data-line-fdsgfghh5456-service-order-l';
import DataLinefdsgfghh5456service_spec_aclLForm from './forms/data-line-fdsgfghh5456-service-spec-acl-l';
import DataLinefdsgfghh5456service_spec_characteristicLForm from './forms/data-line-fdsgfghh5456-service-spec-characteristic-l';
import DataLinefdsgfghh5456service_specLForm from './forms/data-line-fdsgfghh5456-service-spec-l';
import DataLinefdsgfghh5456service_stateLForm from './forms/data-line-fdsgfghh5456-service-state-l';
import DataLinefdsgfghh5456service_usage_specLForm from './forms/data-line-fdsgfghh5456-service-usage-spec-l';
import DataLinefdsgfghh5456user_groupLForm from './forms/data-line-fdsgfghh5456-user-group-l';
import DataLinefdsgfghh5456user_resource_specLForm from './forms/data-line-fdsgfghh5456-user-resource-spec-l';
import DataLinefdsgfghh5456user_roleLForm from './forms/data-line-fdsgfghh5456-user-role-l';
import DataLinefdsgfghh5456user_service_orderLForm from './forms/data-line-fdsgfghh5456-user-service-order-l';
import DataLinefdsgfghh5456user_service_specLForm from './forms/data-line-fdsgfghh5456-user-service-spec-l';
import DataLinefdsgfghh5456usrLForm from './forms/data-line-fdsgfghh5456-usr-l';
import DataLinefdsgfghh5456cardinality_typeEForm from './forms/data-line-fdsgfghh5456-cardinality-type-e';
import DataLinefdsgfghh5456catalogEForm from './forms/data-line-fdsgfghh5456-catalog-e';
import DataLinefdsgfghh5456characteristic_typeEForm from './forms/data-line-fdsgfghh5456-characteristic-type-e';
import DataLinefdsgfghh5456contragentEForm from './forms/data-line-fdsgfghh5456-contragent-e';
import DataLinefdsgfghh5456customer_aclEForm from './forms/data-line-fdsgfghh5456-customer-acl-e';
import DataLinefdsgfghh5456customerEForm from './forms/data-line-fdsgfghh5456-customer-e';
import DataLinefdsgfghh5456dbaEForm from './forms/data-line-fdsgfghh5456-dba-e';
import DataLinefdsgfghh5456dictionaryEForm from './forms/data-line-fdsgfghh5456-dictionary-e';
import DataLinefdsgfghh5456dictionary_valueEForm from './forms/data-line-fdsgfghh5456-dictionary-value-e';
import DataLinefdsgfghh5456grpEForm from './forms/data-line-fdsgfghh5456-grp-e';
import DataLinefdsgfghh5456order_itemEForm from './forms/data-line-fdsgfghh5456-order-item-e';
import DataLinefdsgfghh5456order_stateEForm from './forms/data-line-fdsgfghh5456-order-state-e';
import DataLinefdsgfghh5456product_catalogEForm from './forms/data-line-fdsgfghh5456-product-catalog-e';
import DataLinefdsgfghh5456resource_characteristicEForm from './forms/data-line-fdsgfghh5456-resource-characteristic-e';
import DataLinefdsgfghh5456resource_characteristic_logEForm from './forms/data-line-fdsgfghh5456-resource-characteristic-log-e';
import DataLinefdsgfghh5456resource_commonEForm from './forms/data-line-fdsgfghh5456-resource-common-e';
import DataLinefdsgfghh5456resourceEForm from './forms/data-line-fdsgfghh5456-resource-e';
import DataLinefdsgfghh5456resource_logEForm from './forms/data-line-fdsgfghh5456-resource-log-e';
import DataLinefdsgfghh5456resource_sharedEForm from './forms/data-line-fdsgfghh5456-resource-shared-e';
import DataLinefdsgfghh5456resource_spec_characteristicEForm from './forms/data-line-fdsgfghh5456-resource-spec-characteristic-e';
import DataLinefdsgfghh5456resource_specEForm from './forms/data-line-fdsgfghh5456-resource-spec-e';
import DataLinefdsgfghh5456resource_usage_specEForm from './forms/data-line-fdsgfghh5456-resource-usage-spec-e';
import DataLinefdsgfghh5456roleEForm from './forms/data-line-fdsgfghh5456-role-e';
import DataLinefdsgfghh5456service_characteristicEForm from './forms/data-line-fdsgfghh5456-service-characteristic-e';
import DataLinefdsgfghh5456service_characteristic_logEForm from './forms/data-line-fdsgfghh5456-service-characteristic-log-e';
import DataLinefdsgfghh5456serviceEForm from './forms/data-line-fdsgfghh5456-service-e';
import DataLinefdsgfghh5456service_logEForm from './forms/data-line-fdsgfghh5456-service-log-e';
import DataLinefdsgfghh5456service_orderEForm from './forms/data-line-fdsgfghh5456-service-order-e';
import DataLinefdsgfghh5456service_spec_aclEForm from './forms/data-line-fdsgfghh5456-service-spec-acl-e';
import DataLinefdsgfghh5456service_spec_characteristicEForm from './forms/data-line-fdsgfghh5456-service-spec-characteristic-e';
import DataLinefdsgfghh5456service_specEForm from './forms/data-line-fdsgfghh5456-service-spec-e';
import DataLinefdsgfghh5456service_stateEForm from './forms/data-line-fdsgfghh5456-service-state-e';
import DataLinefdsgfghh5456service_usage_specEForm from './forms/data-line-fdsgfghh5456-service-usage-spec-e';
import DataLinefdsgfghh5456user_groupEForm from './forms/data-line-fdsgfghh5456-user-group-e';
import DataLinefdsgfghh5456user_resource_specEForm from './forms/data-line-fdsgfghh5456-user-resource-spec-e';
import DataLinefdsgfghh5456user_roleEForm from './forms/data-line-fdsgfghh5456-user-role-e';
import DataLinefdsgfghh5456user_service_orderEForm from './forms/data-line-fdsgfghh5456-user-service-order-e';
import DataLinefdsgfghh5456user_service_specEForm from './forms/data-line-fdsgfghh5456-user-service-spec-e';
import DataLinefdsgfghh5456usrEForm from './forms/data-line-fdsgfghh5456-usr-e';
import DataLineProtoOneCardinalityTypeModel from './models/data-line-proto-one-cardinality-type';
import DataLineProtoOneCatalogModel from './models/data-line-proto-one-catalog';
import DataLineProtoOneCharacteristicTypeModel from './models/data-line-proto-one-characteristic-type';
import DataLineProtoOneContragentModel from './models/data-line-proto-one-contragent';
import DataLineProtoOneCustomerAclModel from './models/data-line-proto-one-customer-acl';
import DataLineProtoOneCustomerModel from './models/data-line-proto-one-customer';
import DataLineProtoOneDbaModel from './models/data-line-proto-one-dba';
import DataLineProtoOneDictionaryValueModel from './models/data-line-proto-one-dictionary-value';
import DataLineProtoOneDictionaryModel from './models/data-line-proto-one-dictionary';
import DataLineProtoOneGrpModel from './models/data-line-proto-one-grp';
import DataLineProtoOneOrderItemModel from './models/data-line-proto-one-order-item';
import DataLineProtoOneOrderStateModel from './models/data-line-proto-one-order-state';
import DataLineProtoOneProductCatalogModel from './models/data-line-proto-one-product-catalog';
import DataLineProtoOneResourceCharacteristicLogModel from './models/data-line-proto-one-resource-characteristic-log';
import DataLineProtoOneResourceCharacteristicModel from './models/data-line-proto-one-resource-characteristic';
import DataLineProtoOneResourceCommonModel from './models/data-line-proto-one-resource-common';
import DataLineProtoOneResourceLogModel from './models/data-line-proto-one-resource-log';
import DataLineProtoOneResourceSharedModel from './models/data-line-proto-one-resource-shared';
import DataLineProtoOneResourceSpecCharacteristicModel from './models/data-line-proto-one-resource-spec-characteristic';
import DataLineProtoOneResourceSpecModel from './models/data-line-proto-one-resource-spec';
import DataLineProtoOneResourceUsageSpecModel from './models/data-line-proto-one-resource-usage-spec';
import DataLineProtoOneResourceModel from './models/data-line-proto-one-resource';
import DataLineProtoOneRoleModel from './models/data-line-proto-one-role';
import DataLineProtoOneServiceCharacteristicLogModel from './models/data-line-proto-one-service-characteristic-log';
import DataLineProtoOneServiceCharacteristicModel from './models/data-line-proto-one-service-characteristic';
import DataLineProtoOneServiceLogModel from './models/data-line-proto-one-service-log';
import DataLineProtoOneServiceOrderModel from './models/data-line-proto-one-service-order';
import DataLineProtoOneServiceSpecAclModel from './models/data-line-proto-one-service-spec-acl';
import DataLineProtoOneServiceSpecCharacteristicModel from './models/data-line-proto-one-service-spec-characteristic';
import DataLineProtoOneServiceSpecModel from './models/data-line-proto-one-service-spec';
import DataLineProtoOneServiceStateModel from './models/data-line-proto-one-service-state';
import DataLineProtoOneServiceUsageSpecModel from './models/data-line-proto-one-service-usage-spec';
import DataLineProtoOneServiceModel from './models/data-line-proto-one-service';
import DataLineProtoOneUserGroupModel from './models/data-line-proto-one-user-group';
import DataLineProtoOneUserResourceSpecModel from './models/data-line-proto-one-user-resource-spec';
import DataLineProtoOneUserRoleModel from './models/data-line-proto-one-user-role';
import DataLineProtoOneUserServiceOrderModel from './models/data-line-proto-one-user-service-order';
import DataLineProtoOneUserServiceSpecModel from './models/data-line-proto-one-user-service-spec';
import DataLineProtoOneUsrModel from './models/data-line-proto-one-usr';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'data-line-proto-one-cardinality-type': DataLineProtoOneCardinalityTypeModel,
    'data-line-proto-one-catalog': DataLineProtoOneCatalogModel,
    'data-line-proto-one-characteristic-type': DataLineProtoOneCharacteristicTypeModel,
    'data-line-proto-one-contragent': DataLineProtoOneContragentModel,
    'data-line-proto-one-customer-acl': DataLineProtoOneCustomerAclModel,
    'data-line-proto-one-customer': DataLineProtoOneCustomerModel,
    'data-line-proto-one-dba': DataLineProtoOneDbaModel,
    'data-line-proto-one-dictionary-value': DataLineProtoOneDictionaryValueModel,
    'data-line-proto-one-dictionary': DataLineProtoOneDictionaryModel,
    'data-line-proto-one-grp': DataLineProtoOneGrpModel,
    'data-line-proto-one-order-item': DataLineProtoOneOrderItemModel,
    'data-line-proto-one-order-state': DataLineProtoOneOrderStateModel,
    'data-line-proto-one-product-catalog': DataLineProtoOneProductCatalogModel,
    'data-line-proto-one-resource-characteristic-log': DataLineProtoOneResourceCharacteristicLogModel,
    'data-line-proto-one-resource-characteristic': DataLineProtoOneResourceCharacteristicModel,
    'data-line-proto-one-resource-common': DataLineProtoOneResourceCommonModel,
    'data-line-proto-one-resource-log': DataLineProtoOneResourceLogModel,
    'data-line-proto-one-resource-shared': DataLineProtoOneResourceSharedModel,
    'data-line-proto-one-resource-spec-characteristic': DataLineProtoOneResourceSpecCharacteristicModel,
    'data-line-proto-one-resource-spec': DataLineProtoOneResourceSpecModel,
    'data-line-proto-one-resource-usage-spec': DataLineProtoOneResourceUsageSpecModel,
    'data-line-proto-one-resource': DataLineProtoOneResourceModel,
    'data-line-proto-one-role': DataLineProtoOneRoleModel,
    'data-line-proto-one-service-characteristic-log': DataLineProtoOneServiceCharacteristicLogModel,
    'data-line-proto-one-service-characteristic': DataLineProtoOneServiceCharacteristicModel,
    'data-line-proto-one-service-log': DataLineProtoOneServiceLogModel,
    'data-line-proto-one-service-order': DataLineProtoOneServiceOrderModel,
    'data-line-proto-one-service-spec-acl': DataLineProtoOneServiceSpecAclModel,
    'data-line-proto-one-service-spec-characteristic': DataLineProtoOneServiceSpecCharacteristicModel,
    'data-line-proto-one-service-spec': DataLineProtoOneServiceSpecModel,
    'data-line-proto-one-service-state': DataLineProtoOneServiceStateModel,
    'data-line-proto-one-service-usage-spec': DataLineProtoOneServiceUsageSpecModel,
    'data-line-proto-one-service': DataLineProtoOneServiceModel,
    'data-line-proto-one-user-group': DataLineProtoOneUserGroupModel,
    'data-line-proto-one-user-resource-spec': DataLineProtoOneUserResourceSpecModel,
    'data-line-proto-one-user-role': DataLineProtoOneUserRoleModel,
    'data-line-proto-one-user-service-order': DataLineProtoOneUserServiceOrderModel,
    'data-line-proto-one-user-service-spec': DataLineProtoOneUserServiceSpecModel,
    'data-line-proto-one-usr': DataLineProtoOneUsrModel
  },

  'application-name': 'Proto one',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proto one',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proto one',
          title: 'Proto one'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'proto-one': {
          caption: 'ProtoOne',
          title: 'ProtoOne',
          'data-line-fdsgfghh5456-dictionary-l': {
            caption: 'Dictionary',
            title: ''
          },
          'data-line-fdsgfghh5456-user-service-spec-l': {
            caption: 'User_service_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-characteristic-l': {
            caption: 'Resource_characteristic',
            title: ''
          },
          'data-line-fdsgfghh5456-user-group-l': {
            caption: 'User_group',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-spec-l': {
            caption: 'Resource_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-spec-characteristic-l': {
            caption: 'Resource_spec_characteristic',
            title: ''
          },
          'data-line-fdsgfghh5456-service-l': {
            caption: 'Service',
            title: ''
          },
          'data-line-fdsgfghh5456-product-catalog-l': {
            caption: 'Product_catalog',
            title: ''
          },
          'data-line-fdsgfghh5456-role-l': {
            caption: 'Role',
            title: ''
          },
          'data-line-fdsgfghh5456-order-state-l': {
            caption: 'Order_state',
            title: ''
          },
          'data-line-fdsgfghh5456-customer-l': {
            caption: 'Customer',
            title: ''
          },
          'data-line-fdsgfghh5456-service-characteristic-l': {
            caption: 'Service_characteristic',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-shared-l': {
            caption: 'Resource_shared',
            title: ''
          },
          'data-line-fdsgfghh5456-service-spec-characteristic-l': {
            caption: 'Service_spec_characteristic',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-common-l': {
            caption: 'Resource_common',
            title: ''
          },
          'data-line-fdsgfghh5456-customer-acl-l': {
            caption: 'Customer_acl',
            title: ''
          },
          'data-line-fdsgfghh5456-usr-l': {
            caption: 'Usr',
            title: ''
          },
          'data-line-fdsgfghh5456-order-item-l': {
            caption: 'Order_item',
            title: ''
          },
          'data-line-fdsgfghh5456-service-spec-l': {
            caption: 'Service_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-service-state-l': {
            caption: 'Service_state',
            title: ''
          },
          'data-line-fdsgfghh5456-user-service-order-l': {
            caption: 'User_service_order',
            title: ''
          },
          'data-line-fdsgfghh5456-contragent-l': {
            caption: 'Contragent',
            title: ''
          },
          'data-line-fdsgfghh5456-catalog-l': {
            caption: 'Catalog',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-characteristic-log-l': {
            caption: 'Resource_characteristic_log',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-log-l': {
            caption: 'Resource_log',
            title: ''
          },
          'data-line-fdsgfghh5456-grp-l': {
            caption: 'Grp',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-l': {
            caption: 'Resource',
            title: ''
          },
          'data-line-fdsgfghh5456-user-role-l': {
            caption: 'User_role',
            title: ''
          },
          'data-line-fdsgfghh5456-service-spec-acl-l': {
            caption: 'Service_spec_acl',
            title: ''
          },
          'data-line-fdsgfghh5456-service-characteristic-log-l': {
            caption: 'Service_characteristic_log',
            title: ''
          },
          'data-line-fdsgfghh5456-service-log-l': {
            caption: 'Service_log',
            title: ''
          },
          'data-line-fdsgfghh5456-resource-usage-spec-l': {
            caption: 'Resource_usage_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-cardinality-type-l': {
            caption: 'Cardinality_type',
            title: ''
          },
          'data-line-fdsgfghh5456-service-usage-spec-l': {
            caption: 'Service_usage_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-user-resource-spec-l': {
            caption: 'User_resource_spec',
            title: ''
          },
          'data-line-fdsgfghh5456-service-order-l': {
            caption: 'Service_order',
            title: ''
          },
          'data-line-fdsgfghh5456-characteristic-type-l': {
            caption: 'Characteristic_type',
            title: ''
          },
          'data-line-fdsgfghh5456-dictionary-value-l': {
            caption: 'Dictionary_value',
            title: ''
          },
          'data-line-fdsgfghh5456-dba-l': {
            caption: 'Dba',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'data-line-fdsgfghh5456-cardinality-type-l': DataLinefdsgfghh5456cardinality_typeLForm,
    'data-line-fdsgfghh5456-catalog-l': DataLinefdsgfghh5456catalogLForm,
    'data-line-fdsgfghh5456-characteristic-type-l': DataLinefdsgfghh5456characteristic_typeLForm,
    'data-line-fdsgfghh5456-contragent-l': DataLinefdsgfghh5456contragentLForm,
    'data-line-fdsgfghh5456-customer-acl-l': DataLinefdsgfghh5456customer_aclLForm,
    'data-line-fdsgfghh5456-customer-l': DataLinefdsgfghh5456customerLForm,
    'data-line-fdsgfghh5456-dba-l': DataLinefdsgfghh5456dbaLForm,
    'data-line-fdsgfghh5456-dictionary-l': DataLinefdsgfghh5456dictionaryLForm,
    'data-line-fdsgfghh5456-dictionary-value-l': DataLinefdsgfghh5456dictionary_valueLForm,
    'data-line-fdsgfghh5456-grp-l': DataLinefdsgfghh5456grpLForm,
    'data-line-fdsgfghh5456-order-item-l': DataLinefdsgfghh5456order_itemLForm,
    'data-line-fdsgfghh5456-order-state-l': DataLinefdsgfghh5456order_stateLForm,
    'data-line-fdsgfghh5456-product-catalog-l': DataLinefdsgfghh5456product_catalogLForm,
    'data-line-fdsgfghh5456-resource-characteristic-l': DataLinefdsgfghh5456resource_characteristicLForm,
    'data-line-fdsgfghh5456-resource-characteristic-log-l': DataLinefdsgfghh5456resource_characteristic_logLForm,
    'data-line-fdsgfghh5456-resource-common-l': DataLinefdsgfghh5456resource_commonLForm,
    'data-line-fdsgfghh5456-resource-l': DataLinefdsgfghh5456resourceLForm,
    'data-line-fdsgfghh5456-resource-log-l': DataLinefdsgfghh5456resource_logLForm,
    'data-line-fdsgfghh5456-resource-shared-l': DataLinefdsgfghh5456resource_sharedLForm,
    'data-line-fdsgfghh5456-resource-spec-characteristic-l': DataLinefdsgfghh5456resource_spec_characteristicLForm,
    'data-line-fdsgfghh5456-resource-spec-l': DataLinefdsgfghh5456resource_specLForm,
    'data-line-fdsgfghh5456-resource-usage-spec-l': DataLinefdsgfghh5456resource_usage_specLForm,
    'data-line-fdsgfghh5456-role-l': DataLinefdsgfghh5456roleLForm,
    'data-line-fdsgfghh5456-service-characteristic-l': DataLinefdsgfghh5456service_characteristicLForm,
    'data-line-fdsgfghh5456-service-characteristic-log-l': DataLinefdsgfghh5456service_characteristic_logLForm,
    'data-line-fdsgfghh5456-service-l': DataLinefdsgfghh5456serviceLForm,
    'data-line-fdsgfghh5456-service-log-l': DataLinefdsgfghh5456service_logLForm,
    'data-line-fdsgfghh5456-service-order-l': DataLinefdsgfghh5456service_orderLForm,
    'data-line-fdsgfghh5456-service-spec-acl-l': DataLinefdsgfghh5456service_spec_aclLForm,
    'data-line-fdsgfghh5456-service-spec-characteristic-l': DataLinefdsgfghh5456service_spec_characteristicLForm,
    'data-line-fdsgfghh5456-service-spec-l': DataLinefdsgfghh5456service_specLForm,
    'data-line-fdsgfghh5456-service-state-l': DataLinefdsgfghh5456service_stateLForm,
    'data-line-fdsgfghh5456-service-usage-spec-l': DataLinefdsgfghh5456service_usage_specLForm,
    'data-line-fdsgfghh5456-user-group-l': DataLinefdsgfghh5456user_groupLForm,
    'data-line-fdsgfghh5456-user-resource-spec-l': DataLinefdsgfghh5456user_resource_specLForm,
    'data-line-fdsgfghh5456-user-role-l': DataLinefdsgfghh5456user_roleLForm,
    'data-line-fdsgfghh5456-user-service-order-l': DataLinefdsgfghh5456user_service_orderLForm,
    'data-line-fdsgfghh5456-user-service-spec-l': DataLinefdsgfghh5456user_service_specLForm,
    'data-line-fdsgfghh5456-usr-l': DataLinefdsgfghh5456usrLForm,
    'data-line-fdsgfghh5456-cardinality-type-e': DataLinefdsgfghh5456cardinality_typeEForm,
    'data-line-fdsgfghh5456-catalog-e': DataLinefdsgfghh5456catalogEForm,
    'data-line-fdsgfghh5456-characteristic-type-e': DataLinefdsgfghh5456characteristic_typeEForm,
    'data-line-fdsgfghh5456-contragent-e': DataLinefdsgfghh5456contragentEForm,
    'data-line-fdsgfghh5456-customer-acl-e': DataLinefdsgfghh5456customer_aclEForm,
    'data-line-fdsgfghh5456-customer-e': DataLinefdsgfghh5456customerEForm,
    'data-line-fdsgfghh5456-dba-e': DataLinefdsgfghh5456dbaEForm,
    'data-line-fdsgfghh5456-dictionary-e': DataLinefdsgfghh5456dictionaryEForm,
    'data-line-fdsgfghh5456-dictionary-value-e': DataLinefdsgfghh5456dictionary_valueEForm,
    'data-line-fdsgfghh5456-grp-e': DataLinefdsgfghh5456grpEForm,
    'data-line-fdsgfghh5456-order-item-e': DataLinefdsgfghh5456order_itemEForm,
    'data-line-fdsgfghh5456-order-state-e': DataLinefdsgfghh5456order_stateEForm,
    'data-line-fdsgfghh5456-product-catalog-e': DataLinefdsgfghh5456product_catalogEForm,
    'data-line-fdsgfghh5456-resource-characteristic-e': DataLinefdsgfghh5456resource_characteristicEForm,
    'data-line-fdsgfghh5456-resource-characteristic-log-e': DataLinefdsgfghh5456resource_characteristic_logEForm,
    'data-line-fdsgfghh5456-resource-common-e': DataLinefdsgfghh5456resource_commonEForm,
    'data-line-fdsgfghh5456-resource-e': DataLinefdsgfghh5456resourceEForm,
    'data-line-fdsgfghh5456-resource-log-e': DataLinefdsgfghh5456resource_logEForm,
    'data-line-fdsgfghh5456-resource-shared-e': DataLinefdsgfghh5456resource_sharedEForm,
    'data-line-fdsgfghh5456-resource-spec-characteristic-e': DataLinefdsgfghh5456resource_spec_characteristicEForm,
    'data-line-fdsgfghh5456-resource-spec-e': DataLinefdsgfghh5456resource_specEForm,
    'data-line-fdsgfghh5456-resource-usage-spec-e': DataLinefdsgfghh5456resource_usage_specEForm,
    'data-line-fdsgfghh5456-role-e': DataLinefdsgfghh5456roleEForm,
    'data-line-fdsgfghh5456-service-characteristic-e': DataLinefdsgfghh5456service_characteristicEForm,
    'data-line-fdsgfghh5456-service-characteristic-log-e': DataLinefdsgfghh5456service_characteristic_logEForm,
    'data-line-fdsgfghh5456-service-e': DataLinefdsgfghh5456serviceEForm,
    'data-line-fdsgfghh5456-service-log-e': DataLinefdsgfghh5456service_logEForm,
    'data-line-fdsgfghh5456-service-order-e': DataLinefdsgfghh5456service_orderEForm,
    'data-line-fdsgfghh5456-service-spec-acl-e': DataLinefdsgfghh5456service_spec_aclEForm,
    'data-line-fdsgfghh5456-service-spec-characteristic-e': DataLinefdsgfghh5456service_spec_characteristicEForm,
    'data-line-fdsgfghh5456-service-spec-e': DataLinefdsgfghh5456service_specEForm,
    'data-line-fdsgfghh5456-service-state-e': DataLinefdsgfghh5456service_stateEForm,
    'data-line-fdsgfghh5456-service-usage-spec-e': DataLinefdsgfghh5456service_usage_specEForm,
    'data-line-fdsgfghh5456-user-group-e': DataLinefdsgfghh5456user_groupEForm,
    'data-line-fdsgfghh5456-user-resource-spec-e': DataLinefdsgfghh5456user_resource_specEForm,
    'data-line-fdsgfghh5456-user-role-e': DataLinefdsgfghh5456user_roleEForm,
    'data-line-fdsgfghh5456-user-service-order-e': DataLinefdsgfghh5456user_service_orderEForm,
    'data-line-fdsgfghh5456-user-service-spec-e': DataLinefdsgfghh5456user_service_specEForm,
    'data-line-fdsgfghh5456-usr-e': DataLinefdsgfghh5456usrEForm
  },

});

export default translations;
