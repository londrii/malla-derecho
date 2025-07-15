const cursos = [
  // 1° Semestre
  { nombre: "Fundamentos histórico-sociales del derecho privado", semestre: 1, estado: "aprobado", desbloquea: ["Persona y acto jurídico"] },
  { nombre: "Instituciones políticas y derechos humanos", semestre: 1, estado: "aprobado", desbloquea: ["Derecho constitucional orgánico"] },
  { nombre: "Taller de razonamiento jurídico", semestre: 1, estado: "aprobado", desbloquea: ["Introducción al Derecho I", "Bases generales del derecho procesal"] },
  { nombre: "Taller de investigación y escritura legal", semestre: 1, estado: "aprobado", desbloquea: ["Economía y Derecho"] },
  { nombre: "Comunicación oral", semestre: 1, estado: "aprobado", desbloquea: ["Taller de destrezas de litigación oral"] },

  // 2° Semestre
  { nombre: "Persona y acto jurídico", semestre: 2, estado: "en-curso", prerrequisitos: ["Fundamentos histórico-sociales del derecho privado"], desbloquea: ["Derechos reales e inmobiliarios"] },
  { nombre: "Derecho constitucional orgánico", semestre: 2, estado: "en-curso", prerrequisitos: ["Instituciones políticas y derechos humanos"], desbloquea: ["Derechos fundamentales"] },
  { nombre: "Introducción al Derecho I", semestre: 2, estado: "en-curso", prerrequisitos: ["Taller de razonamiento jurídico"], desbloquea: ["Introducción al Derecho II"] },
  { nombre: "Bases generales del derecho procesal", semestre: 2, estado: "en-curso", prerrequisitos: ["Taller de razonamiento jurídico"] },
  { nombre: "CFG I", semestre: 2, estado: "en-curso", desbloquea: ["CFG II"] },
  { nombre: "Inglés II", semestre: 2, estado: "en-curso", desbloquea: ["Inglés III"] },

  // 3° Semestre
  { nombre: "Economía y Derecho", semestre: 3, estado: "pendiente", prerrequisitos: ["Taller de investigación y escritura legal"] },
  { nombre: "Inglés III", semestre: 3, estado: "pendiente", prerrequisitos: ["Inglés II"] },
  { nombre: "Derechos reales e inmobiliarios", semestre: 3, estado: "pendiente", prerrequisitos: ["Persona y acto jurídico"] },
  { nombre: "Derechos fundamentales", semestre: 3, estado: "pendiente", prerrequisitos: ["Derecho constitucional orgánico"] },
  { nombre: "Introducción al Derecho II", semestre: 3, estado: "pendiente", prerrequisitos: ["Introducción al Derecho I"] },
  { nombre: "CFG II", semestre: 3, estado: "pendiente", prerrequisitos: ["CFG I"], desbloquea: ["CFG III"] },

  // 4° Semestre
  { nombre: "Taller de destrezas de litigación oral", semestre: 4, estado: "pendiente", prerrequisitos: ["Comunicación oral"] },
  { nombre: "Derecho de obligaciones", semestre: 4, estado: "pendiente" },
  { nombre: "Derecho penal parte general I", semestre: 4, estado: "pendiente" },
  { nombre: "Derecho regulatorio", semestre: 4, estado: "pendiente" },
  { nombre: "CFG III", semestre: 4, estado: "pendiente", prerrequisitos: ["CFG II"] },
];

const container = document.getElementById("malla");
const filter = document.getElementById("semesterFilter");

function renderCursos(filtro = "all") {
  container.innerHTML = "";
  cursos.forEach((curso) => {
    if (filtro !== "all" && parseInt(filtro) !== curso.semestre) return;

    const div = document.createElement("div");
    div.classList.add("course");
    div.dataset.status = curso.estado;

    const title = document.createElement("h3");
    title.textContent = curso.nombre;

    const detail = document.createElement("div");
    detail.classList.add("details");

    if (curso.prerrequisitos || curso.desbloquea) {
      let texto = "";
      if (curso.prerrequisitos)
        texto += `Prerrequisitos: ${curso.prerrequisitos.join(", ")}<br>`;
      if (curso.desbloquea)
        texto += `Desbloquea: ${curso.desbloquea.join(", ")}`;
      detail.innerHTML = texto;
    }

    div.appendChild(title);
    div.appendChild(detail);

    div.addEventListener("click", () => {
      div.classList.toggle("show");
    });

    container.appendChild(div);
  });
}

filter.addEventListener("change", (e) => {
  renderCursos(e.target.value);
});

renderCursos();
