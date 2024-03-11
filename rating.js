// rating fill Js
const ratingListAll = document.querySelectorAll(".comment__details__ratting");
const commentLeaveButton = document.getElementById("leave__comment--button");
const leaveCommentBox = document.querySelector(".leave__comment--box__button");
const leaveCommentAlert = document.getElementById(
  "leave__comment--button-alert"
);

leaveCommentAlert?.addEventListener("click", function () {
  alert("You must select at least one star!");
});

if (ratingListAll.length > 0) {
  ratingListAll.forEach((ratingList) => {
    let firstRating = ratingList.querySelector(".one_star");
    let secondRating = ratingList.querySelector(".two_star");
    let thirdRating = ratingList.querySelector(".three_star");
    let fourRating = ratingList.querySelector(".four_star");
    let fiveRating = ratingList.querySelector(".five_star");

    // First rating
    firstRating?.addEventListener("mouseover", () => {
      if (firstRating) {
        firstRating.classList.add("active");
      }

      if (secondRating) {
        if (secondRating.classList.contains("active")) {
          secondRating.classList.remove("active");
        }
      }

      if (thirdRating) {
        if (thirdRating.classList.contains("active")) {
          thirdRating.classList.remove("active");
        }
      }

      if (fourRating) {
        if (fourRating.classList.contains("active")) {
          fourRating.classList.remove("active");
        }
      }

      if (fiveRating) {
        if (fiveRating.classList.contains("active")) {
          fiveRating.classList.remove("active");
        }
      }
    });

    // second rating
    secondRating?.addEventListener("mouseover", () => {
      if (firstRating) {
        firstRating.classList.add("active");
      }
      if (secondRating) {
        secondRating.classList.add("active");
      }

      if (thirdRating) {
        if (thirdRating.classList.contains("active")) {
          thirdRating.classList.remove("active");
        }
      }

      if (fourRating) {
        if (fourRating.classList.contains("active")) {
          fourRating.classList.remove("active");
        }
      }

      if (fiveRating) {
        if (fiveRating.classList.contains("active")) {
          fiveRating.classList.remove("active");
        }
      }
    });

    // third rating
    thirdRating?.addEventListener("mouseover", () => {
      if (firstRating) {
        firstRating.classList.add("active");
      }
      if (secondRating) {
        secondRating.classList.add("active");
      }
      if (thirdRating) {
        thirdRating.classList.add("active");
      }

      if (fourRating) {
        if (fourRating.classList.contains("active")) {
          fourRating.classList.remove("active");
        }
      }

      if (fiveRating) {
        if (fiveRating.classList.contains("active")) {
          fiveRating.classList.remove("active");
        }
      }
    });

    // four rating
    fourRating?.addEventListener("mouseover", () => {
      if (firstRating) {
        firstRating.classList.add("active");
      }
      if (secondRating) {
        secondRating.classList.add("active");
      }
      if (thirdRating) {
        thirdRating.classList.add("active");
      }
      if (fourRating) {
        fourRating.classList.add("active");
      }
      if (fiveRating) {
        if (fiveRating.classList.contains("active")) {
          fiveRating.classList.remove("active");
        }
      }
    });

    // five rating
    fiveRating?.addEventListener("mouseover", () => {
      if (firstRating) {
        firstRating.classList.add("active");
      }
      if (secondRating) {
        secondRating.classList.add("active");
      }
      if (thirdRating) {
        thirdRating.classList.add("active");
      }
      if (fourRating) {
        fourRating.classList.add("active");
      }
      if (fiveRating) {
        fiveRating.classList.add("active");
      }
    });

    // Click method
    firstRating?.addEventListener("click", () => {
      ratingList.classList.add("first_one");
      if (
        ratingList.classList.contains("first_two") ||
        ratingList.classList.contains("first_three") ||
        ratingList.classList.contains("first_four") ||
        ratingList.classList.contains("first_five")
      ) {
        ratingList.classList.remove(
          "first_two",
          "first_three",
          "first_four",
          "first_five"
        );
      }
      if (commentLeaveButton) {
        if (commentLeaveButton.hasAttribute("disabled")) {
          commentLeaveButton.disabled = false;
        }
      }

      if (leaveCommentBox) {
        if (leaveCommentBox.classList.contains("rating--active-none")) {
          leaveCommentBox.classList.remove("rating--active-none");
        }
      }
    });

    // second rating
    secondRating?.addEventListener("click", () => {
      ratingList.classList.add("first_two");
      if (
        ratingList.classList.contains("first_one") ||
        ratingList.classList.contains("first_three") ||
        ratingList.classList.contains("first_four") ||
        ratingList.classList.contains("first_five")
      ) {
        ratingList.classList.remove(
          "first_one",
          "first_three",
          "first_four",
          "first_five"
        );
      }
      if (commentLeaveButton) {
        if (commentLeaveButton.hasAttribute("disabled")) {
          commentLeaveButton.disabled = false;
        }
      }
      if (leaveCommentBox) {
        if (leaveCommentBox.classList.contains("rating--active-none")) {
          leaveCommentBox.classList.remove("rating--active-none");
        }
      }
    });

    // third rating
    thirdRating?.addEventListener("click", () => {
      ratingList.classList.add("first_three");
      if (
        ratingList.classList.contains("first_one") ||
        ratingList.classList.contains("first_two") ||
        ratingList.classList.contains("first_four") ||
        ratingList.classList.contains("first_five")
      ) {
        ratingList.classList.remove(
          "first_one",
          "first_two",
          "first_four",
          "first_five"
        );
      }
      if (commentLeaveButton) {
        if (commentLeaveButton.hasAttribute("disabled")) {
          commentLeaveButton.disabled = false;
        }
      }
      if (leaveCommentBox) {
        if (leaveCommentBox.classList.contains("rating--active-none")) {
          leaveCommentBox.classList.remove("rating--active-none");
        }
      }
    });

    // four rating
    fourRating?.addEventListener("click", () => {
      ratingList.classList.add("first_four");
      if (
        ratingList.classList.contains("first_one") ||
        ratingList.classList.contains("first_two") ||
        ratingList.classList.contains("first_three") ||
        ratingList.classList.contains("first_five")
      ) {
        ratingList.classList.remove(
          "first_one",
          "first_two",
          "first_three",
          "first_five"
        );
      }

      if (commentLeaveButton) {
        if (commentLeaveButton.hasAttribute("disabled")) {
          commentLeaveButton.disabled = false;
        }
      }
      if (leaveCommentBox) {
        if (leaveCommentBox.classList.contains("rating--active-none")) {
          leaveCommentBox.classList.remove("rating--active-none");
        }
      }
    });
    // five rating
    fiveRating?.addEventListener("click", () => {
      ratingList.classList.add("first_five");
      if (
        ratingList.classList.contains("first_one") ||
        ratingList.classList.contains("first_two") ||
        ratingList.classList.contains("first_three") ||
        ratingList.classList.contains("first_four")
      ) {
        ratingList.classList.remove(
          "first_one",
          "first_two",
          "first_three",
          "first_four"
        );
      }

      if (commentLeaveButton) {
        if (commentLeaveButton.hasAttribute("disabled")) {
          commentLeaveButton.disabled = false;
        }
      }
      if (leaveCommentBox) {
        if (leaveCommentBox.classList.contains("rating--active-none")) {
          leaveCommentBox.classList.remove("rating--active-none");
        }
      }
    });

    ratingList?.addEventListener("mouseleave", () => {
      if (firstRating) {
        firstRating.classList.remove("active");
      }
      if (secondRating) {
        secondRating.classList.remove("active");
      }
      if (thirdRating) {
        thirdRating.classList.remove("active");
      }
      if (fourRating) {
        fourRating.classList.remove("active");
      }
      if (fiveRating) {
        fiveRating.classList.remove("active");
      }
    });
  });
}
