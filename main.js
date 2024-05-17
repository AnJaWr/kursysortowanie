var jsonData = [
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) poniedziałki środy 17:30-19:00",
          "Days": 1,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) poniedziałki środy 19:30-20:45",
          "Days": 1,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) wtorki czwartki 17:30-19:00",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) wtorki czwartki 19:30-20:45",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "07.09.2024",
          "Name": "START!(A1) piątki 17:30-20:45",
          "Days": 3,
          "Hours": "12",
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
        "Level":"A1",
        "Type":"O",
            "Start": "05.09.2024",
            "Name": "START!(A1) soboty 10:00-12:45",
            "Days": 4,
            "Hours": "1",
            "Lnumber": 60,
            "Price": 2190,
            "Form": 1
      },
      {
        "Level":"A1",
        "Type":"O",
            "Start": "07.09.2024",
            "Name": "START!(A1) piątki 17:30-20:45",
            "Days": 3,
            "Hours": "12",
            "Lnumber": 60,
            "Price": 2190,
            "Form": 1
      },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) piątki 17:30-20:45",
          "Days": 3,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
  {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) poniedziałki środy 17:30-20:40",
          "Days": 1,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 2
    },
  {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) poniedziałki wtorki środy czwartki piątki 9:00-11.30",
          "Days": 1,
          "Hours": 1,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 3
    },
    {
      "Level":"A2",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) poniedziałki środy 19:30-20:45",
          "Days": 1,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) wtorki czwartki 17:30-19:00",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "START!(A1) wtorki czwartki 17:30-19:00",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A2",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "W DRODZE A2 wtorki czwartki 19:30-20:45",
          "Days": 2,
          "Hours":2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A2",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "W DRODZE A2 piątki 17:30-20:45",
          "Days": 3,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"A2",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "W DRODZE A2 piątki 17:30-20:45",
          "Days": 3,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"B1-1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "W GÓRĘ WTORKI CZWARTKI 07:30-09:00",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
      "Level":"B1-1",
      "Type":"O",
          "Start": "04.09.2024",
          "Name": "W GÓRĘ WTORKI CZWARTKI 17:30-19:00",
          "Days": 2,
          "Hours": 2,
          "Lnumber": 60,
          "Price": 2190,
          "Form": 1
    },
    {
        "Level":"B1-1",
        "Type":"O",
            "Start": "04.09.2024",
            "Name": "W GÓRĘ PONIEDZIAŁKI I ŚRODY 17:30-19:00",
            "Days": 1,
            "Hours": 2,
            "Lnumber": 60,
            "Price": 2190,
            "Form": 1
      },
    ]

    

    function findCourse() {
        var courseType = document.querySelector('input[name="courseType"]:checked').value;
        var courseLevel = document.querySelector('input[name="courseLevel"]:checked').value;
        var courseMode = document.querySelector('input[name="courseMode"]:checked').value;
        var courseDay = document.querySelector('input[name="courseDay"]:checked').value;
        var courseTime = document.querySelector('input[name="courseTime"]:checked').value;
    
        var matchingCourses = jsonData.filter(function(course) {
          return course.Type == courseType &&
                 course.Level == courseLevel &&
                 course.Form == courseMode &&
                 course.Days == courseDay;
                 course.Hours == courseTime;
        });
    
        var selectElement = document.getElementById("courseList");
        selectElement.innerHTML = "";
    
        if (matchingCourses.length === 0) {
          var option = document.createElement("option");
          option.text = "Brak dostępnych kursów";
          selectElement.add(option);
        } else {
          matchingCourses.forEach(function(course) {
            var option = document.createElement("option");
            option.text = course.Start + " " + course.Name;
            option.value = course.Name; // Ustawia wartość opcji na nazwę kursu
            selectElement.add(option);
          });
        }
      }


      function showAdditionalFields() {
        var selectElement = document.getElementById("courseList");
        var additionalFields = document.getElementById("additionalFields");
    
        if (selectElement.value !== "Brak dostępnych kursów") {
          additionalFields.style.display = "block";
        } else {
          additionalFields.style.display = "none";
        }
      }

      function checkHandler() {
        findCourse();
        showAdditionalFields(); 
    }
        
