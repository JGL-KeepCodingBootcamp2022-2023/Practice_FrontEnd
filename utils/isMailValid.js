export function isMailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    return mailRegExp.test(email) 
}