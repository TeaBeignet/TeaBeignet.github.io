function renderNote(title, desc) {
    var noteHTML = `
        <div style = "display: flex;">
            <input type = "checkbox">
            <p class = "note-title">${title}</p>
        </div>
        <p class = "note-desc">${desc}</p>
        `
    var noteElement = document.createElement("div");
    noteElement.className = "sticky-note";
    noteElement.innerHTML = noteHTML;
    
    document.getElementById("note-grid").appendChild(noteElement);
}

function loadNotes() {
    var notesData = JSON.parse(localStorage.getItem("notes-data")) || {notes: []};
    for (var i = 0; i < notesData['notes'].length; i++) {
        renderNote(notesData['notes'][i]['title'], notesData['notes'][i]['desc']);
    }
}

function addNote() {
    const title = document.getElementById("add-note-title").value;
    const desc = document.getElementById("add-note-desc").value;
    renderNote(title, desc);

    var notesData = JSON.parse(localStorage.getItem("notes-data")) || {notes: []};
    notesData['notes'].push({
        title: title,
        desc: desc
    });
    localStorage.setItem("notes-data", JSON.stringify(notesData));
    document.getElementById("add-note-title").value = '';
    document.getElementById("add-note-desc").value = '';
}


loadNotes();
document.getElementById("add-note-button").addEventListener("click", addNote);