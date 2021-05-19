export const handleEmail = (txt: string) => {

  const regEx = /^([A-Z|a-z|0-9](\.|-){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9](-){0,1})+((\.){0,1}[A-Z|a-z|0-9])+\.[a-z]{2,3}$/g;

    if (txt.match(regEx)) {
      return true;
    }
    else {
      return false;
    }
  }