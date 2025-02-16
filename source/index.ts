import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const argvParseado = minimist(argv);
  return {
    action: argvParseado.action,
    params: JSON.parse(argvParseado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = controller.processOptions(params);
  console.log(result);
}

main();
