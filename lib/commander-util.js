/**
 * 判断命令下是否有用户输入的options?
 * 如果有,则返回true,
 * 如果没有,则返回false.
 * @param {object} opts 
 */
exports.hasUserOpts = function (opts) {
    if (typeof opts !== 'object') {
        throw error;
    }
    if (opts === {}) {
        // 如果对象为空,直接返回false.
        return false;
    }
    // 遍历对象,如果所有的值都未定义,则返回false
    for(var key in opts){
        var value = opts[key];
        if(value){
            return true;
        }
    }
    return false;
}
