import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'resource_spec_characteristicL'
  */
  modelProjection: 'resource_spec_characteristicL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'data-line-proto-one-resource-spec-characteristic'
  */
  modelName: 'data-line-proto-one-resource-spec-characteristic',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { DataLinefdsgfghh5456resource_spec_characteristicL: {} }
  }),
});
