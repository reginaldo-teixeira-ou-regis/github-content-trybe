export default class Cpf {
  private value: string;
  private static regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

  constructor(value: string) {
    if (!Cpf.regex.test(value)) {
      throw new Error('CPF_INVALID');
    }

    this.value = value;
  }
}