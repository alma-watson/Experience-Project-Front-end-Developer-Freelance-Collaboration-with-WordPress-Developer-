[
  {
    "id": 0,
    "date": "2025-04-07",
    "title": "The detail that creates spaces",
    "summary": "Art installations & design collaborations",
    "text": "Nulla cursus eget urna sodales, semper quam eget, sodales nisi...",
    "image": "img/events/arnaud-gillard-pLROZyxnmY4-unsplash.jpg"
  },
  {
    "id": 1,
    "date": "2025-05-12",
    "title": "Another exciting event",
    "summary": "Creative workshops and more",
    "text": "Some other detailed description for event 1...",
    "image": "img/events/aruzhan-akramova-4_S_vhmBO_I-unsplash.jpg"
  }
  // Додай інші івенти у форматі JSON
]



  // Зчитати параметр id з URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    alert('Event ID is missing in URL');
  } else {
    fetch('events.json')
      .then(response => response.json())
      .then(events => {
        const event = events.find(e => e.id == id);

        if (!event) {
          document.querySelector('.event-content_page').innerHTML = '<p>Event not found.</p>';
          return;
        }

        // Підставляємо дані у сторінку
        document.querySelector('.event-title_page').textContent = event.title;
        document.querySelector('.event-date_page').textContent = event.date;
        document.querySelector('.event-summary span').textContent = event.summary;
        document.querySelector('.event-summary p').textContent = event.text;

        // Встановити дату у time.datetime, якщо є
        const timeElem = document.querySelector('.event-summary time');
        if (timeElem) {
          timeElem.setAttribute('datetime', event.date);
          timeElem.textContent = event.date;
        }

        document.querySelector('.event-image_page img').src = event.image;
        document.querySelector('.event-image_page img').alt = event.title;

        // Можна ще додати підстановку в sidebar (якщо треба)
      })
      .catch(() => {
        document.querySelector('.event-content_page').innerHTML = '<p>Error loading events data.</p>';
      });
  }

