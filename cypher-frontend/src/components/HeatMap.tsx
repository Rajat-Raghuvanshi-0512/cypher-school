import HeatM from "react-heatmap-grid";

const HeatMap = () => {
  const month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const xLabels = new Array(36).fill(0).map((_, i) => {
    return i % 3 == 0 ? month[i / 3] : null;
  });
  const yLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
  const data = new Array(yLabels.length + 3)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );
  return (
    <div className="mt-10">
      <HeatM
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgba(255,165,0, ${1 - (max - value) / (max - min)})`,
          fontSize: "11px",
        })}
      />
    </div>
  );
};

export default HeatMap;
