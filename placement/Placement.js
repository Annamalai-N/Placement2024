// Fetch course data from a backend API or database
const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript.',
      duration: '4 weeks',
      price: 99.99,
      status: 'Open'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Dive deeper into JavaScript and learn about modern frameworks and libraries.',
      duration: '8 weeks',
      price: 199.99,
      status: 'Open'
    },
    // Add more courses as needed
  ];
  
  // Function to generate course cards
  function generateCourseCards() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';
  
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
  
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Duration: ${course.duration}</p>
        <p>Price: $${course.price.toFixed(2)}</p>
        <p>Status: ${course.status}</p>
        <button>Enroll</button>
      `;
  
      courseList.appendChild(courseCard);
    });
  }
  
  // Function to populate the course select dropdown
  function populateCourseSelect() {
    const courseSelect = document.getElementById('course-select');
    courseSelect.innerHTML = '';
  
    courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.id;
      option.text = course.title;
      courseSelect.add(option);
    });
  }
  
  // Event listener for the enrollment form submission
  const enrollmentForm = document.getElementById('enrollment-form');
  enrollmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const courseId = document.getElementById('course-select').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const payment = document.getElementById('payment').value;
  
    // Process the enrollment data and send it to the backend
    console.log('Enrolling in course:', courseId);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Payment:', payment);
  
    // Reset the form
    enrollmentForm.reset();
  });
  
  // Initialize the page
  generateCourseCards();
  populateCourseSelect();