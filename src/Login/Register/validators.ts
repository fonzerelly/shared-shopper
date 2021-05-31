export const handleEmail = (txt: string) => {

  //const regEx = /^([A-Z|a-z|0-9](\.|-){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9](-){0,1})+((\.){0,1}[A-Z|a-z|0-9])+\.[a-z]{2,3}$/g;

  const userNamePart = "^([A-Z|a-z|0-9](\\.|-){0,1})+"
  const userNameEnd = "[A-Z|a-z|0-9]"
  const at = "@"
  const domain = "([A-Z|a-z|0-9](-){0,1})+((\\.){0,1}[A-Z|a-z|0-9])+"
  const topLevelDomain = "\\.[a-z]{2,3}$"

  const regEx = new RegExp(userNamePart + userNameEnd + at + domain + topLevelDomain, "g")

  if (txt.match(regEx)) {
    return true;
  }
  else {
    return false;
  }
}