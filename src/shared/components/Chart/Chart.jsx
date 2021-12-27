import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Chart.module.scss";

const Chart = (sprint) => {
  const [chartData, setChartData] = useState({});
  const { name, duration, startDate, endDate, totalPlannedTime, totalDaily } =
    sprint;
  // !!! посмотреть структуру стейта когда сделают и исправить названия и обращение к спринту
  // !!! в модели добавить общее запланированное время и оьщее время/день

  useEffect(() => {
    let dates = [];
    const datesRange = (start, end) => {
      let startDate = new Date(start + " 00:00:00 UTC");
      let endDate = new Date(end + " 00:00:00 UTC");
      const options = {
        month: "short",
        day: "numeric",
      };
      while (startDate <= endDate) {
        const localDate = startDate.toLocaleString("en-US", options);
        dates.push(localDate);
        startDate = new Date(
          Date.UTC(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate() + 1
          )
        );
      }
    };
    datesRange(startDate, endDate);

    const redLineValues = new Array(duration)
      .fill(totalPlannedTime)
      .map((elem, index, array) =>
        index > 0
          ? totalPlannedTime - (totalPlannedTime / array.length) * index
          : elem
      )
      .concat([0]);

    const blueLineValues = new Array(duration)
      .fill(totalPlannedTime)
      .map((elem, index, array) => {
        let time = 0;
        for (let i = index; i >= 0; i = -1) {
          time += Object.values(totalDaily[i])[0];
        }
        return array[index] - time;
      });

    const chartLines = () => {
      setChartData({
        labels: dates,
        datasets: [
          {
            label: "Planned remaining labor hours",
            data: redLineValues,
            fill: false,
            backgroundColor: "#FA3B3F",
            borderColor: "#FA3B3F",
            borderWidth: 1,
            lineTension: 0.2,
          },
          {
            label: "Actual remaining labor hours ",
            data: [totalPlannedTime, ...blueLineValues],
            fill: false,
            backgroundColor: "#1988EE",
            borderColor: "#1988EE",
            borderWidth: 1,
            lineTension: 0.2,
          },
        ],
      });
    };
    chartLines();
  }, [duration, startDate, endDate, totalPlannedTime, totalDaily]);

  return (
    <div>
      <h3 className={styles.Chart_title}>{name}</h3>
      <Line
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  beginAtZero: true,
                },
              },
            ],
          },
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                usePointStyle: true,
              },
            },
            title: {
              display: true,
              position: "left",
              text: "Man-hours",
            },
          },
          layout: {
            padding: 20,
          },
        }}
      />
    </div>
  );
};

Chart.propTypes = {
  sprint: PropTypes.object.isRequired,
};

export default Chart;
