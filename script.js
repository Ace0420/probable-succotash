window.addEventListener('load', () => {
  const greeting = new SpeechSynthesisUtterance("Hi gorgeous! Ready to lose those chips?!");
  greeting.lang = 'en-US';
  greeting.rate = 1;
  greeting.pitch = 1;
  speechSynthesis.speak(greeting);
});
