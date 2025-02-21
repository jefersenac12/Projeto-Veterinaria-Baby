const sectionAnimations = {
  "section-1": ["animado-1"],
  "section-2": ["animado-2","animado-3","animado-4","animado-5","animado-6","animado-7","animado-8", "animado-11"],
  "section-3": ["animado-9", "animado-10"],
};
const animations = {
  "animado-1": "animate__fadeInDown",
  // "animado-2": "animate__fadeInLeft",
  "animado-3": "animate__fadeInDown",
  "animado-4": "animate__fadeInDown",
  "animado-5": "animate__fadeInDown",
  "animado-6": "animate__fadeInDown",
  "animado-7": "animate__fadeInDown",
  "animado-8": "animate__fadeInDown",
  "animado-9": "animate__fadeInDown",
  "animado-10": "animate__fadeInDown",
  "animado-11": "animate__fadeInDown",

};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;

      if (sectionAnimations[sectionId]) {
        sectionAnimations[sectionId].forEach((elementId) => {
          const element = document.getElementById(elementId);
          const animationClass = animations[elementId];

          if (element && animationClass) {
            if (entry.isIntersecting) {
              element.classList.remove("animate__animated", animationClass);
              void element.offsetWidth;
              element.classList.add("animate__animated", animationClass);
            }
          }
        });
      }
    });
  },
  { threshold: 0.9}
);

Object.keys(sectionAnimations).forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    sectionObserver.observe(section);
  }
});
