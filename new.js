const courses = [
  {
    Level: "A1",
    Type: "1",
    Start: "01.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 7:30-9:00",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "02.10.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 17:30-20:45 INTENSYWNY",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "02.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 17:30-20:45 INTENSYWNY",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "02.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "03.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name:
      "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "04.10.2024",
    End: "11.12.2024",
    Name:
      "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "05.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "06.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 7:30-9:00",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "01.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) poniedziałki środy 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A1",
    Type: "1",
    Start: "02.09.2024",
    End: "11.12.2024",
    Name: "START!(A1) wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name:
      "W GÓRĘ poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "03.09.2024",
    End: "11.12.2024",
    Name: " W DORODZE A2 piątek 19:30-20:45",
    Days: "3",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "W DORODZE A2 SOBOTA 19:30-20:45",
    Days: "4",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "01.09.2024",
    End: "11.12.2024",
    Name: "W DORODZE A2 wtoerki czwartki 7:30-9:00",
    Days: "2",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "01.09.2024",
    End: "11.12.2024",
    Name: "W DORODZE A2 wtorki i czwartki 17:30-19:00",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "01.09.2024",
    End: "11.12.2024",
    Name: "W DORODZE A2 poniedziałki środy 7:30-9:00",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "1",
    Start: "02.09.2024",
    End: "11.12.2024",
    Name: "W DORODZE A2 poniedziałki środy 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "A2",
    Type: "3",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "NORSKPOROVE A2 wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name:
      "b1-1 poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "B1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "b1-2 poniedziałki środy 17:30-20:30 INTENSYWNY",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "B1-1",
    Type: "2",
    Start: "03.09.2024",
    End: "11.12.2024",
    Name: " B1 KONWERSACJE wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "W GÓRĘ B1-1 poniedziałki i środy 9:30-10:45",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "3",
    Start: "05.09.2024",
    End: "11.12.2024",
    Name: "nORSKPROVE B1-1 wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-1",
    Type: "2",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "B1 Konwersacje piątek 19:30-20:45",
    Days: "4",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B1-2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name:
      "b1-2 poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "B1-2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "b1-2 poniedziałki  środy 10:30-12:00 INTENSYWNY",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "B1-2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "b1-2  wtorki  czwartki  17:30-20:40 INTENSYWNY",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "intensywny",
  },
  {
    Level: "B1-2",
    Type: "1",
    Start: "07.09.2024",
    End: "11.12.2024",
    Name: "B1-2 piątek 19:30-20:45",
    Days: "3",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B2-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "B2-1 poniedziałek środa 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B2-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "B2-1 wtorek czwartek 17:30-19:00",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B2-1",
    Type: "2",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "B2-1 KONWERSACJE WTOKI I CZWARTKI 7:30-10:00",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B2-1",
    Type: "3",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "NORSKPROVE B2 poniedziałki środy 19:30-20:45",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "B2-2",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "B2-2 piątek 19:30-20:45",
    Days: "4",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "C1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: " BLISKO CELU C1-1 poniedziałki środy 7:30-9:00",
    Days: "1",
    Pora: "poranny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "C1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: " BLISKO CELU C1-1 wtorki czwartki 17:30-19:00",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "C1-1",
    Type: "1",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: " BLISKO CELU C1-1 poniedziałki środy 17:30-9:00",
    Days: "1",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
  {
    Level: "C1-2",
    Type: "3",
    Start: "04.09.2024",
    End: "11.12.2024",
    Name: "NORKSPROVE C1 wtorki czwartki 19:30-20:45",
    Days: "2",
    Pora: "wieczorny",
    Lnumber: 60,
    Price: 2190,
    Tryb: "standardowy",
  },
];

//  document.getElementById('courseDetails_name').textContent = nazwa.length > 10 ? nazwa.substring(10) : '';

// Dodaj nasłuchiwanie na zmianę dla każdego pola radio
// document.querySelectorAll('input[name="type"], input[name="level"], input[name="pora"]').forEach((input) => {
// 	input.addEventListener('change', updateCourseDetails);
// });});

function resetTypes() {
  resetCourseDetails();
}

// Funkcje resetujące inne opcje i listy kursów
function resetLevels() {
  document.getElementById("level").innerHTML = "";
  document.getElementById("additionalFields").style.display = "none";
//   document.getElementById("levelOptionsHeader").style.display = "none";
//   document.getElementById("trybOptionsHeader").style.display = "none";
//   document.getElementById("poraOptionsHeader").style.display = "none";
//   document.getElementById("courseDetails_name").textContent = "";
//   document.getElementById("courseDetails_days").textContent = "";
//   document.getElementById("courseDetails_lnumbers").textContent = "";
//   document.getElementById("courseDetails_start").textContent = "";
//   document.getElementById("courseDetails_end").textContent = "";
//   document.getElementById("courseDetails_price").textContent = "";
}

function resetTrybs() {
  document.getElementById("tryb").innerHTML = "";
  document.getElementById("additionalFields").style.display = "none";

}

function resetPora() {
  document.getElementById("poraOptionsHeader").style.display = "none";
  document.getElementById("pora").innerHTML = "";
  document.getElementById("additionalFields").style.display = "none";

}

function resetCourseList() {
  resetCourseDetails();
  document.getElementById("courseList").innerHTML = "";
  selectedValue = "";

}
const types = {
	1: "Kurs ogólny",
	2: "Konwersacje",
	3: "Przygotowanie do Norskprøve",
  };
  
  const uniqueTypes = [...new Set(courses.map((course) => course.Type))];
  
  const radioContainer = document.getElementById("radioContainer");
  
  uniqueTypes.forEach((type) => {
	if (types[type]) {
	  const label = document.createElement("label");
	  const radio = document.createElement("input");
	  radio.type = "radio";
	  radio.name = "courseType";
	  radio.value = type;
	  radio.id = "courseType_" + type;
	  radio.style.display = "none";
	  radio.addEventListener("change", handleTypeChange);
	  
	  label.textContent = types[type];
	  label.setAttribute("for", radio.id);
	  label.classList.add("typKursu", `typKursu-${type}`);
	  label.addEventListener("click", () => {
		label.click();
		radio.checked = true;
		radio.dispatchEvent(new Event("change"));
	  });
  
	  radioContainer.appendChild(radio);
	  radioContainer.appendChild(label);
	}
  });
  
  function handleTypeChange(event) {
	resetTypes();
	resetLevels();
	resetTrybs();
	resetPora();
	resetCourseList();
  
	const selectedType = event.target.value;
  

	document.getElementById("courseDetails_type").textContent = types[selectedType];
  console.log(types[selectedType])
	const levels = [
	  ...new Set(
		courses
		  .filter((course) => course.Type === selectedType)
		  .map((course) => course.Level)
	  ),
	];
  
	const levelOptions = levels
	  .map(
		(level) => `
		  <label for="level_${level}">
			  <input type="radio" id="level_${level}" name="level" value="${level}" onchange="handleLevelChange(event)">${level}
		  </label>
	  `
	  )
	  .join("");
  
	document.getElementById("level").innerHTML = levelOptions;
	document.getElementById("levelOptionsHeader").style.display = "block";
	document.getElementById("courseDetails_level").textContent = "";
	document.getElementById("courseDetails_tryb").textContent = "";
	document.getElementById("courseDetails_pora").textContent = "";

  
	// Ustawienie klas CSS dla labeli
	const labelsCourseType = Array.from(document.getElementsByClassName("typKursu"));
	labelsCourseType.forEach((label) => {
	  const radioId = label.getAttribute("for");
	  const radio = document.getElementById(radioId);
  
	  if (!radio) {
		console.warn(`Nie znaleziono elementu input z id "${radioId}"`);
		return;
	  }
  
	  if (radio.checked) {
		label.classList.add("checked");
		label.classList.remove("unchecked");
	  } else {
		label.classList.add("unchecked");
		label.classList.remove("checked");
	  }
	});
  }

function handleLevelChange(event) {
  resetTrybs();
  resetPora();
  resetCourseList();

  const level = document.querySelector('input[name="level"]:checked');
  document.getElementById("courseDetails_level").textContent = level
  ? level.value
  : "";
  document.getElementById("courseDetails_tryb").textContent = "";
  document.getElementById("courseDetails_pora").textContent = "";
  document.getElementById("courseDetails_name").textContent = "";
  document.getElementById("courseDetails_lnumbers").textContent = "";
  document.getElementById("courseDetails_start").textContent = "";
  document.getElementById("courseDetails_end").textContent = "";
  document.getElementById("courseDetails_pora").textContent = "";

  const selectedLevel = event.target.value;
  const selectedType = document.querySelector(
    'input[name="courseType"]:checked'
  ).value;
  const trybs = [
    ...new Set(
      courses
        .filter(
          (course) =>
            course.Level === selectedLevel && course.Type === selectedType
        )
        .map((course) => course.Tryb)
    ),
  ];

  const trybOptions = trybs
    .map(
      (tryb) =>
        `<label><input type="radio" name="courseTryb" value="${tryb}" onchange="handleTrybChange(event)"> ${tryb}</label>`
    )
    .join("");
  document.getElementById("tryb").innerHTML = trybOptions;
  document.getElementById("trybOptionsHeader").style.display =
    trybs.length > 0 ? "block" : "none";

  if (trybs.length === 1) {
    const singleTrybInput = document.querySelector('input[name="courseTryb"]');
    singleTrybInput.checked = true;
    handleTrybChange({ target: singleTrybInput });
  }
 
}

function handleTrybChange(event) {
  resetPora();
  resetCourseList();

  const selectedTryb = event.target.value;
  const selectedLevel = document.querySelector('input[name="level"]:checked')
    .value;
  const selectedType = document.querySelector(
    'input[name="courseType"]:checked'
  ).value;
  const tryb = document.querySelector('input[name="courseTryb"]:checked');
  document.getElementById("courseDetails_tryb").textContent = tryb
  ? tryb.value
  : "";
  document.getElementById("courseDetails_pora").textContent = "";
  document.getElementById("courseDetails_name").textContent = "";
  document.getElementById("courseDetails_lnumbers").textContent = "";
  document.getElementById("courseDetails_start").textContent = "";
  document.getElementById("courseDetails_end").textContent = "";
  document.getElementById("courseDetails_pora").textContent = "";

  const poras = [
    ...new Set(
      courses
        .filter(
          (course) =>
            course.Tryb === selectedTryb &&
            course.Level === selectedLevel &&
            course.Type === selectedType
        )
        .map((course) => course.Pora)
    ),
  ];

  const poraOptions = poras
    .map(
      (pora) =>
        `<label><input type="radio" name="coursePora" value="${pora}" onchange="handlePoraChange(event)"> ${pora}</label>`
    )
    .join("");
  document.getElementById("pora").innerHTML = poraOptions;
  document.getElementById("poraOptionsHeader").style.display =
    poras.length > 0 ? "block" : "none";

  if (poras.length === 1) {
    const singlePoraInput = document.querySelector('input[name="coursePora"]');
    singlePoraInput.checked = true;
    handlePoraChange({ target: singlePoraInput });
  }
  resetCourseDetails();
}

function handlePoraChange(event) {
  document.getElementById("listOptionsHeader").style.display = "block";
  resetCourseList();
  const selectedPora = event.target.value;
  const selectedLevel = document.querySelector('input[name="level"]:checked')
    .value;
  const selectedType = document.querySelector(
    'input[name="courseType"]:checked'
  ).value;
  const selectedTryb = document.querySelector(
    'input[name="courseTryb"]:checked'
  ).value;

  const filteredCourses = courses.filter(
    (course) =>
      course.Type === selectedType &&
      course.Level === selectedLevel &&
      course.Tryb === selectedTryb &&
      course.Pora === selectedPora
  );
  document.getElementById("courseDetails_pora").textContent = pora
  ? selectedPora
  : "";
  document.getElementById("courseDetails_name").textContent = "";
  document.getElementById("courseDetails_lnumbers").textContent = "";
  document.getElementById("courseDetails_start").textContent = "";
  document.getElementById("courseDetails_end").textContent = "";


  displayCourses(filteredCourses);
}

function displayCourses(courses) {
  resetCourseList();
  resetCourseDetails();

  const courseListContainer = document.getElementById("courseList");

  const selectElement = document.createElement("select");
  selectElement.id = "courseSelect";
  selectElement.name = "courseSelect";
  selectElement.onchange = function () {
    const selectedCourseValue = selectElement.value;
    const [courseStart, courseName] = selectedCourseValue.split("_");
    resetCourseDetails();
  };

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Wybierz kurs z listy i uzupełnij dane";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectElement.appendChild(defaultOption);

  courses.forEach((course) => {
    const optionElement = document.createElement("option");
    const optionValue = `${course.Start}${course.Name}`;
    optionElement.value = optionValue;
    optionElement.textContent = `${course.Start} - ${course.Name}`;
    selectElement.appendChild(optionElement);
  });
  courseListContainer.appendChild(selectElement);
}
// Funkcja czyszcząca zawartość opisów kursu

function resetCourseDetails() {

    // document.getElementById('courseDetails').innerHTML = '';
		// Pobierz wszystkie elementy radio
		// const type = document.querySelector('input[name="courseType"]:checked');
		// const level = document.querySelector('input[name="level"]:checked');
		// const tryb = document.querySelector('input[name="courseTryb"]:checked');
		// const pora = document.querySelector('input[name="coursePora"]:checked');
		const nazwaKursu = document.getElementById('courseSelect');
        const nazwa = nazwaKursu ? nazwaKursu.value : '';
		console.log(nazwa)



	document.getElementById('courseDetails_name').textContent = ""
	document.getElementById('courseDetails_lnumbers').textContent = ""
document.getElementById('courseDetails_start').textContent = ""
	document.getElementById('courseDetails_end').textContent = ""
document.getElementById('courseDetails_price').textContent = ""

	if (nazwa) {

		fetch('kursy.json')
		.then(response => response.json())
		.then(data => {
			// Pobierz wartość wybraną z select
			const selectedValue = nazwaKursu.value;

			// Sprawdź czy selectedValue ma co najmniej 16 znaków
			if (selectedValue.length >= 16) {
				// Pobierz pierwsze 10 znaków z selectedValue
				const startPart = selectedValue.substring(0,10);
				console.log("start part:" + startPart);

				// Pobierz od 12-tego znaku do końca selectedValue
				const namePart = selectedValue.substring(10);
				console.log("selected value:" + namePart);

				// Znajdź kurs o pasujących wartościach
				const kurs = data.find(item => item.Start == startPart && item.Name == namePart);
				console.log(kurs);

				// Jeśli kurs został znaleziony, zaktualizuj zawartość kontenera
				if (kurs) {
					document.getElementById('courseDetails_name').textContent = kurs.Name;
					document.getElementById('courseDetails_lnumbers').textContent = kurs.Lnumber;
					document.getElementById('courseDetails_start').textContent = kurs.Start;
					document.getElementById('courseDetails_end').textContent = kurs.End;
					document.getElementById('courseDetails_price').textContent = kurs.Price;
				} else {
					console.error('Błąd: Brak danych kursów pasujących do wybranej wartości.');
				}
			} else {
				console.error('Błąd: Wybrana wartość nie ma co najmniej 16 znaków.');
			}
		})
		.catch(error => {
			console.error('Błąd podczas wczytywania danych:', error);
		});
	} else {
		console.error('Błąd: Nie wybrano wartości.');

	}




// Dodanie nasłuchiwania zdarzeń dla elementów radio


}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", resetCourseDetails);
});

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const requiredFields = document.querySelectorAll("[required='true']");
  let formValid = true;

  requiredFields.forEach(function (field) {
    if (field.type === "checkbox") {
      if (!field.checked) {
        const label = document.querySelector(`label[for='${field.id}']`);
        label.classList.add("red");
        formValid = false;
      } else {
        const label = document.querySelector(`label[for='${field.id}']`);
        label.classList.remove("red");
      }
    } else {
      if (field.value.trim() === "") {
        const label = document.querySelector(`label[for='${field.id}']`);
        label.classList.add("red");
        formValid = false;
      } else {
        const label = document.querySelector(`label[for='${field.id}']`);
        label.classList.remove("red");
      }
    }
  });

  if (!formValid) {
    const message = document.getElementById("formAlert");
    message.innerHTML = "Uzupełnij poprawnie formularz";
    return;
  }

  console.log(
    "Formularz został poprawnie wypełniony. Możesz kontynuować proces wysyłania."
  );

  const courseSelection = document.getElementById("courseSelect").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const faktura = document.querySelector('input[name="invoice"]').checked;
  const daneFaktury = document.getElementById("invoiceData").value;
  const nip = document.getElementById("NIP").value;
  const adresFirmy = document.getElementById("adresFirmy").value;
  const student = document.getElementById("student").checked;
  const uwagi = document.getElementById("remarks").value;
  const zgodaMarketingowa = document.getElementById("marketingConsent").checked;
  const zgodaSprzedazowa = document.getElementById("salesConsent").checked;
  const zgodaUmowna = document.getElementById("contractConsent").checked;

  // Prepare data to be sent to the API
  const data = {
    kursant: {
      course: courseSelection,
      firstName: firstName,
      lastName: lastName,
      schoolid: 3,
      type: "guest",
      email: email,
      phone: phone,
      faktura: faktura,
      nazwaFirmy: daneFaktury,
      adresFirmy: adresFirmy,
      nip: nip,
      adresFirmy: adresFirmy,
      student: student,
      uwagi: uwagi,
      zgodaMarketingowa: zgodaMarketingowa,
      zgodaSprzedazowa: zgodaSprzedazowa,
      zgodaUmowna: zgodaUmowna,
    },
  };

  console.log(data);
});

