
class cls extends Array {
  constructor(...args) {
    super(...args);
  }
  
  add(string) {
    if (!this.includes(string)) {
      this.push(string);
    }
    return this;
  }

  remove(string) {
    if (this.includes(string)) {
      this.length = 0;
      this.push(...this.filter(i => i !== string));
    }
    return this;
  }
}