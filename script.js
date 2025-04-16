// GPA grade scale mapping
const gradeToPoint = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};

// Event listener to form submission
document.getElementById('gpa-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const grades = document.querySelectorAll('select[name="grade"]');
  let totalPoints = 0;
  let count = 0;

  grades.forEach(select => {
    const grade = select.value;
    if (grade !== "") {
      totalPoints += gradeToPoint[grade];
      count++;
    }
  });

  const resultDiv = document.getElementById('result');

  if (count === 0) {
    resultDiv.textContent = "Please select at least one grade.";
    return;
  }

  const gpa = (totalPoints / count).toFixed(2);
  resultDiv.textContent = `Your estimated GPA is: ${gpa}`;
});

// Functionality to "Add Another Course" button
document.getElementById('add-course').addEventListener('click', function() {
  const container = document.getElementById('courses-container');

  const newRow = document.createElement('div');
  newRow.className = 'course-row';

  newRow.innerHTML = `
    <label>Course Name:
      <input type="text" name="courseName" required>
    </label>
    <label>Grade:
      <select name="grade" required>
        <option value="">--Select--</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    </label>
  `;

  container.appendChild(newRow);
});
