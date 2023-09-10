// JavaScript to handle the hover effect
const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const rect = item.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    // Calculate the percentage of pointer position within the item
    const originX = (offsetX / rect.width) * 100 + '%';
    const originY = (offsetY / rect.height) * 100 + '%';

    item.style.transformOrigin = `${originX} ${originY}`;
    item.style.transform = 'scale(1.1)'; // Adjust the scale factor as desired
  });

  item.addEventListener('mouseleave', () => {
    item.style.transformOrigin = 'center center';
    item.style.transform = 'scale(1)';
  });
});
