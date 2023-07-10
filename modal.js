let focusholderStart, focusholderEnd, dateFrom;

const elements = document.querySelectorAll('.modal__focusholder--start, .modal__focusholder--end, #date-from');

for (const element of elements) {
  element.classList.contains('modal__focusholder--start') && (focusholderStart = element);
  element.classList.contains('modal__focusholder--end') && (focusholderEnd = element);
  element.id === 'date-from' && (dateFrom = element);
}

if (focusholderStart && dateFrom && focusholderEnd) {
  focusholderStart.addEventListener('focus', () => dateFrom.focus());
  focusholderEnd.addEventListener('focus', () => dateFrom.focus());
}