var invoiceYes = document.getElementById("invoiceYes");
var invoiceData = document.getElementById("invoiceData");
var NIP = document.getElementById("NIP");
var adresFirmy = document.getElementById("adresFirmy");

invoiceYes.addEventListener("change", function () {
  if (this.checked) {
    invoiceData.required = true;
    NIP.required = true;
    adresFirmy.required = true;
    var wymagane = document.getElementsByClassName("invce_red");
    for (var i = 0; i < wymagane.length; i++) {
      wymagane[i].style.display = "inline";
    }
  } else {
    invoiceData.required = false;
    NIP.required = false;
    adresFirmy.required = false;
    var wymagane = document.getElementsByClassName("invce_red");
    for (var i = 0; i < wymagane.length; i++) {
      wymagane[i].style.display = "none";
    }
  }
});

// function updateNazwaFromRadios() {
//     // Pobieramy wszystkie radiobuttony
//     const radioButtons = document.querySelectorAll('input[type="radio"]');

//     // Dodajemy nasłuchiwanie na zmiany w radiobuttonach
//     radioButtons.forEach(radio => {
//         radio.addEventListener('input', () => {
// 			document.getElementById('courseDetails_name').textContent = ""
// 			document.getElementById('courseDetails_lnumbers').textContent = ""
// 			document.getElementById('courseDetails_start').textContent = ""
// 			document.getElementById('courseDetails_end').textContent = ""
// 			document.getElementById('courseDetails_price').textContent = ""
//         });
//     })};
// 	updateNazwaFromRadios()

let isCourseSelected = false;

// Element listy kursów
const courseList = document.getElementById('courseList');

// Elementy do wyczyszczenia
const courseDetailsSpans = {
    name: document.getElementById('courseDetails_name'),
    days: document.getElementById('courseDetails_days'),
    lnumbers: document.getElementById('courseDetails_lnumbers'),
    start: document.getElementById('courseDetails_start'),
    end: document.getElementById('courseDetails_end'),
    price: document.getElementById('courseDetails_price')
};

// Nasłuchuj zmian na liście kursów
courseList.addEventListener('change', () => {
    if (courseList.value) {
        isCourseSelected = true;
    } else {
        isCourseSelected = false;
    }
});

// Funkcja resetująca zawartość spanów
function resetCourseDetails() {
    if (isCourseSelected) {
        for (let key in courseDetailsSpans) {
            courseDetailsSpans[key].innerHTML = "";
        }
    }
}

// Dodaj nasłuchiwanie zdarzeń do wszystkich radio buttonów
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', resetCourseDetails);
});