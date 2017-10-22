export class ToDoModel {
  public user: string
  public items: ToDoItem[]
  constructor() {
    this.user = "Adam"
    this.items = [
      new ToDoItem("Buy Flowers"),
      new ToDoItem("Get Shoes"),
      new ToDoItem("Collect Tickets", true),
      new ToDoItem("Call Joe")
    ]
  }
  removeItem(item: ToDoItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}

export class ToDoItem {
  constructor(public action: string, public done: boolean = false) { }
  doItem() { this.done = true }
}
