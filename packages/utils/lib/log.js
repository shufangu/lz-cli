/** npm log 封装 */
import log from "npmlog";
import isDebug from "./isDebug.js";

if (isDebug()) {
  log.level = "verbose";
} else {
  log.level = "info";
}
log.heading = "lz-cli";
log.addLevel("success", 2000, {
  fg: "white",
  bold: true,
  bg: "green",
  underline: true,
  color: "white",
});

/** 添加异常监听 */
export const printErrorLog = (e, type) => {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
};

export default log;