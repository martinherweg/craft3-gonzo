export default {
  filelist(state) {
    return state.filelist;
  },
  pluginSettings(state) {
    return state.pluginSettings;
  },
  mqButtons(state) {
    return state.pluginSettings.mqButtons;
  },
  compStatus(state) {
    return currentStatus => {
      const { pluginSettings } = state;
      if (!pluginSettings) {
        return {};
      }
      // eslint-disable-next-line
      const matchedStatus =
        pluginSettings.compStatus.find(
          status => status.name.toLowerCase() === currentStatus.toLowerCase(),
        ) || 'wip';
      return matchedStatus;
    };
  },
  activeComponent(state) {
    return state.activeComponent.config ? state.activeComponent.config : {};
  },
  activeComponentAssets(state) {
    return state.activeAssets;
  },
  activeComponentRender(state) {
    return state.activeTemplateRender;
  },
  activeTemplate(state) {
    return state.activeTemplate;
  },
};
