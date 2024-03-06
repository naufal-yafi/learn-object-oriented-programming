/*
  Getter setter ini bisa digunakan untuk memvalidasi setiap properti yang akan diubah.

  Seperti contoh dibawah property name tidak akan berubah ketika menerima parameter string kosong.
*/

class GetterSetter {
  _name?: string;

  get name(): string {
    if (this._name) {
      return this._name;
    } else {
      return "Empty";
    }
  }

  set name(newName: string) {
    if (newName !== "") {
      this._name = newName;
    }
  }
}

export default GetterSetter;
