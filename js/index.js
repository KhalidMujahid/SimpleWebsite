const input = document.querySelector("input[type=text]");
const textarea = document.querySelector("textarea");
const button = document.querySelector("input[type=button]");


button.addEventListener("click", (event) => {
	event.preventDefault();

	if(input.value == "" || textarea.value == ""){
		alert("You must field up the form")
	} else {
		alert(`Thanks Dear ${input.value} your message has been recived`);
		input.value = "";
		textarea.value = "";
		window.location.href = "./index.html";
	}
});