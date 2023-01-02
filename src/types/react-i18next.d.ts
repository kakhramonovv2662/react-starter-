import type { resources, defaultNS } from '../localization/init';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['uz'];
  interface Resources extends DefaultResources {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['uz'];
  }
}
