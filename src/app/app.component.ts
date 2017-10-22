import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToDoService } from './model/data.service'

import { ToDoModel, ToDoItem } from './model/data.model'
@Component({
  selector: 'td-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'td'
  toDoForm: FormGroup
  constructor(private toDoService: ToDoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      toDo: this.formBuilder.control('', [Validators.required])
    })
  }
  getUser(): string { return this.toDoService.getUser() }
  getToDoItems(): ToDoItem[] { return this.toDoService.getToDoItems() }
  getDoneItems(): ToDoItem[] { return this.toDoService.getDoneItems() }
  removeItem(item: ToDoItem) { this.toDoService.removeItem(item) }
  doItem(item: ToDoItem) { this.toDoService.doItem(item) }
  addItem(todo: string) { this.toDoService.addItem(todo); this.toDoForm.reset() }
}
