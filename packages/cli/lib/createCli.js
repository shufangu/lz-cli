import fse from "fs-extra";
import path from "path";
import { dirname } from "dirname-filename-esm";
import { log } from "@lzcli/utils";

const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, "../package.json");
const pkg = fse.readJsonSync(pkgPath);
// console.log("哈哈哈哈", import.meta);
export default function createCLI(program) {
  // 命令注册
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version, "-v, --version", "输出当前版本号")
    .option("-d, --debug", "是否开启调试模式", false)
    .helpOption("-h, --help", "命令显示帮助")
    .addHelpCommand("help [command]", "命令显示帮助");

  // 监听未知的命令
  program.on("command:*", function (obj) {
    console.error("未知的命令：" + obj[0]);
  });

  // 监听 debug 选项
  program.on("option:debug", function () {
    if (program.opts().debug) {
      log.verbose("开启调试模式");
      console.log("开启调试模式");
    }
  });
}
