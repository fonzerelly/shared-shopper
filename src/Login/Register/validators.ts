export const handleEmail = (txt: string) => {

    if (txt.match(/[a-z]+[\\.|-][a-z]+@\w{2,}\.[a-z]{2,3}/g)) {
      return true;
    }
    else {
      return false;
    }
  }