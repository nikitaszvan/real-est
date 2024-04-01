import React from 'react';
import './box-3.styles.css';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart, Pie, Sector, Cell
} from "recharts";

const Box3 = () => {

  const data1 = [
    {
      uv: 4000,
      pv: 5400,
      amt: 2400
    },
    {
      uv: 3000,
      pv: 4598,
      amt: 2210
    },
    {
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      uv: 2780,
      pv: 5908,
      amt: 2000
    },
    {
      uv: 1890,
      pv: 5800,
      amt: 2181
    }];

    const data2 = [
      {
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        uv: 3000,
        pv: 1898,
        amt: 2210,
      },
      {
        uv: 2000,
        pv: 5800,
        amt: 2290,
      },
      {
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

  const data3 = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];

  const COLORS = ['#22B573', '#D3F0E3', '#7AD3AB'];


  return (
    <div className="box-3 dashboard-component">
      <div>
        <p className='p-gray'>Transactions</p>
        <h2 className='stat-number'>230K</h2>
        <ResponsiveContainer width='100%' height='70%'>
          <BarChart
            width={230}
            height={80}
            data={data1}
          >
            <Bar dataKey="pv" stackId="a" fill='#20B572' barSize={10}/>
            <Bar dataKey="uv" stackId="a" fill='#D3F0E3' />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p className='p-gray'>Profit</p>
        <h2 className='stat-number'>230K</h2>
        <ResponsiveContainer width='100%' height='70%'>
          <LineChart width={500} height={300} data={data2} margin={{
          top: 10}}>
            <CartesianGrid strokeDasharray="5 5" />
            <Line type="monotone" dataKey="pv" stroke="#aaa8db" strokeWidth={3}/>
            <Line type="monotone" dataKey="uv" stroke="#20B572" strokeWidth={1} strokeDasharray="5 5"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <div>
          <h2>Earning</h2>
          <p className='p-gray'>This year</p>
          <p>$4055.56</p>
          <h3>68.2% more earnings than last month</h3>
        </div>
        <div className='pi-chart-container'>
          <ResponsiveContainer width="100%" height="100%" className={'pi-chart-1'}>
            <PieChart>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%" className={'pi-chart-2'}>
            <PieChart>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%" className={'pi-chart-3'}>
            <PieChart>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Box3;