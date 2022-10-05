const AnalogClock = () => {
  const getAll = (target) => document.querySelectorAll(target);

  const $clocks = getAll(".analog-clock");

  const renderClock = () => {
    const clockElement = `
          <div class="hand hour"></div>
          <div class="hand minute"></div>
          <div class="hand second"></div>
          <div class="time time1">|</div>
          <div class="time time2">|</div>
          <div class="time time3">|</div>
          <div class="time time4">|</div>
          <div class="time time5">|</div>
          <div class="time time6">|</div>
          <div class="time time7">|</div>
          <div class="time time8">|</div>
          <div class="time time9">|</div>
          <div class="time time10">|</div>
          <div class="time time11">|</div>
          <div class="time time12">|</div>`;

    $clocks.forEach((clock) => (clock.innerHTML = clockElement));
  };

  const moveSeconds = () => {
    const $seconds = getAll(".hand.second");

    $seconds.forEach(
      (second) =>
        (second.style.transform = `rotate(${new Date().getSeconds() * 6}deg)`)
    );
  };

  const moveMinutes = () => {
    const $minutes = getAll(".hand.minute");

    $minutes.forEach(
      (minute) =>
        (minute.style.transform = `rotate(${
          new Date().getMinutes() * 6 + new Date().getSeconds() * 0.1
        }deg)`)
    );
  };

  const moveHours = () => {
    const $hours = getAll(".hand.hour");

    let getHour = new Date().getHours();

    if (getHour > 12) {
      $hours.forEach(
        (hour) =>
          (hour.style.transform = `rotate(${
            (getHour - 12) * 30 + new Date().getMinutes() * 0.5
          }deg)`)
      );
    }
  };

  function init() {
    renderClock();
    moveSeconds();
    moveMinutes();
    moveHours();
  }

  // 초기 실행 시 바로 랜더링 하기 위해 사용
  init();

  setInterval(() => {
    init();
  }, 1000);
};

export default AnalogClock;
