const texts = {
    en: {
        title: "DAILY TIMEBOXING PLANNER",
        topPriorities: "TOP PRIORITIES:",
        brainDump: "BRAIN DUMP",
        summary: "SUMMARY",
        dateLabel: "DATE :",
        timeColumn: "Time",
        taskColumn: "Task",
        doneColumn: "Done",
        print: "Print"
    },
    kh: {
        title: "កំណត់ហេតុការងារ",
        topPriorities: "ចំណុចអាទិភាពកំពុងតែសំខាន់:",
        brainDump: "ការបោះបង់ខួរក្បាល",
        summary: "សង្ខេប",
        dateLabel: "កាលបរិច្ឆេទ :",
        timeColumn: "ម៉ោង",
        taskColumn: "ការងារ",
        doneColumn: "បានធ្វើ",
        print: "បោះពុម្ព"
    }
};

function switchLanguage() {
    const lang = document.getElementById("language-select").value;
    
    document.getElementById("title").innerText = texts[lang].title;
    document.getElementById("top-priorities-title").innerText = texts[lang].topPriorities;
    document.getElementById("brain-dump-title").innerText = texts[lang].brainDump;
    document.getElementById("summary-title").innerText = texts[lang].summary;
    document.getElementById("date-label").innerText = texts[lang].dateLabel;
    document.getElementById("time-column").innerText = texts[lang].timeColumn;
    document.getElementById("task-column").innerText = texts[lang].taskColumn;
    document.getElementById("done-column").innerText = texts[lang].doneColumn;
    document.querySelector(".print-btn").innerText = texts[lang].print;

    // Update placeholders for tasks
    for (let i = 7; i <= 23; i++) {
        document.getElementById(`task-${i}`).placeholder = lang === 'en' ? "Enter task" : "បញ្ចូលការងារ";
    }
}

// Handling task completion
document.querySelectorAll('.task-done').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskRow = this.closest('tr');
        const taskDescription = taskRow.querySelector('input[type="text"]').value;
        const summaryList = document.getElementById('summary-list');

        if (this.checked) {
            taskRow.style.textDecoration = 'line-through';
            summaryList.innerHTML += `<li class="completed-task">${taskDescription}</li>`;
        } else {
            taskRow.style.textDecoration = 'none';
            summaryList.innerHTML = summaryList.innerHTML.replace(`<li class="completed-task">${taskDescription}</li>`, '');
        }
    });
});
