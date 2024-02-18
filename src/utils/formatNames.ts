export const useGetInitialsName = () => {
  const letterName = (name: string) => {
    if (!name) {
      return "";
    } else {
      const nomeComposto = `${name}`;
      const arrayName = nomeComposto.split(" ");
      const firstName = arrayName[0].split("")[0];
      const lastName = arrayName[arrayName.length - 1].split("")[0];
      const lettersFL = `${firstName ? firstName : ""}${
        lastName ? lastName : ""
      }`;

      return lettersFL.toString();
    }
  };

  const initialName = (name: string) => {
    if (!name) {
      return "";
    } else {
      const nomeComposto = `${name}`;
      const arrayName = nomeComposto.split(" ");
      const firstName = arrayName[0];

      return firstName.toString();
    }
  };

  const documentName = (name: string) => {
    if (!name) {
      return "CPF"; // Vai retornar CPF por padrão
    }
    
    switch (name) {
      case 'BR':
        return 'CPF'
        
      case 'AO':
        return 'NIF(B.I)'
    
      default:
        break;
    }
    
  }
  
  return {
    letterName,
    initialName,
  };
};

