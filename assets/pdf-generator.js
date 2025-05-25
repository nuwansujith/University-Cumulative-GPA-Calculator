// PDF Generation using jsPDF
const { jsPDF } = window.jspdf;

document.getElementById('generate-pdf').addEventListener('click', function() {
    const currentCredits = document.getElementById('current-credits').textContent;
    const currentGPA = document.getElementById('current-gpa').textContent;
    const totalCredits = document.getElementById('total-credits').textContent;
    const cumulativeGPA = document.getElementById('cumulative-gpa').textContent;
    
    const doc = new jsPDF();
    
    // Add logo/title
    doc.setFontSize(20);
    doc.setTextColor(40, 53, 147);
    doc.text('University GPA Report', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
    
    // Add current semester results
    doc.setFontSize(16);
    doc.text('Current Semester Results', 14, 45);
    doc.setFontSize(12);
    doc.text(`Total Credits: ${currentCredits}`, 14, 55);
    doc.text(`GPA: ${currentGPA}`, 14, 65);
    
    // Add cumulative results
    doc.setFontSize(16);
    doc.text('Cumulative Results', 14, 85);
    doc.setFontSize(12);
    doc.text(`Total Credits: ${totalCredits}`, 14, 95);
    doc.text(`Cumulative GPA: ${cumulativeGPA}`, 14, 105);
    
    // Add course list
    doc.setFontSize(16);
    doc.text('Course Breakdown', 14, 125);
    doc.setFontSize(10);
    
    let yPosition = 135;
    document.querySelectorAll('.course-input').forEach((course, index) => {
        const name = course.querySelector('input[type="text"]').value || `Course ${index + 1}`;
        const credits = course.querySelector('input[type="number"]').value || '0';
        const grade = course.querySelector('select').selectedOptions[0]?.text || 'N/A';
        
        doc.text(`${name}: ${credits} credits - ${grade}`, 14, yPosition);
        yPosition += 7;
    });
    
    // Save the PDF
    doc.save('GPA_Report.pdf');
});