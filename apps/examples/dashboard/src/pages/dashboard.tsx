import { Badge, BarChart, cn, DoughnutChart, Table } from "@nordice/core";
import {
  IconArrowsExchange,
  IconCalendarStats,
  IconChevronRight,
  IconCurrencyDollar,
  IconEye,
  IconTruckDelivery,
} from "@tabler/icons-react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import Layout from "components/template/Layout";
import InfoCard from "components/UI/molecules/InfoCard";
import * as React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "utils/formatCurrency";
import { formatDate } from "utils/formatDate";
import { generateMonths } from "utils/generateMonths";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Filler,
  ArcElement,
  BarElement,
  TimeScale
);

const barDataset = [
  {
    label: "First transactions",
    data: [60, 65, 75, 55, 40, 70, 62, 80],
    backgroundColor: "#434C5E",
  },
  {
    label: "Second transactions",
    data: [65, 59, 80, 81, 56, 55, 40, 70],
    backgroundColor: "#81A1C1",
  },
];

const doughnutChartData = [
  {
    label: "My First Dataset",
    data: [300, 100],
    backgroundColor: ["#434C5E", "#81A1C1"],
  },
];

interface ITransaction {
  id: number;
  foodName: string;
  customerName: string;
  purchasedDate: Date;
  total: number;
  amount: number;
  price: number;
  status: "Success" | "Pending" | "Failed";
}

const head = {
  foodName: "Food Name",
  customerName: "Customer Name",
  purchasedDate: "Purchased Date",
  total: "Total",
  amount: "Amount",
  status: "Status",
  price: "Price",
} as const;

const data: ITransaction[] = [
  {
    id: 1,
    foodName: "Rendang",
    customerName: "John doe",
    amount: 15,
    purchasedDate: new Date(),
    status: "Pending",
    total: 195,
    price: 13,
  },
  {
    id: 2,
    foodName: "Bakso",
    customerName: "John doe",
    price: 10,
    amount: 10,
    purchasedDate: new Date(),
    status: "Success",
    total: 100,
  },
  {
    id: 3,
    foodName: "Mie Ayam",
    customerName: "Jane doe",
    amount: 5,
    purchasedDate: new Date(),
    status: "Pending",
    total: 65,
    price: 13,
  },
  {
    id: 4,
    foodName: "Pecel Lele",
    customerName: "Jane doe",
    price: 13,
    amount: 2,
    purchasedDate: new Date(),
    status: "Failed",
    total: 26,
  },
];

const flexBetween = "flex items-center justify-between";
const title = "text-2xl font-medium text-polarNight2";

const mappedStatus = {
  Success: "positive",
  Pending: "warning",
  Failed: "negative",
} as const;

const Dashboard = () => {

  return (
    <Layout>
      <div className="col-span-8 flex flex-col justify-between rounded-md bg-snowStorm2-500 p-4">
        <div className={flexBetween}>
          <h1 className={title}>Transaction Report</h1>
          <div className="cursor-pointer rounded-md bg-snowStorm1-100 p-[6px]">
            <IconCalendarStats className="text-polarNight3" />
          </div>
        </div>
        <div className="mt-4 min-h-[20rem]">
          <BarChart
            datasets={barDataset}
            labels={generateMonths({ count: 8 })}
          />
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-6 gap-4 rounded-md">
        <InfoCard
          icon={<IconCurrencyDollar size={26} />}
          title="Total Income"
          total={formatCurrency(25000)}
          totalInPercent={5}
          isIncrease
        />
        <InfoCard
          icon={<IconTruckDelivery size={26} />}
          title="Total Order"
          total={300}
          totalInPercent={10}
          isIncrease
        />
        <InfoCard
          icon={<IconEye size={26} />}
          title="Total Views"
          total={905}
          totalInPercent={3}
          isIncrease
        />
        <InfoCard
          icon={<IconArrowsExchange size={26} />}
          title="Conversion Rate"
          total="50%"
          totalInPercent={3}
        />
      </div>
      <div className="col-span-8 rounded-md bg-snowStorm2-500 p-4">
        <div className={flexBetween}>
          <h1 className={title}>Recent Transaction</h1>
          <Link
            to="/transactions"
            className={cn(
              flexBetween,
              "cursor-pointer rounded-md bg-snowStorm1-100 py-[6px] px-3 font-medium text-polarNight3"
            )}
          >
            <span className="pb-[1px] text-sm">See All</span>
            <IconChevronRight size={21} />
          </Link>
        </div>
        <div className="mt-4 2lg:w-full 2lg:overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.Tr className="2lg:bg-frost2">
                {Object.values(head).map((item, index) => (
                  <Table.Th key={index} className="2lg:text-snowStorm0-100">
                    {item}
                  </Table.Th>
                ))}
                <Table.Th centered className="2lg:text-snowStorm0-100">
                  View
                </Table.Th>
              </Table.Tr>
            </Table.Head>
            <Table.Body>
              {data.map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <Table.Text>{item.foodName}</Table.Text>
                  </Table.Td>
                  <Table.Td>
                    <Table.Text>{item.customerName}</Table.Text>
                  </Table.Td>
                  <Table.Td>
                    <Table.Text>
                      {formatDate(item.purchasedDate, undefined, {
                        dateStyle: "medium",
                      })}
                    </Table.Text>
                  </Table.Td>
                  <Table.Td>
                    <Table.Text>{item.total}</Table.Text>
                  </Table.Td>
                  <Table.Td>
                    <Table.Text>{item.amount}</Table.Text>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      status={mappedStatus[item.status]}
                      text={item.status}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Table.Text>{item.price}</Table.Text>
                  </Table.Td>
                  <Table.Td className="2lg:relative">
                    <IconEye
                      size={20}
                      className="cursor-pointer text-polarNight2 2lg:absolute 2lg:top-2/4 2lg:left-2/4 2lg:-translate-x-2/4 2lg:-translate-y-2/4"
                    />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center rounded-md bg-snowStorm2-500">
        <div className="min-h-[15rem]">
          <DoughnutChart
            datasets={doughnutChartData}
            labels={["Red", "Blue"]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
