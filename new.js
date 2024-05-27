const courses = [
	{
		"Level": "A1",
		"Type": "1",
		"Start": "01.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "02.10.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 17:30-20:45 INTENSYWNY",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "02.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 17:30-20:45 INTENSYWNY",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "02.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "03.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "04.10.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "05.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "06.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "01.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "1",
		"Start": "02.09.2024",
		"End": "11.12.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "W GÓRĘ poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "03.09.2024",
		"End": "11.12.2024",
		"Name": " W DORODZE A2 piątek 19:30-20:45",
		"Days": "3",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "W DORODZE A2 SOBOTA 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "01.09.2024",
		"End": "11.12.2024",
		"Name": "W DORODZE A2 wtoerki czwartki 7:30-9:00",
		"Days": "2",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "01.09.2024",
		"End": "11.12.2024",
		"Name": "W DORODZE A2 wtorki i czwartki 17:30-19:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "01.09.2024",
		"End": "11.12.2024",
		"Name": "W DORODZE A2 poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "1",
		"Start": "02.09.2024",
		"End": "11.12.2024",
		"Name": "W DORODZE A2 poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "3",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "NORSKPOROVE A2 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "b1-1 poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "b1-2 poniedziałki środy 17:30-20:30 INTENSYWNY",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-1",
		"Type": "2",
		"Start": "03.09.2024",
		"End": "11.12.2024",
		"Name": " B1 KONWERSACJE wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "W GÓRĘ B1-1 poniedziałki i środy 9:30-10:45",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "3",
		"Start": "05.09.2024",
		"End": "11.12.2024",
		"Name": "nORSKPROVE B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "2",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "B1 Konwersacje piątek 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "b1-2 poniedziałki wtorki środy czwartki piątki 10:30-9:00 SUPERINTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "b1-2 poniedziałki  środy 10:30-12:00 INTENSYWNY",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "b1-2  wtorki  czwartki  17:30-20:40 INTENSYWNY",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-2",
		"Type": "1",
		"Start": "07.09.2024",
		"End": "11.12.2024",
		"Name": "B1-2 piątek 19:30-20:45",
		"Days": "3",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "B2-1 poniedziałek środa 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "B2-1 wtorek czwartek 17:30-19:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "2",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "B2-1 KONWERSACJE WTOKI I CZWARTKI 7:30-10:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "3",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "NORSKPROVE B2 poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-2",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "B2-2 piątek 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": " BLISKO CELU C1-1 poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": " BLISKO CELU C1-1 wtorki czwartki 17:30-19:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "1",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": " BLISKO CELU C1-1 poniedziałki środy 17:30-9:00",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-2",
		"Type": "3",
		"Start": "04.09.2024",
		"End": "11.12.2024",
		"Name": "NORKSPROVE C1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	}
];

function resetCourseDetails() {
    document.getElementById('courseDetails').innerHTML = '';
}

// Funkcje resetujące inne opcje i listy kursów
function resetLevels() {
    document.getElementById('level').innerHTML = '';
    document.getElementById('additionalFields').style.display = 'none';
    resetCourseDetails();
}

function resetTrybs() {
    document.getElementById('tryb').innerHTML = '';
    document.getElementById('additionalFields').style.display = 'none';
    resetCourseDetails();
}

function resetPora() {
    document.getElementById('pora').innerHTML = '';
    document.getElementById('additionalFields').style.display = 'none';
    resetCourseDetails();
}

function resetCourseList() {
    document.getElementById('courseList').innerHTML = '';
    resetCourseDetails();
}

const types = {
	1: "Kurs ogólny",
	2: "Konwersacje",
	3: "Przygotowanie do Norskprøve"
  };

  const uniqueTypes = [...new Set(courses.map(course => course.Type))];

  const radioContainer = document.getElementById('radioContainer');

  uniqueTypes.forEach(type => {
	if (types[type]) {
	  const label = document.createElement('label');
	  label.textContent = types[type];
	  const radio = document.createElement('input');
	  radio.type = 'radio';
	  radio.name = 'courseType';
	  radio.value = type;
	  radio.addEventListener('change', handleTypeChange);
	  radioContainer.appendChild(label);
	  radioContainer.appendChild(radio);
	  radioContainer.appendChild(document.createElement('br')); 
	}
  });

  function handleTypeChange(event) {
	console.log(`Selected type: ${event.target.value}`);
  }

function handleTypeChange(event) {
    resetLevels();
    resetTrybs();
    resetPora();
    resetCourseList();
    resetCourseDetails();
    
    const selectedType = event.target.value;
    const levels = [...new Set(courses.filter(course => course.Type === selectedType).map(course => course.Level))];

    const levelOptions = levels.map(level => `<label><input type="radio" name="level" value="${level}" onchange="handleLevelChange(event)">${level}</label>`).join('');
    document.getElementById('level').innerHTML = levelOptions;
    document.getElementById('levelOptionsHeader').style.display = 'block';

    if (levels.length === 1) {
        const singleLevelInput = document.querySelector('input[name="level"]');
        singleLevelInput.checked = true;
        handleLevelChange({ target: singleLevelInput });
    }
}

function handleLevelChange(event) {
    resetTrybs();
    resetPora();
    resetCourseList();
    resetCourseDetails();

    const selectedLevel = event.target.value;
    const selectedType = document.querySelector('input[name="courseType"]:checked').value;
    const trybs = [...new Set(courses.filter(course => course.Level === selectedLevel && course.Type === selectedType).map(course => course.Tryb))];

    const trybOptions = trybs.map(tryb => `<label><input type="radio" name="courseTryb" value="${tryb}" onchange="handleTrybChange(event)"> ${tryb}</label>`).join('');
    document.getElementById('tryb').innerHTML = trybOptions;
    document.getElementById('trybOptionsHeader').style.display = trybs.length > 0 ? 'block' : 'none';

    if (trybs.length === 1) {
        const singleTrybInput = document.querySelector('input[name="courseTryb"]');
        singleTrybInput.checked = true;
        handleTrybChange({ target: singleTrybInput });
    }
}

function handleTrybChange(event) {
    resetPora();
    resetCourseList();
    resetCourseDetails();

    const selectedTryb = event.target.value;
    const selectedLevel = document.querySelector('input[name="level"]:checked').value;
    const selectedType = document.querySelector('input[name="courseType"]:checked').value;
    const poras = [...new Set(courses.filter(course => course.Tryb === selectedTryb && course.Level === selectedLevel && course.Type === selectedType).map(course => course.Pora))];

    const poraOptions = poras.map(pora => `<label><input type="radio" name="coursePora" value="${pora}" onchange="handlePoraChange(event)"> ${pora}</label>`).join('');
    document.getElementById('pora').innerHTML = poraOptions;
    document.getElementById('poraOptionsHeader').style.display = poras.length > 0 ? 'block' : 'none';

    if (poras.length === 1) {
        const singlePoraInput = document.querySelector('input[name="coursePora"]');
        singlePoraInput.checked = true;
        handlePoraChange({ target: singlePoraInput });
    }
}

function handlePoraChange(event) {
    resetCourseList();
    resetCourseDetails();

    const selectedPora = event.target.value;
    const selectedLevel = document.querySelector('input[name="level"]:checked').value;
    const selectedType = document.querySelector('input[name="courseType"]:checked').value;
    const selectedTryb = document.querySelector('input[name="courseTryb"]:checked').value;

    const filteredCourses = courses.filter(course => course.Type === selectedType && course.Level === selectedLevel && course.Tryb === selectedTryb && course.Pora === selectedPora);
    displayCourses(filteredCourses);

    document.getElementById('listOptionsHeader').style.display = 'block';
}

function displayCourses(courses) {
    resetCourseList();
    const courseListContainer = document.getElementById('courseList');

    const selectElement = document.createElement('select');
    selectElement.id = 'courseSelect';
    selectElement.name = 'courseSelect';
    selectElement.onchange = function() {
        const selectedCourseValue = selectElement.value;
        const [courseStart, courseName] = selectedCourseValue.split('_');
        displayCourseDetails(courseStart, courseName);
    };

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Wybierz kurs z listy i uzupełnij dane';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);

    courses.forEach(course => {
        const optionElement = document.createElement('option');
        const optionValue = `${course.Start}_${course.Name}`;
        optionElement.value = optionValue;
        optionElement.textContent = `${course.Start} - ${course.Name}`;
        selectElement.appendChild(optionElement);
    });

    courseListContainer.appendChild(selectElement);
}

function displayCourseDetails(courseStart, courseName) {
    const course = courses.find(course => course.Start === courseStart && course.Name === courseName);
    if (!course) return;

    let courseTypeName = "";
    if (course.Type === "O") {
        courseTypeName = "Ogólny";
    } else if (course.Type === "K") {
        courseTypeName = "Konwersacje";
    } else if (course.Type === "N") {
        courseTypeName = "Norskprove";
    }

    const courseDetailsHTML = `
        <p><strong>Nazwa kursu:</strong> ${course.Name}</p>
        <p><strong>Typ kursu:</strong> ${courseTypeName}</p>
        <p><strong>Poziom:</strong> ${course.Level}</p>
        <p><strong>Tryb:</strong> ${course.Tryb}</p>
        <p><strong>Pora dnia:</strong> ${course.Pora}</p>
        <p><strong>Dni:</strong> ${course.Days}</p>
        <p><strong>Liczba lekcji:</strong> ${course.Lnumber}</p>
        <p><strong>Start:</strong> ${course.Start}</p>
        <p><strong>Koniec:</strong> ${course.End}</p>
        <p><strong>Cena:</strong> ${course.Price} zł</p>
    `;
    document.getElementById('courseDetails').innerHTML = courseDetailsHTML;
    document.getElementById('additionalFields').style.display = 'block';
}
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
        message.innerHTML= "Uzupełnij poprawnie formularz";
        return;
    }

  

    console.log("Formularz został poprawnie wypełniony. Możesz kontynuować proces wysyłania.");


	       

    const courseSelection = document.getElementById('courseSelect').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
const faktura = document.querySelector('input[name="invoice"]').checked
	const daneFaktury = document.getElementById('invoiceData').value;
	const nip = document.getElementById('NIP').value;
	const adresFirmy = document.getElementById('adresFirmy').value;
	const student = document.getElementById('student').checked;
	const uwagi = document.getElementById('remarks').value;
	const zgodaMarketingowa = document.getElementById('marketingConsent').checked;
	const zgodaSprzedazowa = document.getElementById('salesConsent').checked;
	const zgodaUmowna = document.getElementById('contractConsent').checked;

    // Prepare data to be sent to the API
    const data = {
        kursant: {
		course: courseSelection,
            firstName: firstName,
            lastName: lastName,
			schoolid:1,
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
			zgodaUmowna: zgodaUmowna },}
     
console.log(data)
});

var invoiceYes = document.getElementById("invoiceYes");
var invoiceData = document.getElementById("invoiceData");
var NIP = document.getElementById("NIP");
var adresFirmy = document.getElementById("adresFirmy");

invoiceYes.addEventListener("change", function() {
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