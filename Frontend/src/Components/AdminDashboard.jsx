import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './AdminDashboard.css';

const data = [
  { name: 'Venues', value: 0, color: '#34eb86' },
  { name: 'Upcoming Bookings', value: 0, color: '#ff669a' },
  { name: 'Notifications', value: 1, color: '#ffa31a' },
  { name: 'Past Bookings', value: 0, color: '#3399ff' },
  { name: 'New Users', value: 0, color: '#b366ff' },
  { name: 'Revenue', value: 0, color: '#ffdb4d' },
  { name: 'Feedback', value: 0, color: '#ff4d4d' },
  { name: 'Tasks', value: 0, color: '#33cccc' },
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Bookings</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
      <div className="main-content">
        <header>
          <h2>Dashboard Overview</h2>
        </header>
        <div className="dashboard-grid">
          {data.map((item) => (
            <div key={item.name} className="dashboard-item" style={{ background: item.color }}>
              <h3>{item.name}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="pie-chart-container">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
