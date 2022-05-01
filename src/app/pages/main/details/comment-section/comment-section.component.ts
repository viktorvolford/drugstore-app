import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/app/shared/models/Comment';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() current_product_id? : string;

  comments: Array<Comment> = [];
  
  commentsForm = this.createForm({
    username: '',
    product_id: this.current_product_id as string,
    comment: '',
    date: new Date().toString()
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createForm(model: Comment) {
    let formGroup = this.formBuilder.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date());

        // SPREAD OPERATOR
        this.comments.push({ ...this.commentsForm.value });
      }
    }else{
      window.alert('Helytelenül töltötted ki a mezőket!');
    }
  }

}
