/**
 *
 * Dom Elements
 *
 **/

//Home and course details pages
const viewMoreElement = document.getElementById("toggle");
const hiddencourses = document.querySelectorAll(".hidden");

//Contact us page
const form = document.getElementById("myForm");
const successMessage = document.getElementById("successMessage");
const formLableElement = document.getElementById("form-lable");

/**
 *
 *Handel clicking on view More button to view the rest of the courses
 *
 **/
if (viewMoreElement) {
  viewMoreElement.addEventListener("click", function () {
    hiddencourses.forEach((course) => {
      course.style.display = "block";
    });
    viewMoreElement.style.display = "none";
  });
}

/**
 *
 * Handle clicking submmit button
 *
 **/
if (form) {
  function submitHandler(event) {
    event.preventDefault();
    form.style.display = "none";
    formLableElement.style.display = "none";

    ///ToDo:Sent form data to backend

    successMessage.style.display = "block";
  }

  form.addEventListener("submit", submitHandler);
}
