import { program } from "commander";
import createCLI from "./createCli.js";

export default function () {
  createCLI(program);
  program.parse(process.argv);
}