import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (
      <ResponsiveContainer className="  rounded-3xl drop-shadow-2xl max-w-md">
      <PieChart className='bg-slate-50 w-full h-full rounded-xl ' >
          <Pie data={this.props.data1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d0" />
          <Pie data={this.props.data2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
