import { Injectable } from '@angular/core';
import { ToDoModel, ToDoItem } from './data.model'

@Injectable()
export class ToDoService {
  model = new ToDoModel()

  getUser(): string { return this.model.user }
  getToDoItems(): ToDoItem[] { return this.model.items.filter(i => !i.done) }
  getDoneItems(): ToDoItem[] { return this.model.items.filter(i => i.done) }
  removeItem(item: ToDoItem) { this.model.removeItem(item) }
  addItem(action: string) { this.model.items.push(new ToDoItem(action)) }
  doItem(item: ToDoItem) {
    let foundItem = this.model.items.find((x) => x.action === item.action)
    foundItem.doItem()
  }
  constructor() { }
}
