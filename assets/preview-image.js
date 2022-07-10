const btnDel = document.querySelector('[data-preview="del"]')
const output = document.querySelector('[data-preview="new"]')
const btnEdit = document.querySelector('[data-preview="edit"]');
const imgDefault = document.querySelector('[data-preview="img-default"]')
const inputFile = document.querySelector('[data-preview="file"]')

const loaderFile = function (e) {
    let reader = new FileReader()

    reader.onload = function () {
        output.style.display = "block"
        btnDel.style.display = "block"
        imgDefault.style.display = "none"
        output.style.backgroundImage = "url(" + reader.result + ")"
    };
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }
};

btnEdit.addEventListener("click", function () {
    inputFile.click()
});

btnDel.addEventListener("click", function () {
    btnDel.style.display = "none"
    output.style.backgroundImage = "url('')"
    imgDefault.style.display = "block"
    inputFile.value = ""
});
