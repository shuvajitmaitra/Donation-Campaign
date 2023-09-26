import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { getStoredDonationId } from "../../LocalStorage/LocalStorage";

const Statistics = () => {
  const data = [];

  const totalCategory = useLoaderData();
  const donatedCategory = getStoredDonationId();

  const myObject = { name: "Remaining Donations" };
  const myObject2 = { name: "Provided Donations" };

  const totalLength = totalCategory.length;
  const donationLength = donatedCategory.length;
  const remaining = totalLength - donationLength;

  myObject.value = remaining;
  myObject2.value = donationLength;

  data.push(myObject);
  data.push(myObject2);

  console.log(data);

  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="md:max-w-screen-lg mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={380} height={380}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
