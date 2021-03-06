export function isEmailValid(email: string) {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(email)) {
      return false;
    }
    return true;
}

export function isNameValid(name: string) {
    if (!name || name.length < 3) {
      return false;
    }
    return true;
}