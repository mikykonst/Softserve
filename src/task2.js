let isEnvelopeFeet = function (envelope1, envelope2) {
    let result = '';
    if (validate(envelope1, envelope2)) {
        if (firstFeetSecond(envelope1,envelope2)) {
            result = '1 поместиться в 2';

        } else if (secondFeetFirst(envelope1, envelope2)) {
            result = '2 поместиться в 1';

        } else {
            result = '0';
        }
    }
    return result;
};

let firstFeetSecond = function (env1, env2) {
    return env1.w < env2.w && env1.h < env2.h;
};
let secondFeetFirst = function (env1, env2) {
    return env1.w > env2.w && env1.h > env2.h;
};

let validate = function (env1, env2) {
  return validateNumbers(env1.w) && validateNumbers(env1.h)
      && validateNumbers(env2.w) && validateNumbers(env2.h);
};