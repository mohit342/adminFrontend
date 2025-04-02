import React, { useState, useEffect } from 'react';
import DashboardBox2 from './dashboardBox2';
import DashboardBox3 from './dashboards3';

const Dashboard = () => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch total order count
                const ordersResponse = await fetch('http://localhost:5000/api/orders/count');
                const ordersData = await ordersResponse.json();
                setTotalOrders(ordersData.count);

                // Fetch total user count
                const usersResponse = await fetch('http://localhost:5000/api/users/count');
                const usersData = await usersResponse.json();
                setTotalUsers(usersData.count);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="dashboard-container">
            <DashboardBox2 
                orderCount={totalOrders}
                color={['#ff6b6b', '#ff8787']}
                grow={true} // You can add logic to determine growth if needed
            />
            <DashboardBox3 
                userCount={totalUsers}
                color={['#4facfe', '#00f2fe']}
                grow={true} // You can add logic to determine growth if needed
            />
        </div>
    );
};

export default Dashboard;