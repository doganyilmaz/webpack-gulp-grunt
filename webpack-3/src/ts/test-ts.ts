 
   
  export class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
      
    }
    init = (): void => {
      console.log("sinan test 1 > " + this.name);
    }

    YasHesapla = (yas : number) : number => {
      return yas*21;
    }
  } 
   
  const user: UserAccount = new UserAccount("Murphyps", 1);

  console.log(user);

  console.log(user.YasHesapla(15));