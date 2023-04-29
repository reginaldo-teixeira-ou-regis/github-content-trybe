export default class Cpf {
  private value: string; 

  constructor(value: string) {
    const cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

    if (!cpfRegex.test(value)) {
      throw new Error('CPF_INVALID');
    }

    this.value = value;
  }
}