interface Profile {
  name: string;
  password: string;
}

interface Auth {
  Login(name: string, password: string): boolean;
}

class LoginUser implements Profile, Auth {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  Login(name: string, password: string): boolean {
    return name !== "" && password !== "" && password === "admin123";
  }
}

export default LoginUser;
