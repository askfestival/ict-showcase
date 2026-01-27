function loadQuiz(questions) {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";

        const p = document.createElement("p");
        p.innerText = (i + 1) + ". " + q.q;
        div.appendChild(p);

        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option";
            btn.innerText = opt;

            if (idx === q.answer) btn.dataset.correct = "true";

            btn.onclick = () => {
                if (div.classList.contains("answered")) return;
                div.classList.add("answered");

                div.querySelectorAll(".option").forEach(b => {
                    if (b.dataset.correct) b.classList.add("correct");
                    else b.classList.add("wrong");
                });

                if (!btn.dataset.correct) btn.classList.add("selected");
            };

            div.appendChild(btn);
        });

        quiz.appendChild(div);
    });
}
