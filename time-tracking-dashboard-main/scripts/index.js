document.addEventListener("DOMContentLoaded", () => {
  const periodBtns = document.querySelectorAll("button[data-period]");

  let actualData = null;

  /* ==== Fetch Data ==== */
  const fetchData = async (dataSource) => {
    try {
      const response = await fetch(dataSource);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed fetch:", error);
      return false;
    }
  };

  /* ==== Returns a object of title, current and previous from json data ==== */
  const getPeriodData = (data, period) => {
    const transformedData = data
      .map((activity) => {
        const title = activity.title;
        const timeData = activity.timeframes[period];

        if (!timeData) {
          console.error(`Data for period: ${period} not found in ${title}`);
          return null;
        }

        return {
          title: title,
          current: timeData.current,
          previous: timeData.previous,
        };
      })
      .filter((item) => item != null);

    return transformedData;
  };

  /* ==== Renders data from getPeriodData to HTML Cards ==== */
  const renderData = (data, period) => {
    const periodData = getPeriodData(data, period);

    let prevText = "Yesterday";
    if (period === "weekly") {
      prevText = " Last Week";
    } else if (period === "monthly") {
      prevText = "Last Month";
    }

    periodData.forEach((item) => {
      const safeTitle = item.title.toLowerCase().replace(/\s/g, "-");
      const cardElement = document.querySelector(
        `.activity-card--${safeTitle}`
      );

      if (cardElement) {
        const currentElement = cardElement.querySelector(
          ".activity-card__current-time"
        );
        const previousElement = cardElement.querySelector(
          ".activity-card__previous-time"
        );

        currentElement.textContent = `${item.current}hrs`;
        previousElement.textContent = `${prevText} - ${item.previous}hrs`;
      } else {
        console.warn(`HTML card not found for title: ${item.title}`);
      }
    });
  };

  /* ==== Add event listeners for time control buttons ==== */
  const attachEventListeners = () => {
    periodBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        const selectedPeriod = event.currentTarget.dataset.period;

        if (actualData) {
          renderData(actualData, selectedPeriod);

          periodBtns.forEach((btn) =>
            btn.classList.remove("time-controls__button--active")
          );
          event.currentTarget.classList.add("time-controls__buttons--active");
        }
      });
    });
  };

  /* ==== Creating a pipeline to ensure async functionality ==== */
  const initializePipeline = async () => {
    const data = await fetchData("/data.json");

    if (data) {
      actualData = data;
      console.log("Data loaded succesfully.");

      renderData(actualData, "weekly");
      attachEventListeners();
    } else {
      console.error("Pipeline initialization failed.");
    }
  };

  // Start the pipeline
  initializePipeline();
});
