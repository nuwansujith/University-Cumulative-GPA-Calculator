document.addEventListener('DOMContentLoaded', function() {
    // Course management
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course');
    const calculateBtn = document.getElementById('calculate-gpa');
    const resetBtn = document.getElementById('reset');
    const resultsSection = document.getElementById('results');
    
    // Add new course row
    addCourseBtn.addEventListener('click', function() {
        const newCourse = document.querySelector('.course-input').cloneNode(true);
        newCourse.querySelectorAll('input').forEach(input => input.value = '');
        newCourse.querySelector('select').selectedIndex = 0;
        newCourse.querySelector('.remove-course').classList.remove('hidden');
        coursesContainer.appendChild(newCourse);
    });
    
    // Remove course row
    coursesContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-course')) {
            if (document.querySelectorAll('.course-input').length > 1) {
                e.target.closest('.course-input').remove();
            }
        }
    });
    
    // Calculate GPA
    calculateBtn.addEventListener('click', function() {
        const courses = Array.from(document.querySelectorAll('.course-input'));
        let totalQualityPoints = 0;
        let totalCredits = 0;
        
        courses.forEach(course => {
            const credits = parseFloat(course.querySelector('input[type="number"]').value) || 0;
            const grade = parseFloat(course.querySelector('select').value) || 0;
            
            if (credits > 0 && !isNaN(grade)) {
                totalQualityPoints += credits * grade;
                totalCredits += credits;
            }
        });
        
        if (totalCredits > 0) {
            const gpa = totalQualityPoints / totalCredits;
            document.getElementById('current-credits').textContent = totalCredits;
            document.getElementById('current-gpa').textContent = gpa.toFixed(2);
            
            // Calculate cumulative GPA
            const prevCredits = parseFloat(document.getElementById('prev-credits').value) || 0;
            const prevGPA = parseFloat(document.getElementById('prev-gpa').value) || 0;
            
            if (prevCredits > 0) {
                const totalCombinedCredits = totalCredits + prevCredits;
                const cumulativeGPA = ((prevGPA * prevCredits) + totalQualityPoints) / totalCombinedCredits;
                
                document.getElementById('total-credits').textContent = totalCombinedCredits;
                document.getElementById('cumulative-gpa').textContent = cumulativeGPA.toFixed(2);
            }
            
            resultsSection.classList.remove('hidden');
        } else {
            alert('Please enter at least one valid course');
        }
    });
    
    // Reset form
    resetBtn.addEventListener('click', function() {
        coursesContainer.innerHTML = '';
        const firstCourse = document.querySelector('.course-input').cloneNode(true);
        firstCourse.querySelectorAll('input').forEach(input => input.value = '');
        firstCourse.querySelector('select').selectedIndex = 0;
        firstCourse.querySelector('.remove-course').classList.add('hidden');
        coursesContainer.appendChild(firstCourse);
        
        document.getElementById('prev-credits').value = '0';
        document.getElementById('prev-gpa').value = '0.00';
        resultsSection.classList.add('hidden');
    });
});