class Storage {
  #items;

  constructor(items = []){
    this.#items = items;
}

getItems(){
  return this.#items;
}
addItem(newItem){
  return this.#items.push(newItem);
}
removeItem(itemToRemove){
  // return this.#items = this.#items.filter(item => item !== itemToRemove); - first option used - Filter
    const index = this.#items.indexOf(itemToRemove);
    if (index === -1) return;
     this.#items = [...this.#items.slice(0, index),...this.#items.slice(index + 1)];
}

}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
