const courses = [
	{
		"Level": "A1",
		"Type": "O",
		"Start": "01.09.2024",
		"Name": "START!(A1) poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "02.10.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "02.09.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "02.09.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "03.09.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "superintensywny"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "04.10.2024",
		"Name": "START!(A1) poniedziałki wtorki środy czwartki piątki 10:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "superintensywny"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "05.09.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "06.09.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "START!(A1) poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "01.09.2024",
		"Name": "START!(A1) poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A1",
		"Type": "O",
		"Start": "02.09.2024",
		"Name": "START!(A1) wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "W GÓRĘ poniedziałki wtorki środy czwartki piątki 10:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "superintensywny"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "03.09.2024",
		"Name": " W DORODZE A2 piątek 19:30-20:45",
		"Days": "3",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "W DORODZE A2 SOBOTA 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "01.09.2024",
		"Name": "W DORODZE A2 wtoerki czwartki 7:30-9:00",
		"Days": "2",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "01.09.2024",
		"Name": "W DORODZE A2 wtorki i czwartki 17:30-19:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "01.09.2024",
		"Name": "W DORODZE A2 poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "O",
		"Start": "02.09.2024",
		"Name": "W DORODZE A2 poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "A2",
		"Type": "N",
		"Start": "04.09.2024",
		"Name": "NORSKPOROVE A2 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "b1-1 poniedziałki wtorki środy czwartki piątki 10:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "superintensywny"
	},
	{
		"Level": "B1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "b1-2 poniedziałki środy   17:30-20:30",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-1",
		"Type": "K",
		"Start": "03.09.2024",
		"Name": " B1 KONWERSACJE wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "W GÓRĘ B1-1 poniedziałki i środy 9:30-10:45",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "W GÓRĘ B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "N",
		"Start": "05.09.2024",
		"Name": "nORSKPROVE B1-1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-1",
		"Type": "K",
		"Start": "04.09.2024",
		"Name": "B1 Konwersacje piątek 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B1-2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "b1-2 poniedziałki wtorki środy czwartki piątki 10:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "superintensywny"
	},
	{
		"Level": "B1-2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "b1-2 poniedziałki  środy 10:30-12:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "b1-2  wtorki  czwartki  17:30-20:40",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "intensywny"
	},
	{
		"Level": "B1-2",
		"Type": "O",
		"Start": "07.09.2024",
		"Name": "B1-2 piątek 19:30-20:45",
		"Days": "3",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "B2-1 poniedziałek środa 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "B2-1(A1) wtorek czwartek",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "K",
		"Start": "04.09.2024",
		"Name": "B2-1 KONWERSACJE WTOKI I CZWARTKI 7:30-10:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-1",
		"Type": "N",
		"Start": "04.09.2024",
		"Name": "NORSKPROVE B2 poniedziałki środy 19:30-20:45",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "B2-2",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": "B2-2 piątek 19:30-20:45",
		"Days": "4",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": " BLISKO CELU C1-1 poniedziałki środy 7:30-9:00",
		"Days": "1",
		"Pora": "poranny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": " BLISKO CELU C1-1 wtorki czwartki 17:30-19:00",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-1",
		"Type": "O",
		"Start": "04.09.2024",
		"Name": " BLISKO CELU C1-1 poniedziałki środy 17:30-9:00",
		"Days": "1",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	},
	{
		"Level": "C1-2",
		"Type": "N",
		"Start": "04.09.2024",
		"Name": "NORKSPROVE C1 wtorki czwartki 19:30-20:45",
		"Days": "2",
		"Pora": "wieczorny",
		"Lnumber": 60,
		"Price": 2190,
		"Tryb": "standardowy"
	}
];

function resetLevels() {
    document.getElementById('levelOptions').innerHTML = '';
}

function resetTrybs() {
    document.getElementById('trybOptions').innerHTML = '';
}

function resetPora() {
    document.getElementById('poraOptions').innerHTML = '';
}

function resetDays() {
    document.getElementById('daysOptions').innerHTML = '';
}

function resetCourseList() {
    document.getElementById('courseList').innerHTML = '';
}

function resetOnlyOne() {
    document.getElementById('onlyOne').classList.add('hidden');
    document.getElementById('onlyOne').innerHTML = '';
}

