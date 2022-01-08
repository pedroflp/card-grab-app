export const generateUuid = () => {
    const id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return id() + id() + '-' + id() + '-' + id() + '-' + id() + '-' + id() + id() + id();
}