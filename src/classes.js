class CLS {
  constructor() {
    this.list = this.checkData(arguments);
  }

  checkData(arg) {
    let list;
    if (arg.length === 1) {
      arg = arg[0];
      if (!arg) return list = []
      if (typeof arg === 'string') {
        if (arg.includes(' ')) {
          list = arg.split(' ');
        } else if (arg.includes(',')) {
          list = arg.split(',');
        } else {
          list = [arg]
        }
      } 
  
      if (typeof arg === 'object') list = arg;

    } else {
      list = Array.from(arg);
    }
    const filtered = list.filter(Boolean);
    return filtered;
  }

  add() {
    const arr = Array.from(arguments);
    for (let i of arr) {
      if (!this.list.includes(i)) this.list.push(i);
    }
    this.list = this.list.filter(Boolean);
    return this;
  }

  remove() {
    const arr = Array.from(arguments);
    this.list = this.list.filter(item => !arr.includes(item));
    return this;
  }

  prt() {
    return this.list.join(' ');
  }
}

class STL extends Object {
  constructor(args) {
    super();
    for (let key in args) {
      this[key] = args[key];
    }
  }

  add(name, value) {
    this[name] = value;
    return this;
  }

  remove(name) {  
    delete this[name];
    return this;
  }
}

export { CLS, STL };