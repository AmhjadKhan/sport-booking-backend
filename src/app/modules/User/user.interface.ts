// name: 
// email: 
// password: 
// phone: 
// role: 
// address:

export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: 'admin' | 'user';
    address: string;
  };