function handleTypeChange(event) {
    resetLevels();
    resetTrybs();
    resetPora();
    resetDays();
    resetCourseList();
    resetOnlyOne();
    const selectedType = event.target.value;
    const levels = [...new Set(courses.filter(course => course.Type === selectedType).map(course => course.Level))];

    const levelOptions = levels.map(level => `<label><input type="radio" name="level" value="${level}" onchange="handleLevelChange(event)">${level}</label>`).join('');
    document.getElementById('levelOptions').innerHTML = levelOptions;
}

function handleLevelChange(event) {
    resetTrybs();
    resetPora();
    resetDays();
    resetCourseList();
    resetOnlyOne();
    const selectedLevel = event.target.value;
    const typeElement = document.querySelector('input[name="courseType"]:checked');
    const selectedType = typeElement ? typeElement.value : null;

    const filteredCourses = courses.filter(course => course.Type === selectedType && course.Level === selectedLevel);
    const tryby = [...new Set(filteredCourses.map(course => course.Tryb))];

    const trybOptions = tryby.map(tryb => `<label><input type="radio" name="tryb" value="${tryb}" onchange="handleTrybChange(event)">${tryb}</label>`).join('');
    document.getElementById('trybOptions').innerHTML = trybOptions;
}

function handleTrybChange(event) {
    resetPora();
    resetDays();
    resetCourseList();
    resetOnlyOne();
    const selectedTryb = event.target.value;
    const levelElement = document.querySelector('input[name="level"]:checked');
    const typeElement = document.querySelector('input[name="courseType"]:checked');
    const selectedLevel = levelElement ? levelElement.value : null;
    const selectedType = typeElement ? typeElement.value : null;

    const filteredCourses = courses.filter(course => course.Type === selectedType && course.Level === selectedLevel && course.Tryb === selectedTryb);
    const poras = [...new Set(filteredCourses.map(course => course.Pora))];

    const poraOptions = poras.map(pora => `<label><input type="radio" name="pora" value="${pora}" onchange="handlePoraChange(event)">${pora}</label>`).join('');
    document.getElementById('poraOptions').innerHTML = poraOptions;
}

function handlePoraChange(event) {
    resetDays();
    resetCourseList();
    resetOnlyOne();
    const selectedPora = event.target.value;
    const levelElement = document.querySelector('input[name="level"]:checked');
    const typeElement = document.querySelector('input[name="courseType"]:checked');
    const trybElement = document.querySelector('input[name="tryb"]:checked');
    const selectedLevel = levelElement ? levelElement.value : null;
    const selectedType = typeElement ? typeElement.value : null;
    const selectedTryb = trybElement ? trybElement.value : null;

    const filteredCourses = courses.filter(course => course.Type === selectedType && course.Level === selectedLevel && course.Tryb === selectedTryb && course.Pora === selectedPora);
    const days = [...new Set(filteredCourses.map(course => course.Days))];

    const daysOptions = days.map(day => {
        let dayLabel;
        switch(day) {
            case "1": dayLabel = "poniedziałki i środy"; break;
            case "2": dayLabel = "wtorki i czwartki"; break;
            case "3": dayLabel = "piątki"; break;
            case "4": dayLabel = "soboty"; break;
            default: dayLabel = "inne"; break;
        }
        return `<label><input type="radio" name="days" value="${day}" onchange="handleDaysChange(event)">${dayLabel}</label>`;
    }).join('');
    document.getElementById('daysOptions').innerHTML = daysOptions;
}

function handleDaysChange(event) {
    resetCourseList();
    resetOnlyOne();
    const selectedDays = event.target.value;
    const levelElement = document.querySelector('input[name="level"]:checked');
    const typeElement = document.querySelector('input[name="courseType"]:checked');
    const trybElement = document.querySelector('input[name="tryb"]:checked');
    const poraElement = document.querySelector('input[name="pora"]:checked');
    const selectedLevel = levelElement ? levelElement.value : null;
    const selectedType = typeElement ? typeElement.value : null;
    const selectedTryb = trybElement ? trybElement.value : null;
    const selectedPora = poraElement ? poraElement.value : null;

    const filteredCourses = courses.filter(course => course.Type === selectedType && course.Level === selectedLevel && course.Tryb === selectedTryb && course.Pora === selectedPora && course.Days == selectedDays);
    displayCourses(filteredCourses);
}
function displayCourses(courses) {
    if (courses.length === 1) {
        document.getElementById('onlyOne').innerHTML = `Znaleziono jeden kurs: ${courses[0].Name}`;
        document.getElementById('onlyOne').classList.remove('hidden');
    } else {
        const courseList = courses.map(course => `<div>${course.Name}</div>`).join('');
        document.getElementById('courseList').innerHTML = courseList;
    }
}