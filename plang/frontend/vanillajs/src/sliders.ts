import noUiSlider from 'nouislider';

export function initializeSliders() {
  const sliders = ['sliderA', 'sliderB', 'sliderC', 'sliderD'];
  const startValues = [50, 30, 70, 40];

  sliders.forEach((sliderId, index) => {
    const element = document.getElementById(sliderId);
    if (element) {
      noUiSlider.create(element, {
        start: [startValues[index]],
        range: {
          'min': 0,
          'max': 100
        }
      });
    }
  });
} 