const replyButtons = document.querySelectorAll(".comment__chart--reply__btn");
const cancelCommentForm = document.querySelectorAll(".cancel__comment--form-button");

if(replyButtons){
    replyButtons.forEach(function(replyButton){
        replyButton?.addEventListener("click", function(event){
            event.preventDefault();
            this.nextElementSibling.classList.add("active");
            this.parentElement.classList.add("active");
        })
    })
}
if(cancelCommentForm){
    cancelCommentForm.forEach(function(cancelButton){
        cancelButton?.addEventListener("click", function(event){
            event.preventDefault();
            this.parentElement.parentElement.classList.remove("active");
            this.parentElement.parentElement.parentElement.classList.remove("active");
        })
    })
}