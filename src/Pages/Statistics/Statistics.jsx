import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { getStoredDonationId } from "../../LocalStorage/LocalStorage";

const Statistics = () => {
  const data = [];

  //charts showing calculation is here................

  const totalCategory = useLoaderData();
  const donatedCategory = getStoredDonationId();

  const totalDonation = { name: "Total Donation" };
  const yourDonation = { name: "Your Donation" };

  const totalLength = totalCategory.length;
  const donationLength = donatedCategory.length;
  const remainingDonation = totalLength - donationLength;

  totalDonation.value = remainingDonation;
  yourDonation.value = donationLength;

  data.push(totalDonation);
  data.push(yourDonation);

  //Color list---------------------------
  const COLORS = ["#FF444A", "#00C49F"];

  // percentage showing functionalities................

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

  // main jsx start form here ................
  return (
    <div className="md:max-w-screen-lg mx-auto">
      {/* Navar div...................... */}
      <div>
        <Navbar></Navbar>
      </div>

      {/* pie chart div...................... */}
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
            {/* legends are here............. */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
