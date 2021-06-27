function removeField() {
    const divSchedule = document.querySelector(".schedule-item")

    if(divSchedule.nextElementSibling != null) {
        document.querySelector(".schedule-item").remove()
    }
}

