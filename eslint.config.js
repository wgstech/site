import { config, configs } from "@gurja/eslint-config";

export default config(configs.next, configs.typeChecked.next("tsconfig.json"));
