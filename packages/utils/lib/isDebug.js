/** 
  判断是否是 debug 模式
  @returns  boolean 
*/
const isDebug = () => {
  return process.argv.includes("--debug") || process.argv.includes("-d");
};
export default isDebug;
